import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-2 justify-end p-2">
      <button
        onClick={() => i18n.changeLanguage("pt-BR")}
        className={i18n.language === "pt-BR" ? "font-bold underline" : ""}
        aria-label="Mudar idioma para português"
      >
        PT
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={i18n.language === "en" ? "font-bold underline" : ""}
        aria-label="Change language to English"
      >
        EN
      </button>
    </div>
  );
}
