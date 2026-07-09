
import Image from "next/image";
import Link from "next/link";
import { BiLogoCss3 } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";

const stackIcons = {
  next: TbBrandNextjs,
  css: BiLogoCss3,
  seo: TbSeo,
  figma: FiFigma,
};


export default function ProjectCard({ project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-[#1a2028] transition-colors duration-200 hover:border-white/10">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#10151c]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-title text-xl leading-snug">{project.title}</h3>

        <div className="flex items-center gap-3">
          {project.stack
            .filter((key) => stackIcons[key])
            .map((key) => {
              const Icon = stackIcons[key];
              return (
                <Icon
                  key={key}
                  className="h-6 w-6 text-gray-500 transition-colors duration-150 hover:text-white"
                />
              );
            })}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-2">
          <Link
            href={`/portfolio/${project.slug}`}
            className="text-sm text-gray-400 duration-150 hover:text-white"
          >
            + Ver Detalles del proyecto
          </Link>

          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 rounded-xl bg-[#394552] px-5 py-2.5 text-sm duration-150 hover:bg-[#2c343c]"
            >
              Preview
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}