import Link from "next/link";
import { useRouter } from "next/router";
import { FiArrowUpRight, FiArrowLeft, FiFigma } from "react-icons/fi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoJavascript } from "react-icons/bi";
import { DiCss3, DiJava, DiProlog } from "react-icons/di";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";
import { RxVercelLogo } from "react-icons/rx";

import "../../src/app/globals.css";
import ParticlesBackground from "../../src/app/components/ParticlesBackground";
import Footer from "../../src/app/containers/Footer";
import { projects, getProjectBySlug } from "../../data/projects";

const stackIcons = {
  next: { icon: TbBrandNextjs, label: "Next.js" },
  java: { icon: DiJava, label: "Java" },
  css: { icon: DiCss3, label: "CSS3" },
  html: { icon: AiOutlineHtml5, label: "HTML" },
  js: { icon: BiLogoJavascript, label: "Javascript" },
  figma: { icon: FiFigma, label: "Figma" },
  seo: { icon: TbSeo, label: "SEO" },
  vercel: { icon: RxVercelLogo, label: "Vercel" },
  prolog: { icon: DiProlog, label: "Prolog" },
};

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
}

export default function ProjectDetail({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return null;
  }

  return (
    <>
      <ParticlesBackground />
      <div className="md:mx-36 mx-8 mt-20">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-400 duration-150 hover:text-white"
        >
          <FiArrowLeft className="h-4 w-4" /> Volver atrás
        </button>
        <h3 className="md:text-5xl text-2xl">{project.title}</h3>
        <div className="md:flex-row flex flex-col mt-12">
          <div className="w-full">
            <div className="strange-padding border-t-2 border-[#636d726d]">
              {project.liveUrl != null ? <Link href={project.liveUrl} target="_blank">
                <div className="flex items-center">
                  <p>Visitar {project.title}</p>
                  <FiArrowUpRight className="ml-2" />
                </div>
              </Link>
              : "Este proyecto no tiene un sitio web disponible."
            }
            </div>

            <div className="strange-padding border-t-2 border-[#636d726d]">
              <h4 className="text-xl font-medium">Sector</h4>
              <p className="text-[#ffffff6d]">{project.sector}</p>
            </div>

            <div className="strange-padding border-t-2 border-[#636d726d]">
            <h4 className="text-xl font-medium">Herramientas</h4>

            {project.stack.map((item, index) => {
              const key = typeof item === "string" ? item : null;
              const tech = key ? stackIcons[key] : null;

              // Si existe un icono registrado
              if (tech) {
                const Icon = tech.icon;

                return (
                  <div
                    key={key}
                    className="flex items-center mt-2 gap-3 text-gray-400 duration-150 hover:text-white"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm">{tech.label}</span>
                  </div>
                );
              }

              // Si no existe, mostrar solamente el texto
              return (
                <div
                  key={index}
                  className="flex items-center mt-2 gap-3 text-gray-400"
                >
                  <span className="text-sm">
                    {typeof item === "string" ? item : item.label}
                  </span>
                </div>
              );
            })}
          </div>
          </div>
          <div className="md:ml-8 nomt">
            <p>
              {project.description.map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  <br />
                  <br />
                </span>
              ))}
            </p>
            <img
              src={project.image}
              width={500}
              height={300}
              alt={project.title}
              className="mt-5 strange-padding"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}