import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { GithubIcon } from "@/components/icons/github";
import { ProductHuntIcon } from "@/components/icons/product-hunt";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-6 py-16 font-light">
        <section className="flex h-full flex-col items-center justify-center pt-20">
          <div className="flex w-full max-w-lg flex-col items-center justify-center text-center">
            <h1 className="relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50">
              Manage your expense seamlessly
            </h1>
            <p className="text-center text-zinc-600 dark:text-zinc-200">
            6pm is your AI financial assistant that helps you manage your expenses and budgets. With 6pm, you can easily track your expenses, set financial goals, and get personalized insights to help you make better financial decisions.
            </p>
          </div>
          <div className="flex items-center space-x-4 py-6">
            <a
              href="https://www.producthunt.com/products/6pm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <ProductHuntIcon className="h-4 w-4 fill-white mr-1.5" />
                Get notified
              </Button>
            </a>
            <a
              href="https://github.com/sixpm-ai/6pm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <GithubIcon className="h-4 w-4 mr-1.5 dark:fill-white" />
                Star on GitHub
              </Button>
            </a>
          </div>
          <span className="mt-2 font-normal text-center text-sm text-zinc-500 dark:text-zinc-400">
            Coming August 2024
          </span>
        </section>
        <section className="mx-auto max-w-3xl py-24">
          <div className="relative -mx-6 sm:mx-0">
            <div className="pointer-events-none absolute left-0 top-[-100px] z-[-1] h-full w-full bg-[radial-gradient(100%_100%_at_50%_50%,hsl(0deg_0%_100%/8%)_0,hsl(0deg_0%_100%/2%)_50%)] blur-2xl md:left-[-100px] md:h-[calc(100%+200px)] md:w-[calc(100%+200px)]" />
            <div className="relative w-full overflow-hidden rounded-xl bg-zinc-50 p-4 shadow-[0px_0px_0px_1px_theme(colors.zinc.100),0px_2px_2px_0px_theme(colors.zinc.50)] dark:border dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
              <div className="flex items-center justify-center">
                <img src="/beta.webp" alt="Hero" className="h-full w-full object-cover rounded-md" />
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto text-center max-w-3xl">
          <span className="text-center font-normal text-sm text-zinc-500 dark:text-zinc-400">
            by <a href="https://github.com/duongdev" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-zinc-50">Dustin Do</a> & <a href="https://github.com/bkdev98" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-zinc-50">Quoc Khanh</a>
          </span>
        </section>
      </div>
    </>
  );
}
