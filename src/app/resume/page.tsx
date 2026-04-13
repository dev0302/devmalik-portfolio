import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiDownload, HiArrowLeft } from 'react-icons/hi';

export const dynamic = "force-static";
export const revalidate = 3600;

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 flex flex-col items-center">
            {/* Header / Actions */}
            <div className="w-full max-w-4xl flex justify-between items-center mb-8">
                <Link 
                    href="/" 
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                    <HiArrowLeft /> Back to Home
                </Link>
                
                <a 
                    href="/assets/images/Resume.webp" 
                    download="Dev_Malik_Resume.png"
                    className="flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-2 px-6 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                    <HiDownload /> Download Resume
                </a>
            </div>

            {/* Resume Viewer */}
            <div className="w-full max-w-4xl bg-neutral-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative w-full aspect-[1/1.414]">
                    <Image
                        src="/assets/images/Resume.webp"
                        alt="Dev Malik Resume"
                        fill
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        className="w-full h-full object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Footer space */}
            <div className="mt-12 text-neutral-500 text-sm">
                Dev Malik • Portfolio 2026
            </div>
        </div>
    );
}
