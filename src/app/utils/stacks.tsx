import { TbBrandNextjs } from "react-icons/tb";
import {
  SiVite,
  SiNestjs,
  SiMongodb,
  SiTailwindcss,
  SiRabbitmq,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaReact, FaPython, FaNodeJs, FaSass, FaGitAlt } from "react-icons/fa";

export const stacks = [
  {
    title: "Git",
    icon: <FaGitAlt className="w-10 h-10 text-red-500" />,
  },
  {
    title: "React",
    icon: <FaReact className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "NodeJS",
    icon: <FaNodeJs className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Python",
    icon: <FaPython className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "NestJS",
    icon: <SiNestjs className="w-10 h-10 text-red-500" />,
  },
  {
    title: "Prisma ORM",
    icon: <SiNestjs className="w-10 h-10 text-blue-300" />,
  },
  {
    title: "NextJS",
    icon: <TbBrandNextjs className="w-10 h-10" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Vite",
    icon: <SiVite className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Sass",
    icon: <FaSass className="w-10 h-10 text-rose-500" />,
  },
  {
    title: "Mysql",
    icon: <GrMysql className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="w-10 h-10 text-green-500" />,
  },
  {
    title: "RabbitMQ",
    icon: <SiRabbitmq className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Zabbix",
    icon: <SiMongodb className="w-10 h-10" />,
  },
];
