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
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Projetos &
            </span>
            <span className="font-handwriting text-4xl">Portifólio</span>
          </h2>

          <p className="relative text-sm text-gray-400">
            Alguns dos projeto sque eu já realizei ao longo da minha trajetória
            como Analista e Consultor
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
            {projects.map((project, index) => (
              <div
                className="group relative flex-none w-[calc(100vw-2rem)] md:w-[calc(50vw-2rem)] lg:w-[calc(33.33vw-2rem)] cursor-default rounded-lg bg-cover bg-center"
                key={`project-${index}`}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div
                  className="mt-4 aspect-w-16 aspect-h-9"
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
                  className="mt-2 inline-block rounded bg-white px-4 py-2 text-sm font-semibold text-yellow-600 hover:bg-yellow-100"
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
