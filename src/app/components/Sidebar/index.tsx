import Link from "next/link";

export function Sidebar() {
  return (
    <div className="flex items-center justify-between w-full h-[100px]">
      <h3 className="text-2xl">Leonardo</h3>
      <ul className="flex gap-4 ">
        <li className="text-zinc-400 hover:text-white">
          <Link href="about">Home</Link>
        </li>
        <li className="text-zinc-400 hover:text-white">
          <Link href="about">About</Link>
        </li>
        <li className="text-zinc-400 hover:text-white">
          <Link href="about">Resume</Link>
        </li>
        <li className="text-zinc-400 hover:text-white">
          <Link href="about">Works</Link>
        </li>
        <li className="text-zinc-400 hover:text-white">
          <Link href="about">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
