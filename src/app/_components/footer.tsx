import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row justify-between items-center">
          <a className="hover:underline" href="https://github.com/yeenathan/Asclepius">Github</a>
          <p style={{color: "#FBF1EA"}}>
            Powered by
            <a className="ml-1" style={{fontWeight: "400", fontSize: "12pt"}}href="https://vercel.com/templates/next.js/blog-starter-kit">Vercel Blog Starter Kit</a>
          </p>
        </div>
        {/* <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div> */}
        
      </Container>
    </footer>
  );
}

export default Footer;
