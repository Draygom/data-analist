import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="text-gradient font-bold">
          <span className="mr-2 font-headline text-3xl">
            {t("about.title-1")}
          </span>
          <span className="font-handwriting text-4xl">
            {t("about.title-2")}
          </span>
        </h2>

        <p className="relative text-sm text-gray-600">
          {t("about.description")}
        </p>

        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-yellow-400/20" />
      </div>

      <div className="relative mx-auto mt-20 max-w-lg flex items-center gap-6 section-card bg-white/90 shadow-lg">
        <div className="hidden md:block flex-shrink-0 relative z-10">
          <img
            src="https://avatars.githubusercontent.com/u/15214389"
            alt="Pedro Chaves"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-2xl object-cover ring-offset-4 ring-offset-white transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <p className="font-handwriting text-xl font-bold text-gray-600 mb-1">
            {t("about.card-hello")}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="mr-1">{t("about.card-intro")}</span>
            <span className="font-handwriting text-xl font-bold uppercase text-gray-600">
              Pedro Chaves
            </span>
          </p>
          <table className="mt-2 w-full text-sm text-gray-600">
            <tbody>
              <tr>
                <td className="font-bold text-gray-800">
                  {t("about.card-age")}
                </td>
                <td className="text-right">30</td>
              </tr>
              <tr>
                <td className="font-bold text-gray-800">LinkedIn:</td>
                <td className="text-right">
                  <a
                    href="https://www.linkedin.com/in/pedroachaves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    /pedroachaves
                  </a>
                </td>
              </tr>
              <tr>
                <td className="font-bold text-gray-800">
                  {t("about.card-address")}
                </td>
                <td className="text-right">Teixeira de Freitas - BA</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-sm font-bold text-gray-800">
              {t("about.card-status")}
            </span>
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
