import { HiAcademicCap } from "react-icons/hi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  const educations = [
    {
      name: "Bachelor in Computer Science",
      description: "Pitágoras College of Teixeira de Freitas",
    },
    {
      name: "Microsoft Power BI Data Analyst",
      description: "Course PL-300T00-A: Microsoft Power BI Data Analyst",
    },
  ];

  const educationsPtbr = [
    {
      name: "Bacharel em Ciência da Computação",
      description: "Faculdade Pitágoras de Teixeira de Freitas",
    },
    {
      name: "Analista de Dados do Microsoft Power BI",
      description: "Curso PL-300T00-A: Analista de Dados do Microsoft Power BI",
    },
  ];

  const skills = [
    {
      name: "SQL",
      icon: "images/sql.svg",
      level: 90,
    },
    {
      name: "Python",
      icon: "images/python.svg",
      level: 85,
    },
    {
      name: "Power BI",
      icon: "images/power_bi.svg",
      level: 100,
    },
  ];

  return (
    <section className="rounded-br-[80px] bg-gradient-to-tr from-zinc-900 to-black md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center text-white">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gradient">
              {t("skills.title-1")}
            </span>
            <span className="font-handwriting text-4xl text-yellow-400">
              {t("skills.title-2")}
            </span>
          </h2>

          <p className="relative text-sm text-gray-400">{t("skills.copy")}</p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-yellow-400/20" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gradient">
              <HiAcademicCap className="h-8 w-8 text-yellow-400" />
              {t("skills.sub-title")}
            </h3>

            {(t("skills.lang") === "pt-br" ? educationsPtbr : educations).map(
              (education, index) => (
                <div key={`education-${index}`} className="section-card mb-4">
                  {education.name}
                  <p className="relative text-sm text-gray-600">
                    {education.description}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gradient">
              <HiCodeBracketSquare className="h-8 w-8 text-yellow-400" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="card-graph flex flex-col items-center gap-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2 shadow">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                    />
                  </div>

                  <h4 className="font-headline text-gray-900">{skill.name}</h4>
                  <div className="w-full rounded-full bg-zinc-600">
                    <div
                      className="graph-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
