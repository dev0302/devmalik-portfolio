import SocialLinks from "../ui/SocialLinks"
export const CTA = () => {
    return (
        <div className="relative w-full flex flex-col justify-center items-center mt-10 md:mt-22 gap-4 py-8 rounded-xl">
            <div
                className="absolute inset-0 rounded-xl bg-[url('/assets/images/cta.jpg')] bg-cover bg-center brightness-[0.3] grayscale-30"
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
                <h1 className="sofia-pro text-2xl md:text-3xl tracking-tight text-white text-center px-4">
                    Get in Touch. Let's Build.
                </h1>
                <p className="hanken-grotesk text-white/80 text-center px-4">
                    <span className="text-white font-medium">Open to Work:</span> Full-Time, Freelance, or Collabs. <span className="text-white font-medium">Let's talk.</span>
                </p>
                <div className="flex gap-4 py-3 px-3">
                    <SocialLinks />
                </div>
            </div>
        
        </div>
    )
}