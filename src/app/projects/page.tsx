import { ProjectCard } from "@/components/ui/ProjectCard"; 
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { allProjects } from "@/data/projects"; 

export const dynamic = "force-static";
export const revalidate = 3600;

export default function AllProjectsPage() {
  return (
    <div className="max-w-5xl min-h-screen mx-auto px-6 md:px-10 text-white py-20 z-10 relative">
      <div className="mb-16 flex flex-col items-start gap-6">
        <Link 
            href="/" 
            className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors border border-white/10 hover:border-white/20 rounded-full px-4 py-2 "
        >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
        </Link>
        
        <div className="w-full flex justify-center items-center">
            <p className="text-white instrument-serif-regular-italic  leading-relaxed text-center text-3xl">
                A complete collection of my development work.
            </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 pb-20">
        {allProjects.map((project, index) => (
            <ProjectCard 
                key={index}
                {...project}
            />
        ))}
      </div>

    </div>
  );
}