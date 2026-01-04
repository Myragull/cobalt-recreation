import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-4">
      <Link href="/">
        <Image
          draggable={false}
          height={100}
          width={100}
          alt="Logo"
          loading="lazy"
          src="/logo.svg"
        />
      </Link>

      <div className="flex items-center justify-between gap-8">
        <Link
          href="/"
          className="transition-duration-200 font-medium text-neutral-300 hover:text-neutral-200"
        >
          Blog
        </Link>
        <Button text="Join the waitlist" />
      </div>
    </div>
  );
};
