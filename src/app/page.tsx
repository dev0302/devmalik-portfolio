import Contributions from "@/components/sections/Contributions"
import { CTA } from "@/components/sections/CTA"
import { Experience } from "@/components/sections/Experience"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Stack } from "@/components/sections/Stack"
import { ScrollProgress } from "@/components/ui/ScrollProgress"
import { UmamiCounter } from "@/components/ui/UmamiCounter"

export const dynamic = "force-static"
export const revalidate = 3600

export default function Home() {
  return (
    // max-w-4xl
    <div className=" min-h-screen w-10/12 mx-auto px-4 md:px-10 pt-10 pb-15 z-10 relative">
      <ScrollProgress />

      <Hero></Hero>
      <Experience></Experience>
      <Stack></Stack>
      <Projects></Projects>
      <Contributions></Contributions>


      <div className="flex justify-center w-full mt-10 mb-2">
        <UmamiCounter />
      </div>

      <CTA></CTA>
    </div>
  )
}