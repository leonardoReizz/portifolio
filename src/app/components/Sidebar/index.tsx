import Link from "next/link";
import { FaDev } from "react-icons/fa";

export function Sidebar() {
  return (
    <div className="flex fixed z-[100] bg-zinc-900/75 backdrop-blur-md px-4 items-center justify-between w-full h-[70px]">
      <Link href="/" className="flex items-center gap-2">
        <FaDev className="w-6 h-6 " />
        <h3 className="text-xl">Leonardo Reis</h3>
      </Link>
      <ul className="flex gap-4 ">
        <li className="text-zinc-400 hover:text-white">
          <Link href="/">Inicio</Link>
        </li>
        <li className="text-zinc-400 hover:text-white">
          <Link href="projects">Projetos</Link>
        </li>
        {/* <li className="text-zinc-400 hover:text-white">
          <Link href="about">Blog</Link>
        </li> */}
      </ul>
    </div>
  );
}
