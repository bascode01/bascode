import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory orders registry
const ADMIN_EMAIL = "bascode84@gmail.com";
const ordersDb: any[] = [];

// Initialize Gemini client server-side
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    })
  : null;

// Static serve for bascode-platform.html standalone file
app.get("/bascode-platform.html", (_req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "bascode-platform.html"));
});

// API Health route
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "BASCODE Platform", adminEmail: ADMIN_EMAIL });
});

// Order Submission API
app.post("/api/orders", (req, res) => {
  try {
    const { orderDetails } = req.body;
    if (!orderDetails) {
      return res.status(400).json({ error: "بيانات الطلب غير مكتملة." });
    }

    const newOrder = {
      ...orderDetails,
      id: orderDetails.orderId || `BAS-${Math.floor(100000 + Math.random() * 900000)}`,
      receivedAt: new Date().toISOString(),
      adminEmailTarget: ADMIN_EMAIL,
    };

    ordersDb.unshift(newOrder);

    // Format item details
    let itemsFormatted = "";
    if (Array.isArray(newOrder.items) && newOrder.items.length > 0) {
      itemsFormatted = newOrder.items
        .map((it: any, idx: number) => {
          const title = it.service?.titleAr || it.service?.titleEn || it.title || "خدمة رقمية";
          const tier = it.tierNameAr || it.tierNameEn || it.tier || "الأساسية";
          const price = it.unitPriceUSD ? `$${it.unitPriceUSD * (it.quantity || 1)}` : "";
          return `${idx + 1}. ${title} (الباقة: ${tier}) - الكمية: ${it.quantity || 1} ${price}`;
        })
        .join("\n");
    } else if (newOrder.customServiceTitle) {
      itemsFormatted = `1. ${newOrder.customServiceTitle} - (حجم: ${newOrder.customScale || "مخصص"})`;
    } else {
      itemsFormatted = "خدمات مخصصة من منصة باسكود";
    }

    const emailSubject = `[طلب خدمة جديد - BASCODE #${newOrder.id}] العميل: ${newOrder.clientName}`;
    const emailBody = `مرحباً إدارة باسكود (BASCODE)،

وصلكم طلب جديد عبر المنصة للتنفيذ والتواصل مع العميل:

--------------------------------------------------
📌 بيانات العميل:
- الاسم: ${newOrder.clientName}
- البريد الإلكتروني: ${newOrder.clientEmail}
- رقم الهاتف / الواتساب: ${newOrder.clientPhone}
- الشركة / المؤسسة: ${newOrder.companyName || "غير محدد"}

--------------------------------------------------
🛠️ تفاصيل الخدمات المطلوبة:
${itemsFormatted}

--------------------------------------------------
💰 الحساب المالي وطريقة الدفع:
- المبلغ الإجمالي (USD): $${newOrder.totalUSD || 0}
- العملة المختارة بالواجهة: ${newOrder.currency || "IQD"}
- طريقة الدفع المفضلة: ${newOrder.paymentMethod || "بطاقة إلكترونية / تحويل"}

--------------------------------------------------
📝 ملاحظات العميل وتعليمات المشروع:
${newOrder.notes || "لا توجد ملاحظات إضافية"}

--------------------------------------------------
تاريخ وتوقيت الطلب: ${new Date().toLocaleString("ar-IQ")}
رقم المرجعية: #${newOrder.id}
تم الإرسال تلقائياً إلى: ${ADMIN_EMAIL}`;

    console.log("=================================================");
    console.log(`📩 BASCODE ORDER NOTIFICATION FOR ${ADMIN_EMAIL}`);
    console.log(emailBody);
    console.log("=================================================");

    const mailtoUrl = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    return res.json({
      success: true,
      orderId: newOrder.id,
      targetEmail: ADMIN_EMAIL,
      message: `تم تسجيل الطلب بنجاح وإرساله إلى البريد الإلكتروني الإداري (${ADMIN_EMAIL})`,
      mailtoUrl,
      emailSubject,
      emailBody,
    });
  } catch (error) {
    console.error("Order submission error:", error);
    return res.status(500).json({ error: "حدث خطأ أثناء تسجيل الطلب." });
  }
});

