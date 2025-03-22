import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex items-center gap-4 min-h-screen flex-col text-foreground bg-secondary/30">
      <Header />
      <main className="space-y-32">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
    // <main className="flex min-h-screen flex-col justify-start gap-10 mt-10">
    //   <div className="w-full flex flex-col gap-4">
    //     <div className="flex gap-2">
    //       <img src="" alt="" />
    //       <div className="flex flex-col gap-2">
    //         <h3 className="text-3xl font-bold">Leonardo Reis</h3>
    //         <p className="text-zinc-500">Desenvolvedor Typescript Fullstack</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-wrap gap-4 max-md:justify-center">
    //       <Link
    //         href="https://www.linkedin.com/in/leonardoreiss/"
    //         target="_blank"
    //         className="hover:bg-zinc-800/50 flex  max-w-[150px] flex-[1_1_150px] gap-2 items-center py-2 justify-center rounded-md hover:text-indigo-500 transition-all duration-200"
    //       >
    //         <FaLinkedin className="w-5 h-5" />
    //         <p>Linkedin</p>
    //       </Link>
    //       <Link
    //         href="https://github.com/leonardoReizz"
    //         target="_blank"
    //         className="hover:bg-zinc-800/50 flex  max-w-[150px] flex-[1_1_150px] gap-2 items-center py-2 justify-center rounded-md hover:text-indigo-500 transition-all duration-200"
    //       >
    //         <FaGithub className="w-5 h-5" />
    //         <p>Github</p>
    //       </Link>
    //       <Link
    //         target="_blank"
    //         href="https://twitter.com/leonardooreizz"
    //         className="hover:bg-zinc-800/50 flex  max-w-[150px] flex-[1_1_150px] gap-2 items-center py-2 justify-center rounded-md hover:text-indigo-500 transition-all duration-200"
    //       >
    //         <FaTwitter className="w-5 h-5" />
    //         <p>Twitter</p>
    //       </Link>
    //       <div
    //         // target="_blank"
    //         // href="https://twitter.com/leonardooreizz"
    //         className="hover:bg-zinc-800/50 flex  max-w-[260px] flex-[1_1_150px] gap-2 items-center py-2 justify-center rounded-md hover:text-indigo-500 transition-all duration-200"
    //       >
    //         <MdEmail className="w-5 h-5" />
    //         <p>amarantee.reis@gmail.com</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="border p-4 rounded-md border-zinc-800 text-zinc-400">
    //     <h5 className="text-indigo-500 font-bold text-lg">Sobre Mim</h5>
    //     <p className="mt-4">
    //       Sou um entusiasta da tecnologia, mergulhado no universo do
    //       desenvolvimento. Com especialização em Typescript , minha jornada
    //       acadêmica em Sistemas de Informação é apenas o início da minha busca
    //       por conhecimento. Com mais de dois anos de experiência, destaco-me na
    //       criação de APIs, microserviços e interfaces front-end. Meu domínio em
    //       tecnologias como Node.js, React, MongoDB e MySQL é evidente, e meu
    //       foco atual é aprimorar minhas habilidades e conceitos, para continuar
    //       sempre evoluindo e contruindo projetos sustentaveis. Meus projetos no
    //       GitHub são a expressão do meu compromisso com o aprendizado constante
    //       e meu entusiasmo por colaborações no cenário do desenvolvimento de
    //       software.
    //     </p>
    //   </div>

    //   <div className="flex gap-8 border-zinc-800 text-zinc-400 max-md:flex-col">
    //     <div className="rounded-md w-full flex flex-col gap-4 ">
    //       <div className="flex justify-between align-center">
    //         <h5 className=" font-semibold text-zinc-200 text-lg group-hover:text-indigo-500 transition-all">
    //           Projetos
    //         </h5>
    //         <Link
    //           href="/projects"
    //           className="text-sm hover:text-indigo-500 hover:underline leading-7"
    //         >
    //           Ver Mais
    //         </Link>
    //       </div>
    //       {projects.map((project) => {
    //         return (
    //           <Link
    //             href={project.link}
    //             key={project.title}
    //             target="_blank"
    //             className="flex flex-col bg-zinc-800/25 p-4 cursor-pointer rounded-md border border-zinc-800 group hover:bg-zinc-800/50 transition-all "
    //           >
    //             <h5 className=" font-semibold text-zinc-200 text-lg group-hover:text-indigo-500 transition-all">
    //               {project.title}
    //             </h5>
    //             <p className="text-sm">{project.description}</p>
    //           </Link>
    //         );
    //       })}
    //     </div>
    //     <div className="rounded-md w-full flex flex-col gap-4">
    //       <h5 className=" w-full font-semibold text-zinc-200 text-lg group-hover:text-indigo-500 transition-all">
    //         Principais Stacks
    //       </h5>
    //       <div className="flex flex-wrap gap-4">
    //         {stacks.map((stack) => {
    //           return (
    //             <div
    //               key={stack.title}
    //               className="flex-[1_1_200px] gap-2  transition-all  hover:bg-zinc-800/50 hover:text-indigo-500 items-center justify-center flex h-[90px] flex-col bg-zinc-800/25 p-4 rounded-md border border-zinc-800"
    //             >
    //               <h5>{stack.title}</h5>
    //               {stack.icon}
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
