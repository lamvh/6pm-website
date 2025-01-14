import { GithubIcon } from "./icons/github";
import { XIcon } from "./icons/x";

export function Header() {
  return (
    <div>
      <div className="fixed pointer-events-none z-40 inset-0 h-20 bg-[hsla(0,0%,4%,.2)] backdrop-blur-md [maskImage:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]" />
      <header className="fixed max-w-4xl flex items-center gap-4 justify-between mx-auto overflow-hidden top-4 z-50 h-12 backdrop-blur-xl saturate-150 shadow-[0_0_0_1px_hsla(0,0%,100%,.08)] left-4 right-4 px-3 bg-[hsla(0,0%,4%,.2)] rounded-2xl">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="6pm" className="h-8 w-8" />
          <div className="text-zinc-50">6pm</div>
        </a>
        <nav className="flex items-center gap-2">
          <a
            href="https://x.com/6pmai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <XIcon className="h-4 w-4 fill-white" />
          </a>
          <a
            href="https://github.com/sixpm-ai/6pm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <GithubIcon className="h-4 w-4 fill-white" />
          </a>
        </nav>
      </header>
    </div>
  )
}