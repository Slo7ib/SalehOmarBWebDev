import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const EN_TABS = [
  { id: "tab1", label: "Lawfirms" },
  { id: "tab2", label: "Restraunts" },
  { id: "tab3", label: "Buisnesses" },
];

const AR_TABS = [
  { id: "tab1", label: "المحاماة" },
  { id: "tab2", label: "المطاعم" },
  { id: "tab3", label: "الأعمال" },
];

const TAB_COPY = {
  tab1: {
    en: (
      <>
        This is a demo for a <strong>Lawfirms website</strong>.
      </>
    ),
    ar: (
      <>
        هذا عرض تجريبي لموقع <strong>المحاماة</strong>.
      </>
    ),
  },
  tab2: {
    en: (
      <>
        This is a demo for a <strong>Restraunts website</strong>.
      </>
    ),
    ar: (
      <>
        هذا عرض تجريبي لموقع <strong>المطاعم</strong>.
      </>
    ),
  },
  tab3: {
    en: (
      <>
        This is a demo for a <strong>Buisnesses website</strong>.
      </>
    ),
    ar: (
      <>
        هذا عرض تجريبي لموقع <strong>الأعمال</strong>.
      </>
    ),
  },
};

const VIDEO_SOURCES = {
  tab1: {
    desktop: "/assets/desktop-lawfirm-demo.mp4",
    mobile: "/assets/mobile-lawfirm-demo.mp4",
  },
  tab2: {
    desktop: "/assets/desktop-restaurant-demo.mp4",
    mobile: "/assets/mobile-restaurant-demo.mp4",
  },
  tab3: {
    desktop: "/assets/desktop-business-demo.mp4",
    mobile: "/assets/mobile-business-demo.mp4",
  },
};

export const DemoTabs = () => {
  const { i18n } = useTranslation();
  const isArabic = (i18n.resolvedLanguage || i18n.language) === "ar";
  const tabs = useMemo(() => (isArabic ? AR_TABS : EN_TABS), [isArabic]);
  const [active, setActive] = useState("tab1");

  const activeCopy = TAB_COPY[active]?.[isArabic ? "ar" : "en"];
  const activeVideo = VIDEO_SOURCES[active];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto w-full max-w-5xl glass-strong rounded-3xl p-6 md:p-8 glow-border border border-primary/20">
          <div className="mx-auto mb-6 inline-flex w-full flex-wrap items-center justify-center gap-2">
            <div className="glass rounded-2xl p-1 flex items-center gap-1">
              {tabs.map((tab, idx) => {
                const isActive = tab.id === active;
                const isFirst = idx === 0;
                const isLast = idx === tabs.length - 1;

                const cornerClass = isArabic
                  ? isFirst
                    ? "rounded-tr-2xl"
                    : isLast
                      ? "rounded-bl-2xl"
                      : "rounded-xl"
                  : isFirst
                    ? "rounded-tl-2xl"
                    : isLast
                      ? "rounded-br-2xl"
                      : "rounded-xl";

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={[
                      "h-10 px-4 md:px-6 text-sm font-semibold transition-all",
                      cornerClass,
                      isActive
                        ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(32,178,166,0.25)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface",
                    ].join(" ")}
                    type="button"
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <p className="mb-6 text-muted-foreground text-base md:text-lg">
              {activeCopy}
            </p>

            {/* Desktop Video */}
            <div className="mx-auto hidden w-full max-w-4xl md:block">
              <video
                className="w-full rounded-2xl glass shadow-[0_0_40px_rgba(0,0,0,0.35)]"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={activeVideo.desktop} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Mobile Video */}
            <div className="mx-auto block w-full max-w-md md:hidden">
              <video
                className="w-full rounded-2xl glass shadow-[0_0_40px_rgba(0,0,0,0.35)]"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={activeVideo.mobile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground/80">
          Place your videos in <span className="text-foreground">`public/assets/`</span>{" "}
          with the filenames used above.
        </p>
      </div>
    </section>
  );
};

