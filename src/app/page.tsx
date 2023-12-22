import { MdEmail } from "react-icons/md";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaPython,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVite, SiNestjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const projects = [
  {
    title: "Nativesec",
    description: "native sec e um sistema",
  },
  {
    title: "Gita",
    description: "gita e um sistema para monitoramento kubernerts",
  },
  {
    title: "OLT Manager",
    description: "Sistema de gerenciamento para provedores GPON e EPON",
  },
];

const stacks = [
  {
    title: "React",
    icon: <FaReact className="w-10 h-10" />,
  },
  {
    title: "NodeJS",
    icon: <FaNodeJs className="w-10 h-10" />,
  },
  {
    title: "Python",
    icon: <FaPython className="w-10 h-10" />,
  },
  {
    title: "NestJS",
    icon: <SiNestjs className="w-10 h-10" />,
  },
  {
    title: "Next",
    icon: <TbBrandNextjs className="w-10 h-10" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="w-10 h-10" />,
  },
  {
    title: "Vite",
    icon: <SiVite className="w-10 h-10" />,
  },
  {
    title: "Sass",
    icon: <FaSass className="w-10 h-10" />,
  },
  {
    title: "Mysql",
    icon: <GrMysql className="w-10 h-10" />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="w-10 h-10" />,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start gap-10 mt-10">
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-2">
          <img src="" alt="" />
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold">Leonardo Reis</h3>
            <p className="text-zinc-500">Desenvolvedor Typescript Fullstack</p>
          </div>
        </div>
        <div className="flex gap-4 ">
          <button className="hover:bg-zinc-800/50 flex  gap-2 items-center py-2 px-6 rounded-md hover:text-indigo-500 transition-all duration-200">
            <FaLinkedin className="w-5 h-5" />
            <p>Linkedin</p>
          </button>
          <button className="hover:bg-zinc-800/50 flex  gap-2 items-center py-2 px-6 rounded-md hover:text-indigo-500 transition-all duration-200">
            <FaGithub className="w-5 h-5" />
            <p>Github</p>
          </button>
          <button className="hover:bg-zinc-800/ flex  gap-2 items-center py-2 px-6 rounded-md hover:text-indigo-500 transition-all duration-200">
            <FaTwitter className="w-5 h-5" />
            <p>Twitter</p>
          </button>
          <button className="hover:bg-zinc-800/50 flex  gap-2 items-center py-2 px-6 rounded-md hover:text-indigo-500 transition-all duration-200">
            <MdEmail className="w-5 h-5" />
            <p>Email</p>
          </button>
        </div>
      </div>
      <div className="border p-4 rounded-md border-zinc-800 text-zinc-400">
        <h5 className="text-indigo-500 font-bold text-lg">About Me</h5>
        <p className="mt-4">
          Hello, I am a technology enthusiast who is constantly seeking new
          opportunities to learn and grow professionally. Currently, I possess
          skills in Next, React, Node.js, among other cutting-edge stacks in the
          market. Currently, I am a Freelance Developer who performs live coding
          with the intention of helping my community with tips on React, Next,
          Node, and many other technologies. We are also creating an Open Source
          project
        </p>
      </div>

      <div className="flex gap-8 border-zinc-800 text-zinc-400">
        <div className="rounded-md w-full flex flex-col gap-4">
          <h5 className=" font-semibold text-zinc-200 text-lg group-hover:text-indigo-500 transition-all">
            Projetos
          </h5>
          {projects.map((project) => {
            return (
              <div
                key={project.title}
                className="flex flex-col bg-zinc-800/25 p-4 cursor-pointer rounded-md border border-zinc-800 group hover:bg-zinc-800/50 transition-all "
              >
                <h5 className=" font-semibold text-zinc-200 text-lg group-hover:text-indigo-500 transition-all">
                  {project.title}
                </h5>
                <p className="text-sm">{project.description}</p>
              </div>
            );
          })}
        </div>
        <div className="rounded-md w-full flex flex-col gap-4">
          <h5 className=" w-full font-semibold text-zinc-200 text-lg group-hover:text-indigo-500 transition-all">
            Stacks
          </h5>
          <div className="flex flex-wrap gap-4">
            {stacks.map((stack) => {
              return (
                <div
                  key={stack.title}
                  className="flex-[1_1_200px] gap-2  transition-all  hover:bg-zinc-800/50 hover:text-indigo-500 items-center justify-center flex h-[90px] flex-col bg-zinc-800/25 p-4 rounded-md border border-zinc-800"
                >
                  <h5>{stack.title}</h5>
                  {stack.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
