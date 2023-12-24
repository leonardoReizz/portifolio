import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiProjectorScreenFill } from "react-icons/pi";
import { SiNpm } from "react-icons/si";

const projects = [
  {
    title: "Imagine UI",
    image: "imagineui.png",
    description:
      "Explore a biblioteca exclusiva de componentes React Imagine UI, criada meticulosamente com Tailwind CSS para potencializar seu desenvolvimento.",
    githubLink: "https://github.com/leonardoReizz/imagine-ui",
    projectLink: "http://imagine-ui.com/",
    npmLink: "https://www.npmjs.com/package/@imagine-ui/react",
  },
  {
    title: "Associacao Aconchego",
    image: "aconchego.png",
    description:
      "A Aconchego é uma iniciativa sem fins lucrativos dedicada a fazer a diferença na vida de famílias economicamente vulneráveis, que enfrentam desafios especiais devido a membros com necessidades especiais, em particular aqueles afetados pelo Transtorno do Espectro Autista (TEA).",
    projectLink: "https://associacaoaconchego.com/",
  },
  {
    title: "NativeSec",
    image: "nativesec.png",
    description:
      "Proteja suas senhas com criptografia de ponta e organize grupos ilimitados com o Nativesec. Mantenha-se seguro usando o OpenPGP reconhecido mundialmente.",
    githubLink: "https://github.com/Nativesec/nativesec-desktop",
    projectLink: "https://nativesec.io/",
  },
  {
    title: "Gita",
    image: "gita.png",
    description:
      "Obtenha visibilidade total e gerencie saúde e segurança em clusters Kubernetes. Identifique e resolva problemas com base em práticas sólidas e documentação detalhada.",
    projectLink: "https://site.gita.jackexperts.com.br",
  },
  {
    title: "Portifolio",
    description:
      "Explore meu portfólio detalhado e dinâmico. Descubra meu trabalho, habilidades e projetos, tudo em um site intuitivo e personalizado.",
    githubLink: "https://github.com/leonardoReizz/portifolio",
    projectLink: "https://leonardo-reis.com",
  },
  {
    title: "Eslint Config",
    description:
      "Configuração pronta para ESLint em Node, React e Next.js. Simplifique seu desenvolvimento com uma configuração prévia, disponível no npm.",
    githubLink: "https://github.com/leonardoReizz/portifolio",
    projectLink: "https://leonardo-reis.com",
    npmLink: "https://www.npmjs.com/package/@leonardo-reis/eslint-config",
  },
];

export default function Projects() {
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col gap-4 flex-[1_1_400px]  bg-zinc-800/25 p-4 cursor-pointer rounded-md border border-zinc-800 group  transition-all "
            >
              {project.image && (
                <img
                  alt=""
                  className="object-cover duration-500 transition-all hover:h-[180px] w-full h-[150px]"
                  src={project.image}
                />
              )}
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="w-full flex gap-4 text-center">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="bg-zinc-800 w-full py-3 rounded-md hover:bg-zinc-700/75 transition-all flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    Github
                  </Link>
                )}
                {project.projectLink && (
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    className="w-full bg-zinc-800 py-3 rounded-md hover:bg-zinc-700/75 transition-all flex items-center justify-center gap-2"
                  >
                    <PiProjectorScreenFill />
                    Projeto
                  </Link>
                )}
              </div>
              {project.npmLink && (
                <Link
                  href={project.npmLink}
                  target="_blank"
                  className="w-full bg-zinc-800 py-3 rounded-md hover:bg-zinc-700/75 transition-all flex items-center justify-center gap-2"
                >
                  <SiNpm className="text-red-500 w-3 h-3" />
                  NPM
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
