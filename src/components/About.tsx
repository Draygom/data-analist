export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="text-yellow-800 font-bold">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>

        <p className="relative text-sm text-gray-600">
          Sou formado em Ciência da Computação e atuo como Analista de Dados e
          Consultor de Power BI, com mais de 5 anos de experiência. Meu objetivo
          é ajudar sua empresa a transformar dados em insights valiosos,
          facilitando a tomada de decisões estratégicas.
        </p>

        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-yellow-400/20" />
      </div>

      <div className="relative mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 p-4 ps-20 shadow-lg md:h-64 md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-white p-4 shadow-md">
            <p className="font-handwriting text-xl font-bold text-gray-800">
              Olá,
            </p>

            <p className="text-gray-700">
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-yellow-600">
                Pedro Chaves
              </span>
            </p>

            <table className="mt-4 w-full text-sm text-gray-600">
              <tbody>
                <tr>
                  <td className="font-bold text-gray-800">Idade:</td>
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
                {/* <tr>
                  <td className="font-bold text-gray-800">GitHub:</td>
                  <td className="text-right">
                    <a
                      href="https://github.com/Draygom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      /Draygom
                    </a>
                  </td>
                </tr> */}
                <tr>
                  <td className="font-bold text-gray-800">Endereço:</td>
                  <td className="text-right">Teixeira de Freitas - BA</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="text-sm font-bold text-gray-800">
                Disponível
              </span>
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
            </div>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(https://avatars.githubusercontent.com/u/15214389)] bg-cover bg-center md:-left-12 md:h-72 md:w-56" />
        </div>
      </div>
    </section>
  );
}
