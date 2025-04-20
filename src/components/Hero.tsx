import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-tr from-black to-zinc-900 text-white">
      <LanguageSwitcher />
      <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
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
