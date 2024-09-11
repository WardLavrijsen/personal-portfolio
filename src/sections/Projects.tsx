import PicToLinesPage from "@/assets/images/pictolines.jpg";
import NationaalEnergieLabelPage from "@/assets/images/nationaalenergielabel.jpg";
import AutocompletrPage from "@/assets/images/autocompletr.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "PicToLines",
    year: "2024",
    title:
      "Providing creative, personalized coloring pages for families and hobbyists",
    results: [
      { title: "Using AI to create coloring pages" },
      { title: "User can use own images to create coloring pages" },
      { title: "Stripe payments and credit usage" },
    ],
    link: "https://app.pictolines.com",
    image: PicToLinesPage,
  },
  {
    company: "Nationaal Energielabel",
    year: "2023",
    title:
      "Helping homeowners easily compare energy labels for more efficient decision-making.",
    results: [
      { title: "Hundreds of connected companies" },
      { title: "Compare based on price or distance" },
      { title: "Automaticly get data from multiple APIs" },
    ],
    link: "https://nationaalenergielabel.com",
    image: NationaalEnergieLabelPage,
  },
  {
    company: "Autocompletr",
    year: "2023",
    title: "Search box optimization",
    results: [
      { title: "Easy to use dashboard with results" },
      { title: "Integration with loats of external APIs" },
      { title: "Usage based payments with stripe" },
    ],
    link: "https://autocompletr.com",
    image: AutocompletrPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects-section">
      <div className="container">
        <SectionHeader
          eyebrown="Real-world Results"
          title="Take a look at some of my projects"
          description="Here are some of the projects I've worked on and the results they've achieved."
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
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-purple-200 inline-flex gap-2 font-bold uppercase 
                  tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
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

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
