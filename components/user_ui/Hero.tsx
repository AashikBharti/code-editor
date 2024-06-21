import Link from "next/link";

export default function Hero() {
  return (
    <div className="py-8 px-5 bg-black/90">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-white">
            <Link href={'/'}>CodeSpace</Link>
          </h1>
        </div>
        <div className="text-white flex items-center gap-4">
          <span>
            <Link href={"/"}>Home</Link>
          </span>
          <span>
            <Link href={"/editor"}>Editor</Link>
          </span>
          <span>
            <Link href={"#"}>Documentation</Link>
          </span>
          <span>
            <Link href={"#"}>Contact</Link>
          </span>
        </div>
        <div className="text-white flex items-center gap-10 text-xl">
          <span className="text-gray-600">
            <Link href={"#"}>Login</Link>
          </span>
          <span className="px-4 p-1 bg-blue-800/40 outline-none">
            <Link href={"#"}>Register</Link>
          </span>
        </div>
      </div>
      <div className="text-white  pt-20 flex flex-col items-center justify-center min-h-96  gap-5">
        <div>
          <span className="text-6xl font-bold">Code with Ease</span>
        </div>
        <div>
          <span className="text-xl">Your all-in-one coding environment</span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <span className="hover:border-b"><Link href={'/editor'}>Start Coding Now</Link></span>
          <span className="bg-slate-500 px-4 py-1"><Link href={'#'}>LearnMore</Link></span>
        </div>
      </div>
    </div>
  );
}
