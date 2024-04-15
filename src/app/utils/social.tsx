import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

export const socials = [
  {
    id: "1",
    icon: <FaGithub className="w-7 h-7" />,
    title: "Configura meu GitHub",
    link: "https://github.com/leonardoReizz/",
  },
  {
    id: "2",
    icon: <FaLinkedin className="w-7 h-7" />,
    title: "Configura meu Linkedin",
    link: "https://www.linkedin.com/in/leonardoreiss",
  },
  {
    id: "3",
    icon: <BsTwitterX className="w-7 h-7" />,
    title: "Me siga no X",
    link: "https://twitter.com/leonardooreizz",
  },
  {
    id: "4",
    icon: <FaDiscord className="w-7 h-7" />,
    title: "Faca parte da comunidade",
    link: "https://discord.gg/r6st4jnymh",
  },
];