// Get orders list endpoint for verification
app.get("/api/orders", (_req, res) => {
  return res.json({
    adminEmail: ADMIN_EMAIL,
    totalOrders: ordersDb.length,
    orders: ordersDb,
  });
});

// AI Service Consultant Endpoint
app.post("/api/ai-consultant", async (req, res) => {
  try {
    const { message, language = "ar", projectType, budget } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "الرجاء إدخال وصف مشروعك أو استفسارك." });
    }

    if (!ai) {
      // Fallback helpful response if API key is not yet set
      const isAr = language === "ar";
      return res.json({
        recommendation: isAr
          ? `بناءً على طلبك ("${message}")، نوصي بحزمة باسكود المتكاملة: تطوير منصة باسكود الويب + تطبيق الجوال + حماية الكود. سيتم إرسال كافة التفاصيل إلى ${ADMIN_EMAIL}.`
          : `Based on your query ("${message}"), we recommend: BASCODE Fullstack Web App + Mobile + Security. Details will be sent to ${ADMIN_EMAIL}.`,
        suggestedServiceIds: ["web-fullstack", "uiux-design", "cloud-devops"],
        estimatedTime: isAr ? "14 - 21 يوم عمل" : "14 - 21 Business Days",
        estimatedCostUSD: 1800,
      });
    }

    const systemInstruction = `
You are the Senior Digital Solutions Consultant for 'BASCODE' (باسكود), a premier software and digital services platform with slogan "CODE. DESIGN. SECURE. SUCCEED.".
Your task is to analyze client project ideas or technical requirements and output a structured, enthusiastic, and professional digital transformation recommendation in Arabic or English based on the requested language (Default: ${language}).

Context & Platform Services Available on BASCODE:
1. Web Development (Fullstack, Next.js/React, E-Commerce, SaaS, Custom API) - ID: 'web-fullstack', 'ecommerce-pro'
2. Mobile App Development (iOS & Android Flutter/React Native) - ID: 'mobile-app'
3. UI/UX Design & Branding (Figma Design System, Brand Identity, Motion) - ID: 'uiux-design', 'brand-identity'
4. AI Solutions & Automation (Custom Chatbots, Gemini/LLM Integration, Workflow Automation) - ID: 'ai-automation'
5. Cybersecurity & Cloud DevOps (Security Audit, AWS/GCP Setup, Penetration Testing) - ID: 'cloud-security'
6. Digital Marketing & Growth SEO (SEO Optimization, PPC Campaigns, Social Media Strategy) - ID: 'digital-marketing'
7. Media & Video Production (Video Editing, Motion Graphics, Voiceover) - ID: 'video-media'

Input from Client:
- Query: "${message}"
- Project Type preference: ${projectType || "General"}
- Estimated Budget: ${budget || "Not specified"}

Always return a JSON object with this exact shape:
{
  "recommendation": "A friendly 3-4 sentence expert advice explaining why these services are the best fit for their project.",
  "suggestedServiceIds": ["service-id-1", "service-id-2"],
  "estimatedTime": "e.g., 2 to 3 weeks",
  "estimatedCostUSD": 1500,
  "keyDeliverables": ["Deliverable 1", "Deliverable 2", "Deliverable 3"]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: message,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    const text = response.text || "{}";
    const parsedData = JSON.parse(text);

    return res.json(parsedData);
  } catch (error) {
    console.error("AI Consultant Error:", error);
    return res.status(500).json({
      error: "حدث خطأ في معالجة طلب الاستشارة الذكية.",
      fallbackAdvice: "يمكنك تصفح دليل الخدمات أو التحدث مع أحد موظفي الدعم المباشر.",
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BASCODE Platform running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
