import { HiDatabase, HiLockClosed, HiOutlineChartBar } from "react-icons/hi";

export function Services() {
  const services = [
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
        <p className="text-sm font-semibold uppercase text-yellow-600">
          O que faço de melhor
        </p>

        <h2 className="mb-2 font-bold text-yellow-800">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>

        <p className="text-sm text-gray-600">
          Construo relatórios com dashboards interativos e totalmente
          automatizados, eliminando a necessidade de planilhas para que você
          possa focar no que deve ser feito!
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-1/3 rounded-lg bg-yellow-600 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>

            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
