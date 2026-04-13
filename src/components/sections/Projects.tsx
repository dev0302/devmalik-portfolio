import { ProjectCard } from "../ui/ProjectCard";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export const Projects = () => {
    return (
        <div id="projects" className="w-full md:mt-12 mt-1">
            <div className="flex items-center gap-3 mb-8 justify-start ">
                <h2 className="sofia-pro text-2xl tracking-tight text-white/90 mt-8">
                    Proof of Work
                </h2>

            </div>
            <div className="grid gap-24 md:grid-cols-2 max-w-5xl mx-auto">
                {featuredProjects.slice(0, 4).map((project, index) => (
                    <ProjectCard
                        key={index}
                        eagerImage
                        {...project}
                    />
                ))}
            </div>
            <div className="w-full flex justify-center mt-16 mb-4">
                <Link href="/projects" className="group relative inline-flex">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-full" />
                    <div className="relative flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md shadow-2xl">
                        <span className="nunito text-sm font-medium tracking-wider uppercase">More Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}