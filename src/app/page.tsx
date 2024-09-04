import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { BsFilePdf, BsFilePdfFill, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-center">
      <div className="gap-4 max-w-[1200px] flex">
        <div className="w-full sticky max-h-screen flex flex-col gap-4 top-0 pt-24 pb-24">
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Leonardo Reis</h2>
            <h4>Frontend / Backend Developer</h4>
            <p>
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>
          </div>
          <div className="flex gap-4 mt-auto">
            <BsGithub className="w-8 h-8" />
            <BsLinkedin className="w-8 h-8" />
            <BsFilePdfFill className="w-8 h-8" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-20 pt-24 pb-24">
          {/* ABOOUT */}
          <section className="p-4">
            <p>
              About Back in 2012, I decided to try my hand at creating custom
              Tumblr themes and tumbled head first into the rabbit hole of
              coding and web development. Fast-forward to today, and I’ve had
              the privilege of building software for an advertising agency, a
              start-up, a huge corporation, and a digital product studio. My
              main focus these days is building accessible user interfaces for
              our customers at Klaviyo. I most enjoy building software in the
              sweet spot where design and engineering meet — things that look
              good but are also built well under the hood. In my free time, I've
              also released an online video course that covers everything you
              need to know to build a web app with the Spotify API. When I’m not
              at the computer, I’m usually rock climbing, reading, hanging out
              with my wife and two cats, or running around Hyrule searching for
              Korok seedsKorok seeds.
            </p>
          </section>
          {/* EXPERIENCE */}
          <section className="flex flex-col gap-4">
            <div className="hover:bg-white/10 rounded-md flex gap-4 p-4 border border-transparent hover:border-white/5 transition-all">
              <h6 className="min-w-fit text-sm font-bold">2023 - Present</h6>
              <div className="flex flex-col gap-4">
                <h5 className="font-bold text-xl">
                  Desenvolvedor Principal - OLTX
                </h5>
                <p className="text-muted-foreground text-sm">
                  I’m usually rock climbing, reading, hanging out with my wife
                  and two cats, or running around Hyrule searching for Korok
                  seedsKorok seeds.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge>Typescript</Badge>
                  <Badge>Go</Badge>
                  <Badge>Python</Badge>
                  <Badge>React</Badge>
                  <Badge>Redis</Badge>
                  <Badge>NestJS</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Mysql</Badge>
                </div>
              </div>
            </div>
            <div className="hover:bg-white/10 rounded-md flex gap-4 p-4 border border-transparent hover:border-white/5 transition-all">
              <h6 className="min-w-fit text-sm font-bold">2022 - Present</h6>
              <div className="flex flex-col gap-4">
                <h5 className="font-bold text-xl">
                  Desenvolvedor - Jack Experts
                </h5>
                <p className="text-muted-foreground text-sm">
                  I’m usually rock climbing, reading, hanging out with my wife
                  and two cats, or running around Hyrule searching for Korok
                  seedsKorok seeds.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge>Typescript</Badge>
                  <Badge>Go</Badge>
                  <Badge>Python</Badge>
                  <Badge>React</Badge>
                  <Badge>Redis</Badge>
                  <Badge>NestJS</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Mysql</Badge>
                </div>
              </div>
            </div>
          </section>
          {/* Projects */}
          <section>
            <div className="hover:bg-white/10 rounded-md flex gap-4 p-4 border border-transparent hover:border-white/5 transition-all">
              <h6 className="w-full text-sm font-bold">IMAGE</h6>
              <div className="flex flex-col gap-4">
                <h5 className="font-bold text-xl">OLTX</h5>
                <p className="text-muted-foreground text-sm">
                  Web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge>Typescript</Badge>
                  <Badge>React</Badge>
                  <Badge>NodeJS</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Mysql</Badge>
                  <Badge>Kubernets</Badge>
                </div>
              </div>
            </div>
            <div className="hover:bg-white/10 rounded-md flex gap-4 p-4 border border-transparent hover:border-white/5 transition-all">
              <h6 className="w-full text-sm font-bold">IMAGE</h6>
              <div className="flex flex-col gap-4">
                <h5 className="font-bold text-xl">Zip Link</h5>
                <p className="text-muted-foreground text-sm">
                  Web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge>Typescript</Badge>
                  <Badge>NextJS</Badge>
                  <Badge>Supabase</Badge>
                  <Badge>OAuth</Badge>
                </div>
              </div>
            </div>
            <div className="hover:bg-white/10 rounded-md flex gap-4 p-4 border border-transparent hover:border-white/5 transition-all">
              <h6 className="w-full text-sm font-bold">Associacao-Aconchego</h6>
              <div className="flex flex-col gap-4">
                <h5 className="font-bold text-xl">Associacao-Aconchego</h5>
                <p className="text-muted-foreground text-sm">
                  Web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>JS</Badge>
                  <Badge>Bootstrap</Badge>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
