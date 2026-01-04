import {Container} from "@/components/container";
import {Navbar} from "@/components/navbar";
import {Hero} from "@/components/hero";
import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col relative bg-[radial-gradient(70%_40%_at_50%_0%,_#223a4e,_#09090b)] min-h-screen">
    <Container className="relative z-10 w-full flex flex-col ">
        <Navbar />
        <Hero />
    </Container>
     <div className="relative w-full flex bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-8 ">

        <Image
        src="/banner.webp"
        alt="banner image"
        width={1000}
        height={1000}
        className="rounded-2xl w-full object-cover object-left-top shadow-md border-neutral-200  "
        />
        </div>
        </div>
       </div>
  )
}

export default page