import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoJavascript } from "react-icons/bi";
import { DiCss3, DiFirebase, DiJava } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiC, SiCplusplus, SiCsharp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const technologies = [
  { icon: AiOutlineHtml5, label: "HTML" },
  { icon: DiCss3, label: "CSS3" },
  { icon: BiLogoJavascript, label: "Javascript" },
  { icon: TbBrandNextjs, label: "Next Js" },
  { icon: FaReact, label: "React" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiTypescript, label: "Typescript" },
  { icon: DiJava, label: "Java" },
  { icon: SiC, label: "C" },
  { icon: SiCplusplus, label: "C++" },
  { icon: SiCsharp, label: "C#" },
  { icon: DiFirebase, label: "Firebase / Supabase" },
];

export default function Technologies() {
  return (
    <>
      <h2 className="mx-8 mb-12 mt-20 font-title text-3xl md:mx-36">
        Tecnologías utilizadas
      </h2>
      <div className="mx-8 flex flex-wrap items-center justify-center md:mx-36 md:grid md:grid-cols-3 lg:grid-cols-4">
        {technologies.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex w-full items-center gap-4 border-l-2 border-[#636d72] px-3 py-8 text-gray-400 duration-100 hover:border-l-2 hover:border-[#5477ff] hover:text-white"
          >
            <Icon className="h-14 w-14 duration-150" />
            <p className="mt-2">{label}</p>
          </div>
        ))}
      </div>
    </>
  );
}