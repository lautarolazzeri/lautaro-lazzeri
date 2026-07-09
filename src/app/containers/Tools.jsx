import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { RxVercelLogo } from "react-icons/rx";

const tools = [
  { icon: BiGitBranch, label: "Git" },
  { icon: AiFillGithub, label: "Github" },
  { icon: AiFillGitlab, label: "Gitlab" },
  { icon: DiScrum, label: "Scrum" },
  { icon: FiFigma, label: "Figma" },
  { icon: RxVercelLogo, label: "Vercel" },
];

export default function Tools() {
  return (
    <>
      <h2 className="mx-8 mb-12 mt-20 font-title text-3xl md:mx-36">
        Herramientas
      </h2>
      <div className="mx-8 flex flex-wrap items-center justify-center md:mx-36 md:grid md:grid-cols-3 lg:grid-cols-6">
        {tools.map(({ icon: Icon, label }) => (
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