import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const EN_FEATURES = [
  "Domain registration & 1-year hosting (200 SAR)",
  "Full WordPress website development (700 SAR)",
  "5-7 essential pages included",
  "Responsive design for all devices",
  "Professional theme & clear navigation",
  "Contact forms for client inquiries",
];

const AR_FEATURES = [
  "تسجيل النطاق واستضافة لمدة سنة (200 ريال)",
  "تطوير موقع ووردبريس كامل (700 ريال)",
  "5-7 صفحات أساسية مدمجة",
  "تصميم متجاوب لجميع الأجهزة",
  "قالب احترافي وتنقل واضح",
  "نماذج اتصال لاستفسارات العملاء",
];

export const PricingPackage = () => {
  const { i18n } = useTranslation();
  const isArabic = (i18n.resolvedLanguage || i18n.language) === "ar";

  const heading = isArabic
    ? "حزمة الموقع للمحامي الفردي"
    : "Solo Attorney Starter Package";

  const currency = isArabic ? "ريال" : "SAR";

  const title = isArabic ? "موقع مكتب محاماة احترافي" : "Professional Law Firm Website";

  const subtitle = isArabic
    ? "موقع ووردبريس كامل للمحامين الأفراد والمكاتب الصغيرة"
    : "Complete WordPress website for solo attorneys and small practices";

  const delivery = isArabic
    ? "التسليم: 5-7 أيام عمل من استلام المحتوى"
    : "Delivery: 5-7 business days from content receipt";

  const cta = isArabic ? "ابدأ الآن" : "Get Started Now";

  const features = isArabic ? AR_FEATURES : EN_FEATURES;

  return (
    <section className="px-6 py-24 relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-background">
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 right-1/4 w-[420px] h-[420px] bg-highlight/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-4xl relative z-10">
        <h2 className="mb-10 text-center text-3xl md:text-4xl font-bold text-secondary-foreground animate-fade-in">
          {heading}
        </h2>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl glass-strong p-8 md:p-10 border border-primary/25 shadow-[0_0_60px_rgba(0,0,0,0.35)] animate-fade-in animation-delay-100">
            <div className="text-center">
              <div className="mb-6">
                <span className="text-6xl font-bold text-primary">900</span>
                <span className="text-2xl font-semibold text-muted-foreground">
                  {" "}
                  {currency}
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-secondary-foreground">
                {title}
              </h3>
              <p className="mb-10 text-muted-foreground">{subtitle}</p>
            </div>

            <div className="mb-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 border border-primary/25">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="mb-5 text-sm text-muted-foreground/80">{delivery}</p>
              <a
                href="#contact"
                className="inline-block rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90 shadow-[0_0_30px_rgba(32,178,166,0.25)]"
              >
                {cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

