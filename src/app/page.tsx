"use client";

import { FcBusiness } from "react-icons/fc";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "./utils/projects";
import { companies } from "./utils/companies";
import { format } from "date-fns";
import { useHomePage } from "./hooks/useHomePage";
import { socials } from "./utils/social";
import { stacks } from "./utils/stacks";
import { Map } from "./components/Map";
import Image from "next/image";

export default function Home() {
  const { handleTheme } = useHomePage();

  return (
    <main className="flex justify-start gap-20 max-lg:flex-col overflow-scroll h-screen">
      <div className="w-full flex flex-col gap-8 p-4 h-full">
        <div className="flex flex-col gap-4">
          <div className="w-[150px] h-[150px] bg-red-500 rounded-md"></div>
          <div className="flex gap-4">
            <Badge className="cursor-pointer" onClick={handleTheme}>
              Toggle Theme
            </Badge>
            <Badge className="cursor-pointer">Blog</Badge>
          </div>
          <div>
            <h3 className="text-3xl font-medium text-foreground">
              Leonardo Reis
            </h3>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              quidem cupiditate illo optio minus et corrupti itaque cumque, rem
              aliquid odit, aut eaque explicabo, nulla possimus suscipit vel
              enim iste.
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 overflow-scroll h-[calc(100vh-200px)] max-lg:overflow-none max-lg:h-full">
          <div className="flex items-center gap-2">
            <FcBusiness className="w-6 h-6" />
            <h5 className="text-lg font-medium text-foreground">
              Qualificacoes
            </h5>
          </div>
          <div className="flex flex-wrap gap-4">
            {companies.map((company) => {
              return (
                <Card key={company.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <Link
                        className="hover:underline"
                        href={company.link}
                        target="_blank"
                      >
                        {company.title}
                      </Link>
                      <span className="text-sm text-zinc-400 font-normal">
                        {format(company.startedAt, "dd/MM/yyyy")} -{" "}
                        {company.endedAt ? String(company.endedAt) : "Atual"}
                      </span>
                    </CardTitle>
                    <CardDescription>
                      {company.simpleDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique tempora pariatur esse dolorem corporis. Cum
                    consequuntur ipsum mollitia nam, eveniet cumque sapiente!
                    Quos, aspernatur? Qui, voluptatum? Sint quo vel ipsum!
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {company.tags.map((tag) => {
                      return <Badge id={tag}>{tag}</Badge>;
                    })}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 overflow-scroll h-[calc(100vh-200px)] max-lg:overflow-none max-lg:h-full">
          <div className="flex items-center gap-2">
            <FcBusiness className="w-6 h-6" />
            <h5 className="text-lg font-medium text-foreground">Carreira</h5>
          </div>
          <div className="flex flex-wrap gap-4">
            {companies.map((company) => {
              return (
                <Card key={company.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <Link
                        className="hover:underline"
                        href={company.link}
                        target="_blank"
                      >
                        {company.title}
                      </Link>
                      <span className="text-sm text-zinc-400 font-normal">
                        {format(company.startedAt, "dd/MM/yyyy")} -{" "}
                        {company.endedAt ? String(company.endedAt) : "Atual"}
                      </span>
                    </CardTitle>
                    <CardDescription>
                      {company.simpleDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique tempora pariatur esse dolorem corporis. Cum
                    consequuntur ipsum mollitia nam, eveniet cumque sapiente!
                    Quos, aspernatur? Qui, voluptatum? Sint quo vel ipsum!
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {company.tags.map((tag) => {
                      return <Badge id={tag}>{tag}</Badge>;
                    })}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 p-4 lg:h-screen h-full lg:overflow-scroll overflow-none">
        <div className="flex gap-4 items-center xl:flex-row flex-col">
          <Card className="start-center relative row-span-2 flex h-[350px] max-w-[400px] flex-col gap-5 overflow-hidden p-0 ">
            <div className="absolute bottom-44 left-40">
              <div className="center relative inset-x-0 z-10 flex">
                <div className="absolute   h-4  w-4 rounded-full bg-blue-500 ring-4 ring-white" />
                <div className="animate-ping-static  inset-0  h-6 w-6 rounded-full bg-blue-500" />
              </div>
            </div>

            <div className="animated-cloud absolute inset-0 z-30">
              <div className="relative">
                <Image
                  width={480}
                  height={480}
                  className="absolute z-20 opacity-75"
                  src="/cloud.png"
                  alt=""
                />
                <Image
                  width={480}
                  height={480}
                  className="absolute z-10 -translate-x-16 translate-y-28  opacity-15 blur-sm brightness-0"
                  src="/cloud.png"
                  alt=""
                />
              </div>
            </div>

            <Image
              width={40}
              height={40}
              className="animated-plane absolute inset-0 z-10 object-contain"
              src="/plane.png"
              alt=""
            />

            <Map />
          </Card>

          <div className="flex flex-wrap gap-4 min-h-[300px] w-full justify-center">
            {socials.map((social) => {
              return (
                <Card
                  key={social.id}
                  className="flex-[1_1_150px] max-w-[150px] h-[150px] min-w-[150px] items-center flex justify-center dark:hover:bg-zinc-900 hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  <Link href={social.link} target="_blank">
                    <CardContent className="flex flex-col items-center justify-center !p-1 gap-2">
                      <Card className="p-3 w-fit dark:bg-zinc-950">
                        {social.icon}
                      </Card>
                      <span className="text-center text-sm text-zinc-400">
                        {social.title}
                      </span>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h5 className="font-medium font-lg text-foreground">Projects</h5>
            <Link
              href=""
              className="text-sm text-muted-foreground hover:underline"
            >
              Ver Mais
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {projects.map((project) => {
              return (
                <Card
                  className="flex-[1_1_340px] max-w-[500px]"
                  key={project.title}
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <span>{project.title}</span>
                      <Link
                        href={`/projects/${project.id}`}
                        className="hover:underline text-sm text-zinc-400"
                      >
                        Ver Mais
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {project.simpleDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-zinc-400">
                    {project.title}
                    {project.image && (
                      <img className="rounded-md" src={project.image} alt="" />
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <h5 className="font-medium font-lg text-foreground">Minhas Stacks</h5>
          <div className="flex flex-wrap gap-4 justify-center">
            {stacks.map((stack) => {
              return (
                <Card
                  className="flex-[1_1_160px] mt-10 h-[110px] max-w-[160px]"
                  key={stack.title}
                >
                  <CardContent className="text-sm text-zinc-400 ">
                    <Card className=" -mt-10 flex items-center justify-center hover:bg-zinc-800  transition-all">
                      <CardContent className="flex items-center  justify-center  p-8">
                        {stack.icon}
                      </CardContent>
                    </Card>
                    <CardFooter>
                      <span className="text-center w-full mt-2">
                        {stack.title}
                      </span>
                    </CardFooter>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Separator />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h5 className="font-medium font-lg text-foreground">Eu</h5>
            <Link
              href=""
              className="text-muted-foreground text-sm hover:underline"
            >
              Ver Mais
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <Card className="w-fit">
              <Image
                alt=""
                src="/judite2.jpg"
                width={400}
                height={400}
                className="rounded-md w-none h-none xl:w-[250px] xl:h-[375px] object-cover "
              />
            </Card>
            <div className="flex flex-col gap-4 justify-between h-full">
              <Card className="w-fit">
                <Image
                  alt=""
                  src="/judite1.jpg"
                  width={525}
                  height={525}
                  className="rounded-md"
                />
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-4 xl:flex-row w-full">
            <Card className="w-full">
              <iframe
                className="bg-secondary h-[152px] w-full brightness-90 saturate-0 rounded-lg"
                src="https://open.spotify.com/embed/track/73GKs8oNFFmtomWj7EsSU0?si=fcb2872cdeb44ca0?utm_source=generator&theme=0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </Card>
            <Card className="w-full">
              <iframe
                className="bg-secondary h-[152px] w-full brightness-90 saturate-0 rounded-lg"
                src="https://open.spotify.com/embed/track/7tvEgQTYHph6n8rIoV74gq?si=c94ed39db85340c0?utm_source=generator&theme=0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </Card>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h5 className="font-medium font-lg text-foreground">Blog</h5>
            <Link
              href=""
              className="text-muted-foreground text-sm hover:underline"
            >
              Ver Mais
            </Link>
          </div>
          <div className="flex flex-wrap gap-4"></div>
        </div>
      </div>
    </main>
  );
}
