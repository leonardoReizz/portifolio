import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiProjectorScreenFill } from "react-icons/pi";
import { SiNpm } from "react-icons/si";
import { projects } from "../utils/projects";

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
