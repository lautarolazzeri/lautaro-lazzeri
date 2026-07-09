import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../../data/projects";

export default function Projects() {
  return (
    <>
      <h2 className="mx-8 mt-12 mb-12 font-title text-3xl md:mx-36">
        Algunos proyectos
      </h2>

      <div className="mx-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mx-36">
        {projects.filter((_, i) => i < 6).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-16 flex w-full justify-center text-center">
        <Link href="/portfolio">
          <button className="rounded-xl bg-gray-300 px-6 py-3 font-medium text-[#151a22] duration-150 hover:bg-white">
            Ver todos los proyectos
          </button>
        </Link>
      </div>
    </>
  );
}