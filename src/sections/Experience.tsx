import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    role: "Software Engineering",
    title: "ToverWeb",
    results: [
      { title: "Building custom software for clients" },
      { title: "Made a lot of WordPress websites" },
    ],
    link: "https://toverweb.nl",
  },
  {
    role: "Online Marketing and SEO",
    title: "Online Aannemer",
    results: [
      { title: "Learned a technical SEO" },
      { title: "Software engineering for internal projects and for clients" },
    ],
    link: "https://online-aannemer.nl",
  },
  {
    role: "Fiber networking company",
    title: "Brofiber",
    results: [
      { title: "Experience real world networking" },
      { title: "Build custom client management system" },
    ],
    link: "https://autocompletr.com",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects-section">
      <div className="container">
        <SectionHeader
          eyebrown="Real-world Experience"
          title="Take a look at my work experience"
          description="Here are some of the companies I've worked for."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:pb-16">
                <div
                  className="bg-purple-200 inline-flex gap-2 font-bold uppercase 
                  tracking-widest text-sm text-transparent bg-clip-text"
                >
                  <span>{project.role}</span>
                </div>

                <h3 className=" text-2xl md:text-4xl mt-2 md:mt-5">
                  {project.title}
                </h3>

                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, index) => (
                    <li
                      key={project.title + index}
                      className="flex gap-2 text-sm md:text-base text-white"
                    >
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>

                <a href={project.link}>
                  <button
                    className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold 
                inline-flex items-center justify-center gap-2 mt-8"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
