import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export default function work() {
  return (
    <>
      <div class=" overflow-x-hidden overflow-y-auto min-h-screen bg-slate-50 dark:bg-slate-900 transition-all">
        <Header />
        {/* <div class="pointer-events-auto z-20 absolute top-0 w-screen overscroll-contain">
          <nav class="fixed dark:bg-gray-700 dark:bg-opacity-60 bg-white backdrop-blur-md bg-opacity-90 w-full sm:px-6  drop-shadow-sm">
            <div class="container mx-auto md:px-8 ">
              <div class="flex h-16">
                <div class="flex w-full items-center justify-between">
                  <div class="flex-shrink-0">
                    <div class="hidden md:block h-6"><svg width="100%" height="100%" viewBox="0 0 54 31"
                      xmlns="http://www.w3.org/2000/svg" class="fill-gray-900 dark:fill-gray-200">
                      <path
                        d="M0 0h44.582C49.782 0 54 4.337 54 9.688c0 5.35-4.217 9.687-9.419 9.687h-1.883C48.94 19.375 54 24.58 54 31H37.675v-7.75H26.372V15.5h11.303V7.75h-21.35V31H0V0Z">
                      </path>
                    </svg></div>
                  </div>
                  <div class="hidden md:block float-right">
                    <div class="ml-10 flex items-stretch space-x-4"><button href="/"
                      class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium">Home</button><button
                        href="/work"
                        class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium"
                        style={{ "color": "rgb(239, 68, 68)" }}>Work</button><button href="/about"
                          class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium">About</button>
                      <div class="h-auto pt-2.5 ">
                        <div class="pointer-events-auto"><button type="button"
                          aria-label="Toggle dark mode" class=""><span
                            style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                              style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}>
                              <img
                                alt="" aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
                                style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span>
                            <img
                              alt="Icon"
                              srcset="https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg  1x,https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg  2x"
                              src="https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg"
                              decoding="async" data-nimg="intrinsic"
                              style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} /></span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex h-10 mt-3 mr-3 md:hidden"><button type="button"
                  class="dark:bg-gray-100 bg-gray-900 inline-flex items-center justify-center p-2 rounded-lg dark:text-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu" aria-expanded="false"><span class="sr-only">Open main
                    menu</span><svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg></button></div>
              </div>
            </div>
          </nav>
        </div> */}
        <main>
          <div class="container mx-auto px-5">
            <div>
              <section
                class="flex-col md:flex-row flex items-left md:justify-between pt-32 md:pt-48 mb-16 md:mb-12">
                <h1
                  class="drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-200 dark:to-slate-500 text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                  Work</h1>
                <h4 class="text-slate-600 dark:text-slate-400 text-left text-lg md:mt-20 md:pl-8"></h4>
              </section>
              <div
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <span
                  style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                    style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                      alt="" aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271905%27%20height=%27853%27/%3e"
                      style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                    alt="Work Hero"
                    src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_1.webp&amp;w=3840&amp;q=75"
                    decoding="async" data-nimg="intrinsic"
                    srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_1.webp&amp;w=1920&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_1.webp&amp;w=3840&amp;q=75  2x"
                    style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} /><noscript></noscript></span>
              </div>
            </div>
            <div class="grid place-items-center w-auto mx-auto max-w-screen-2xl conatiner last-of-type:pb-24">
              <article
                class="article my-8 prose text-slate-800 dark:text-slate-400 prose-p:text-xl prose-p:text-slate-500"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <p>I worked at the real estate portal <a
                  class="prose-a:marker:text-red-500 prose-a:text-red-500 prose-a:underline prose-a:underline-offset-4"
                  href="https://homes.com" target="_blank">Homes.com</a>, for over 16 years
                  (combined). I brought vision and insight to lead high-impact visual design and front-end
                  projects. During those years I had a variety of roles in different teams, which gave me
                  exposure to different technologies. I was able to design and build prototypes with
                  beautiful, efficient and usable interfaces.</p>
                <p>I contributed to user experience with aesthetically pleasing strategies that helped reach
                  more users effectively. I ensured that the product or service journey achieved the
                  desired results, from start to finish.</p>
              </article>
            </div>
            <div class="relative h-full w-full">
              <div class="container mx-auto grid place-items-center pt-12"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }}>
                <span
                  style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                    style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                      alt="" aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271393%27%20height=%27971%27/%3e"
                      style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                    alt="Foundation Dashboard"
                    src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_2.webp&amp;w=3840&amp;q=75"
                    decoding="async" data-nimg="intrinsic"
                    srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_2.webp&amp;w=1920&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_2.webp&amp;w=3840&amp;q=75  2x"
                    style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} /><noscript></noscript></span>
              </div>
            </div>
            <div class="grid place-items-center w-auto mx-auto max-w-screen-2xl conatiner last-of-type:pb-24">
              <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <h2
                  class="my-4 text-4xl md:text-7xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                  Foundation, Homes.com's Design System</h2>
                <ul class="pt-2 pb-12 text-xl">
                  <li><span class="font-bold">Role:</span> Senior UI/UX Designer</li>
                  <li><span class="font-bold">Design Tools:</span> Figma, JIRA, Confluence</li>
                </ul>
              </article>
              <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <h4 class="font-futura text-base text-slate-500 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700"
                  aria-hidden="true">1. Foundation - Overview</h4>
                <h3
                  class="my-4 text-3xl md:text-6xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                  A smooth and efficient system</h3>
                <p class=""><b>Foundation</b>, Homes.com's design system, was built from the ground up to be
                  reusable in every way. As with any existing product team, developing a design workflow
                  was a difficult task to overcome. We created a comprehensive strategy for collaboration
                  between product, design, and development. All details of each component were researched,
                  reviewed, and documented. To maximize efficiency, all components, styles, and guides
                  were fully integrated within <b>Foundation</b>.</p>
                <p class="">The main goals of <b>Foundation</b> were simple. It needed to have a consistent
                  design approach, with corresponding rationale and documentation for every style,
                  component, and pattern within the system. All this, while maintaining structural and
                  visual continuity.</p>
                <p class="">As a result, we were able to smooth out and eliminate friction in the
                  development timeline of the design and its requirements.</p>
              </article>
              <div class="flex flex-col md:gap-8 sm:flex-row">
                <div class="flex-1 grid place-items-center pt-8"
                  style={{ "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }}>
                  <span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}>
                      <img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27479%27%20height=%27274%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span>
                    <img
                      alt="Issues"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_2_1.webp&amp;w=1080&amp;q=75"
                      decoding="async" data-nimg="intrinsic"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_2_1.webp&amp;w=640&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fwork_2_1.webp&amp;w=1080&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} /><noscript></noscript></span>
                </div>
                <div class="flex-1 text-slate-800 dark:text-slate-300">
                  <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                    style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                    <h4 class="font-futura text-base text-slate-500 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700"
                      aria-hidden="true">2. Foundation - Assessment</h4>
                    <h3
                      class="my-4 text-3xl md:text-6xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                      Fixing issues everywhere</h3>
                    <p>The initial assessment of <b>Foundation</b> addressed many inconsistencies that
                      were leading to a confusing and incoherent user experience. Conflicting patterns
                      were used across the site for the same functionality. This led to design
                      deviations and fragmentations, revealing the absence of a centralized library.
                    </p>
                    <p class="">Finding current or appropriate designs was cumbersome for the product
                      team. This affected the speed and efficiency of their requirements builds.</p>
                    <p class="">The Development team reported inconsistent design iterations and
                      variants, causing major issues in getting assets and specifications.</p>
                  </article>
                </div>
              </div>
              <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <h4 class="font-futura text-base text-slate-500 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700"
                  aria-hidden="true">3. Foundation - Approach</h4>
                <h3
                  class="my-4 text-3xl md:text-6xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                  Atomic philosophy</h3>
                <p class="">We were able to achieve an easy-to-understand visual consistency, by using Brad
                  Frost's <a href="http://bradfrost.com/blog/post/atomic-web-design/" rel="noreferrer"
                    target="_blank">Atomic Design</a> methodology in <b>Foundation</b>. With
                  <b>Foundation</b>'s tools, applying the appearance and use principles and styles to
                  components and patterns became a simple task. This less tedious approach was extended to
                  propagating iterations, exponentially accelerating the prototyping process.</p>
              </article>
              <div class="shadow-xl p-4 bg-white">
                <div class="flex flex-col md:flex-row">
                  <div class="left p-8"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}>
                      <img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27748%27%20height=%271100%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Atomic Design"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-left.webp&amp;w=1920&amp;q=75"
                      decoding="async" data-nimg="intrinsic" class="atomic"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-left.webp&amp;w=750&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-left.webp&amp;w=1920&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                  </div>
                  <div class="right p-3 flex flex-col"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27897%27%20height=%27672%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Atomic Design"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-right-top.webp&amp;w=1920&amp;q=75"
                      decoding="async" data-nimg="intrinsic" class="atomic"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-right-top.webp&amp;w=1080&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-right-top.webp&amp;w=1920&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                    <div class="px-3 pt-4"><span
                      style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                        style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                          alt="" aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27962%27%20height=%27390%27/%3e"
                          style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                        alt="Atomic Design"
                        src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-right-bottom.webp&amp;w=2048&amp;q=75"
                        decoding="async" data-nimg="intrinsic" class="atomic"
                        srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-right-bottom.webp&amp;w=1080&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fatomic-right-bottom.webp&amp;w=2048&amp;q=75  2x"
                        style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid place-items-center pt-8">
                <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                  style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                  <h4 class="font-futura text-base text-slate-500 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700"
                    aria-hidden="true">4. Foundation - strategy</h4>
                  <h3
                    class="my-4 text-3xl md:text-6xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                    A streamlined process</h3>
                  <p class="">The objective for <b>Foundation</b> was to streamline the full workflow from
                    initial design idea to final distribution of code for any element that warranted the
                    coding of a reusable component in our digital product ecosystem.</p>
                  <ul>
                    <li>Need for design system or specific design system element</li>
                    <li>Define initial requirements for element(s)</li>
                    <li>Model user experience (UX) for element(s)</li>
                    <li>Model user interface (UI) for element(s)</li>
                    <li>Handoff to development team (requirements)</li>
                    <li>Release component(s) for distribution</li>
                    <li>Complete components available for use in applications</li>
                    <li>Visual and UX QA</li>
                    <li>Deploy component(s) to review environment</li>
                    <li>Develop component(s) to requirements</li>
                  </ul>
                </article>
                <div class="relative h-auto"
                  style={{ "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }}>
                  <div><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271762%27%20height=%27735%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Workflow"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fworkflow_light.webp&amp;w=3840&amp;q=75"
                      decoding="async" data-nimg="intrinsic"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fworkflow_light.webp&amp;w=1920&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fworkflow_light.webp&amp;w=3840&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} /><noscript></noscript></span>
                  </div>
                  <div class="absolute top-0 left-0 hidden dark:block"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271762%27%20height=%27735%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Workflow Dark"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fworkflow_dark.webp&amp;w=3840&amp;q=75"
                      decoding="async" data-nimg="intrinsic"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fworkflow_dark.webp&amp;w=1920&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fworkflow_dark.webp&amp;w=3840&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} /><noscript></noscript></span>
                  </div>
                </div>
              </div>
              <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <h4 class="font-futura text-base text-slate-500 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700"
                  aria-hidden="true">5. Foundation - Achievements</h4>
                <h3
                  class="my-4 text-3xl md:text-6xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                  Accessibility and Reusability</h3>
                <p class=""><b>Foundation</b> implemented accessibility standards (WCAG 2.0 AA), to ensure
                  that all critical junctures met the minimum contrast aspect ratios. Accessibility is
                  more than just about people with disabilities. It is about making sure that anyone in
                  any situation can use your site.</p>
                <p>The grand majority of us can agree that reusability is the most important part of any
                  design system. With <b>Foundation</b>, we demonstrated how reusable components can
                  increase consistency in the product and greatly reduce one-off designs. We achieved this
                  in multiple places, creating reusable components only once, and shortening the overall
                  development time.</p>
              </article>
              <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <h4 class="font-futura text-base text-slate-500 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700"
                  aria-hidden="true">6. Foundation - Conclusion</h4>
                <h3
                  class="my-4 text-3xl md:text-6xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                  Results</h3>
                <p class=""><b>Foundation</b> generated a comprehensive approach that helped developers,
                  designers, and product managers focus on the most importants of their work.
                  <b>Foundation</b> became a living document that was constantly updated and improved,
                  helping the teams create consistent experiences across multiple applications.</p>
                <p>This effort was not just about creating a comprehensive component library. It was about
                  building a robust and reliable organizational system that helped our teams work better
                  together.</p>
                <p>If this is something you want to learn more about, contact me at <a
                  href="mailto:calderon.rafael.info@gmail.com">calderon.rafael.info@gmail.com</a>. I'd
                  love to discuss!</p>
              </article>
            </div>
            <div class="grid place-items-center w-auto mx-auto max-w-screen-2xl conatiner last-of-type:pb-24">
              <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <h2
                  class="my-4 text-4xl md:text-7xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                  Homes.com and PrimeStreet Logos</h2>
                <ul class="pt-2 pb-12 text-xl">
                  <li><span class="font-bold">Role:</span> Designer</li>
                  <li><span class="font-bold">Design Tools:</span> Adobe Suite</li>
                </ul>
              </article>
              <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <h4 class="font-futura text-base text-slate-500 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700"
                  aria-hidden="true">1. Homes.com's Logo</h4>
                <h3
                  class="my-4 text-3xl md:text-6xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                  Little orange house</h3>
                <p class="">I have had the privilege to design several logos for different companies
                  throughout my career. The Homes.com logo was no different. I did it around 2010, as part
                  of a total corporate rebrand. It was agreed to represent a house, but it had to be
                  different from any real estate logo or any icon used for the home page (which usually is
                  a house). It was a difficult task to accomplish, as there are countless versions of
                  logos in the real estate market, which use houses. The new logo had to be unique and
                  easily recognizable. An isometric version with negative space on the ceiling, chimney
                  and simple entrance door was chosen. This logo lasted until 2021, when CoStar Group
                  bought Homes.com and replaced it with their own brand.</p>
              </article>
              <div class="shadow-xl p-4 bg-white">
                <div class="flex flex-col md:flex-row">
                  <div class="left p-3"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27846%27%20height=%27392%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Branding - Homes.com Logo Before"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-before.webp&amp;w=1920&amp;q=75"
                      decoding="async" data-nimg="intrinsic" class="branding"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-before.webp&amp;w=1080&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-before.webp&amp;w=1920&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                  </div>
                  <div class="right p-3 flex flex-col"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27846%27%20height=%27392%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Branding - Homes.com Logo After"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-after.webp&amp;w=1920&amp;q=75"
                      decoding="async" data-nimg="intrinsic" class="branding"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-after.webp&amp;w=1080&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-after.webp&amp;w=1920&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row">
                  <div class="left p-3"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27846%27%20height=%27846%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Branding - Homes.com Logo Deconstruct"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-deconstruct.webp&amp;w=1920&amp;q=100"
                      decoding="async" data-nimg="intrinsic" class="branding"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-deconstruct.webp&amp;w=1080&amp;q=100  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-deconstruct.webp&amp;w=1920&amp;q=100  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                  </div>
                  <div class="right p-3 flex flex-col"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27846%27%20height=%27846%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Branding - Homes.com Icon"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-icon.webp&amp;w=1920&amp;q=75"
                      decoding="async" data-nimg="intrinsic" class="branding"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-icon.webp&amp;w=1080&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-icon.webp&amp;w=1920&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                  </div>
                </div>
                <div class="p-3"><span
                  style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                    style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                      alt="" aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271702%27%20height=%27585%27/%3e"
                      style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                    alt="Branding - Homes.com Logo Full-Color Horizontal"
                    src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-horizontal.webp&amp;w=3840&amp;q=75"
                    decoding="async" data-nimg="intrinsic" class="branding"
                    srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-horizontal.webp&amp;w=1920&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-horizontal.webp&amp;w=3840&amp;q=75  2x"
                    style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                </div>
              </div>
              <article class="article my-8 prose text-slate-800 dark:text-slate-400"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <h4 class="font-futura text-base text-slate-500 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700"
                  aria-hidden="true">2. PrimeStreet's Logo</h4>
                <h3
                  class="my-4 text-3xl md:text-6xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-50 dark:to-slate-500 text-6xl tracking-tight leading-tight">
                  Qualified Real Estate Referrals</h3>
                <p class=""><a href="https://primestreet.io/" target="_blank">PrimeStreet</a> is a referral
                  service that connects transaction-ready consumers with real estate brokers. Through the
                  proprietary matching algorithm, which relies on the user settings, preferences, and
                  usage of the PrimeStreet mobile app, they are able to instantly connect top real estate
                  agents to consumers who are ready to buy or sell their properties.</p>
                <p>It was an honor to have been commissioned to design the PrimeStreet logo in 2018, ahead
                  of its national debut. The icon merges the letters P and S, fluidly imitating a street
                  or path. For the colors we are inspired by the hues of the cars of the 50s, making sure
                  to be unique in the real estate market.</p>
              </article>
              <div class="shadow-xl p-4 bg-white">
                <div class="p-3"><span
                  style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                    style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                      alt="" aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271702%27%20height=%27585%27/%3e"
                      style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                    alt="Branding - PrimeStreet.com Logo Full-Color Horizontal"
                    src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-horizontal.webp&amp;w=3840&amp;q=75"
                    decoding="async" data-nimg="intrinsic" class="branding"
                    srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-horizontal.webp&amp;w=1920&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-horizontal.webp&amp;w=3840&amp;q=75  2x"
                    style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                </div>
                <div class="flex flex-col md:flex-row">
                  <div class="left p-3"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271117%27%20height=%27585%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Branding - PrimeStreet.com Logo Full-Color vertical"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-vertical.webp&amp;w=3840&amp;q=100"
                      decoding="async" data-nimg="intrinsic" class="branding"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-vertical.webp&amp;w=1200&amp;q=100  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-vertical.webp&amp;w=3840&amp;q=100  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                  </div>
                  <div class="right p-3 flex flex-col"><span
                    style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                      style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                        alt="" aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27585%27%20height=%27585%27/%3e"
                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                      alt="Branding - PrimeStreet.com Mascot"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-prima.webp&amp;w=1200&amp;q=75"
                      decoding="async" data-nimg="intrinsic" class="branding"
                      srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-prima.webp&amp;w=640&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fbranding-primestreet-prima.webp&amp;w=1200&amp;q=75  2x"
                      style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "opacity": "1", "transform": "translate(0px, 0px)" }} /><noscript></noscript></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div class=" bg-slate-200 dark:bg-slate-800">
          <div class="container mx-auto px-5">
            <footer>
              <section class="px-4">
                <div class=" flex flex-col items-center py-32 mx-auto sm:flex-row">
                  <h3
                    class="text-xl font-black leading-none text-slate-900 dark:text-slate-100 select-none logo">
                    Let's work together<span class="text-red-500 dark:text-slate-900">.</span></h3>
                  <p
                    class="text-center mt-4 sm:mt-2 text-sm text-slate-700 dark:text-slate-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-600 ">
                    <span class="inline-block pr-2">Ⓒ 2023 - </span><span class="inline-block pr-2">Made
                      with<svg class="inline-block py-2 w-8 h-8 fill-red-500"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                          d="m47.6 300.4 180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141-45.6-7.6-92 7.3-124.6 39.9l-12 12-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z">
                        </path>
                      </svg>using</span><span class="inline-block"><a
                        class="border-dotted border-b-2 border-slate-900/50 dark:border-slate-400 font-bold text-slate-900 dark:text-slate-300 hover:text-red-500 hover:border-red-500"
                        href="https://reactjs.org/" target="_blank">React</a> and <a
                          class="border-dotted border-b-2 border-slate-900/50 dark:border-slate-400 font-bold text-slate-900 dark:text-slate-300 hover:text-red-500 hover:border-red-500"
                          href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.</span></p>
                  <span
                    class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"><a
                      target="_blank" href="https://www.linkedin.com/in/rafaelcalderon/"
                      class="fill-slate-900 dark:fill-slate-400 hover:dark:fill-red-500"><svg
                        class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                        </path>
                      </svg></a><a
                        href="mailto:calderon8040@gmail.com?subject=Mail from Portfolio Site"
                        class="fill-slate-900 dark:fill-slate-400 hover:dark:fill-red-500"><svg
                          class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                          d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z">
                        </path>
                      </svg></a></span>
                </div>
              </section>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
