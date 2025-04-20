import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-tr from-black to-zinc-900 text-white relative overflow-hidden">
      {/* SVG npode dashboard no background */}
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 opacity-20 pointer-events-none select-none z-0"
        width="600"
        height="340"
        viewBox="0 0 600 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "90vw", maxHeight: "60vh" }}
        aria-hidden="true"
      >
        {/* Gráfico de barras */}
        <rect x="60" y="180" width="40" height="100" rx="8" fill="#facc15" />
        <rect x="120" y="120" width="40" height="160" rx="8" fill="#38bdf8" />
        <rect x="180" y="80" width="40" height="200" rx="8" fill="#a3e635" />
        <rect x="240" y="140" width="40" height="140" rx="8" fill="#f472b6" />
        {/* Gráfico de pizza */}
        <circle cx="450" cy="170" r="60" fill="#27272a" />
        <path d="M450 170 L450 110 A60 60 0 0 1 510 170 Z" fill="#facc15" />
        <path d="M450 170 L510 170 A60 60 0 0 1 480 220 Z" fill="#38bdf8" />
        <path d="M450 170 L480 220 A60 60 0 1 1 450 110 Z" fill="#a3e635" />
        {/* Linhas e detalhes */}
        <rect
          x="60"
          y="300"
          width="220"
          height="8"
          rx="4"
          fill="#fff"
          fillOpacity="0.1"
        />
        <rect
          x="60"
          y="320"
          width="160"
          height="6"
          rx="3"
          fill="#fff"
          fillOpacity="0.07"
        />
        <rect
          x="400"
          y="250"
          width="100"
          height="8"
          rx="4"
          fill="#fff"
          fillOpacity="0.1"
        />
      </svg>
      {/* Conteúdo principal */}
      <LanguageSwitcher />
      <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row relative z-10">
        <div className="basis-1/2 flex flex-col justify-center">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl text-center md:text-left">
              {t("hero.title")}
            </span>
            <span className="font-headline text-5xl font-semibold pr-2 text-gradient">
              Pedro
            </span>
            <span className="font-headline text-5xl font-light text-yellow-400">
              Chaves
            </span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
            <div className="h-1 w-12 rounded-full bg-yellow-400" />
            {t("hero.subtitle")}
          </h2>
          <p className="text-gray-400 my-6 text-center md:text-left">
            {t("hero.copy")}
          </p>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
          {/* Foto removida para um visual mais limpo */}
        </div>
      </div>
    </section>
  );
}
