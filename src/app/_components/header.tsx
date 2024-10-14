import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8 mt-8 md:mb-20">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          Remedify
        </Link>
      </h2>
      <div className="flex gap-x-4">
        <a className="navlink" href="/about">About</a>
        <a className="navlink" href="/">App</a>
      </div>
    </div>
  );
};

export default Header;
