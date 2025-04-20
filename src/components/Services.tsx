import { HiDatabase, HiLockClosed, HiOutlineChartBar } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: "Dashboard Creation",
      description:
        "Development of reports with interactive dashboards in Power BI",
      icon: <HiOutlineChartBar />,
    },
    {
      title: "ERP Integration",
      description:
        "Reports that automatically update, powered by data directly from your ERP software",
      icon: <HiDatabase />,
    },
    {
      title: "Security (RLS)",
      description:
        "Row-level security, ensuring that confidential data is protected",
      icon: <HiLockClosed />,
    },
  ];

  const servicesPtbr = [
    {
      title: "Criação de Dashboards",
      description:
        "Desenvolvimento de relatórios com dashboards interativos no Power BI",
      icon: <HiOutlineChartBar />,
    },
    {
      title: "Integração com Sistemas",
      description:
        "Relatórios que atualizam automáticamente alimentados com os dados direto do seu sistema",
      icon: <HiDatabase />,
    },
    {
      title: "Segurança (RLS)",
      description:
        "Segurança em nível de linha, garantindo que os dados confidenciais estejam protegidos",
      icon: <HiLockClosed />,
    },
  ];

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-500">
          {t("services.header")}
        </p>

        <h2 className="mb-2 font-bold text-gradient">
          <span className="mr-2 font-headline text-3xl">
            {t("services.title")}
          </span>
        </h2>

        <p className="text-sm text-gray-600">{t("services.description")}</p>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        {(t("services.lang") === "pt-br" ? servicesPtbr : services).map(
          (service, index) => (
            <div
              className="card-graph basis-1/3 flex flex-col items-center text-center"
              key={`service-${index}`}
            >
              <div className="mb-2 text-3xl text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
