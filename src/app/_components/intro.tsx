import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";

export function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        {/* <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Remedify
        </h1> */}
        <Image className="logomark" src="/assets/logomark.svg" alt="Remedify Logo" width={350} height={71}/>
        <div>
          <h4 className="text-center md:text-right text-lg mt-5 md:pl-8">
            Remedify project blog.
          </h4>
          <div className="flex gap-x-4 justify-center md:justify-end">
            <a className="navlink" href="/about">About</a>
            <a className="navlink" href="/">App</a>
          </div>
        </div>
        
        {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A statically generated blog example using{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-blue-600 duration-200 transition-colors"
          >
            Next.js
          </a>{" "}
          and {CMS_NAME}.
        </h4> */}
      </section>
    </>
  );
}
