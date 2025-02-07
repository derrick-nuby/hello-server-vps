import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-[#121212] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] before:bg-[size:48px_48px] before:content-['']">
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-4">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
            Hi, I&apos;m <span className="text-[#2E8B57]">Derrick</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 text-justify md:text-left">
            I am the one who deployed and manages this server. From configuring infrastructure to optimizing performance,
            I ensure seamless deployment, security, and scalability. With expertise in server management, cloud hosting,
            and full-stack development, I build and maintain reliable, high-performance applications. Every aspect of
            this deployment is designed and maintained by me, showcasing my deep technical skills and hands-on approach
            to infrastructure management.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#2E8B57] text-white hover:bg-[#236B43]">
              <Link href="https://www.derrick.rw/" target="_blank" rel="noopener noreferrer">
                My Resume
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white">
              <Link href="https://www.derrick.rw/" target="_blank" rel="noopener noreferrer">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md lg:mx-0">
          <div className="overflow-hidden rounded-full">
            <Image
              src="/derrick-profile.png"
              alt="Profile"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
