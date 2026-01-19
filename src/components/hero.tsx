import { Button } from "./button"
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="mt-30 flex flex-col items-center justify-center w-full">
        <h1 className="max-w-4xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-500 text-center text-4xl md:text-7xl leading-tight font-bold text-transparent">Unleash the power of intuitive finance</h1>
        <p className="text-[#a1a1aa] mx-auto mt-10 max-w-3xl text-center text-xl selection:bg-[#67E8F9] selection:text-[#155e75]">Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.
        </p>
        <div className="flex items-center justify-center flex-col mt-8">
            <Button text="Join the waitlist" />
          <Link
          href="/"
          className="transition-duration-200 font-medium text-neutral-400 hover:text-neutral-100 py-8">
          Learn more      
        </Link>
        </div>
    </div>
  ) 
}

 