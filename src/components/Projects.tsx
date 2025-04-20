export function Projects() {
  const projects = [
    {
      title: "Censo Escolar",
      description: "Censo Escolar no extremo sul da Bahia",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNTFjNDFhYmMtZTA4NS00NmI1LTk5MmEtZmViOGMwYjdmNTFiIiwidCI6ImFlMWIxMGI1LTZjNGItNGUwNS1iYTQ1LTFmNWNlNGJhOTQ2MyJ9",
      embed:
        '<iframe title="Censo Escolar - Extremo Sul da Bahia" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNTFjNDFhYmMtZTA4NS00NmI1LTk5MmEtZmViOGMwYjdmNTFiIiwidCI6ImFlMWIxMGI1LTZjNGItNGUwNS1iYTQ1LTFmNWNlNGJhOTQ2MyJ9" frameborder="0" allowFullScreen="true"></iframe>',
      colSpan: "col-span-1",
    },
    {
      title: "PIB",
      description: "PIB do extremo sul da Bahia",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNDQ0MDI3Y2ItOTJlYy00Zjc4LTlmMjMtMTEwOTNiYzZiYTA4IiwidCI6ImFlMWIxMGI1LTZjNGItNGUwNS1iYTQ1LTFmNWNlNGJhOTQ2MyJ9",
      embed:
        '<iframe title="PIB - Extremo Sul da Bahia" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNDQ0MDI3Y2ItOTJlYy00Zjc4LTlmMjMtMTEwOTNiYzZiYTA4IiwidCI6ImFlMWIxMGI1LTZjNGItNGUwNS1iYTQ1LTFmNWNlNGJhOTQ2MyJ9" frameborder="0" allowFullScreen="true"></iframe>',
      colSpan: "col-span-1 md:col-span-2",
    },
  ];

  return (
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-zinc-900 text-white md:rounded-tl-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold text-gradient">
              Projetos &
            </span>
            <span className="font-handwriting text-4xl text-yellow-400">
              Portifólio
            </span>
          </h2>
          <p className="relative text-sm text-gray-400">
            Alguns dos projetos que já realizei ao longo da minha trajetória
            como Analista e Consultor
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                className="section-card card-graph flex flex-col items-center text-center"
                key={`project-${index}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  {project.description}
                </p>
                <div
                  className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-blue-100 shadow"
                  dangerouslySetInnerHTML={{
                    __html: project.embed
                      .replace(/width="\d+"/, 'width="100%"')
                      .replace(/height="\d+"/, 'height="100%"'),
                  }}
                />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 button text-blue-500 border border-blue-100 bg-white hover:bg-blue-50 hover:text-blue-900"
                >
                  Acessar relatório
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
