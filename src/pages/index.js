import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div class=" overflow-x-hidden overflow-y-auto min-h-screen bg-slate-50 dark:bg-slate-900 transition-all">
        <Header/>
        {/* <div class="pointer-events-auto z-20 absolute top-0 w-screen overscroll-contain">
          <nav class="fixed dark:bg-gray-700 dark:bg-opacity-60 bg-white backdrop-blur-md bg-opacity-90 w-full sm:px-6  drop-shadow-sm"
            style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)" }}>
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
                      class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium"
                      style={{ "color": "rgb(239, 68, 68)" }}>Home</button><button href="/work"
                        class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium"
                        style={{ color: null }}>Work</button><button href="/about"
                          class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium"
                          style={{ color: null }}>About</button>
                      <div class="h-auto pt-2.5 ">
                        <div class="pointer-events-auto"><button type="button"
                          aria-label="Toggle dark mode" class=""><span
                            style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0", "margin": "0", "padding": "0", "position": "relative", "maxWidth": "100%" }}><span
                              style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0", "margin": "0", "padding": "0", "maxWidth": "100%" }}><img
                                style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0", "margin": "0", "padding": "0" }}
                                alt="" aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" /></span><img
                              alt="Icon"
                              src="https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg"
                              decoding="async" data-nimg="intrinsic"
                              style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "right": "0", "boxSizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0", "height": "0", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }}
                              srcset="https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg  1x,https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg  2x" /><noscript><img
                                alt="Icon"
                                srcSet="/_next/static/media/moon.75269553.svg 1x, /_next/static/media/moon.75269553.svg 2x"
                                src="https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg"
                                decoding="async" data-nimg="intrinsic"
                                style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "right": "0", "boxSizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0", "height": "0", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }}
                                loading="lazy" /></noscript></span></button></div>
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
          <div class="full-container relative z-0 w-full mx-auto h-screen align-middle">
            <div class="z-0 w-screen h-screen absolute origin-left top-0 left-0 brightness-50">
              <div class="relative w-full h-full"
                style={{ "translate": "none", "rotate": "none", "scale": "none", "transformOrigin": "50% 50%", "transform": "translate(0px, 0px)", "opacity": "1" }}>
                <span
                  style={{ "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0", "margin": "0", "padding": "0", "position": "absolute", "top": "0", "left": "0", "bottom": "0", "right": "0" }}>
                  <img
                    alt="Picture of a little house and a tree"
                    src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=3840&amp;q=75"
                    decoding="async" data-nimg="fill"
                    style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "right": "0", "boxSizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0", "height": "0", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "cover", "objectPosition": "center" }}
                    sizes="100vw"
                    srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=640&amp;q=75  640w,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=750&amp;q=75  750w,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=828&amp;q=75  828w,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=1080&amp;q=75  1080w,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=1200&amp;q=75  1200w,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=1920&amp;q=75  1920w,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=2048&amp;q=75  2048w,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=3840&amp;q=75  3840w" /><noscript><img
                      alt="Picture of a little house and a tree" sizes="100vw"
                      srcSet="/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=3840&amp;q=75 3840w"
                      src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fhome-hero-6.webp&amp;w=3840&amp;q=75"
                      decoding="async" data-nimg="fill"
                      style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "right": "0", "boxSizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0", "height": "0", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "cover", "objectPosition": "center" }}
                      loading="lazy" /></noscript></span></div>
            </div>
            {/* <Header/> */}
            <div class="container mx-auto p-4 pt-28 md:pt-48 grid w-full h-full ">
              <div class="flex flex-col items-center justify-center h-full z-20">
                <h1 class=" drop-shadow-lg tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-300 dark:from-stone-50 dark:to-stone-300 text-left font-black uppercase text-[6rem] md:text-[10rem] lg:text-[6rem] pb-0 sm:pb-4 backdrop-blur-sm ring-2 ring-white/10 px-8 "
                  style={{ opacity: 1 }}>NAMASTE!</h1>
                <p
                  class=" text-slate-300 dark:text-stone-200 pt-4 text-center md:text-center text-md md:text-lg max-w-2xl">
                  Located in New Delhi, India, a proficient designer with a design experience spanning over 16 years, demonstrating my ardor for exceptional design. With an experience over a decede and half creating for the Web and mobile, I possess a strong front-end and visual skillset, enabling me to design interfaces and build them with equal ease.</p>
                <div class="animate-pulse rounded-lg mt-20"><button><svg width="48" height="48" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)" class="stroke-slate-50 " stroke-width="2">
                    <circle cx="24" cy="24" r="23"></circle>
                    <path class=" shadow-lg " d="M34 26.5 24 37m0 0L14 26.5M24 37V10"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path d="M0 0h48v48H0z"></path>
                    </clipPath>
                  </defs>
                </svg></button></div>
              </div>
            </div>
          </div>
          <div id="section-work" class=" pt-24 grid h-auto place-items-center">
            <div class="container relative mx-auto grid w-full max-w-container px-4">
              <div class="h-7 font-futura text-base text-slate-500 uppercase tracking-wide"
                aria-hidden="true">Work Experience</div>
              <h2
                class="mt-4 leading-none text-4xl font-extrabold tracking-tight text-transparent sm:text-7xl bg-clip-text bg-gradient-to-br from-slate-500 to-slate-900 dark:from-slate-300 dark:to-slate-600 h-12 sm:h-20">
                A long road</h2>
              <p class="sm:mt-4 max-w-4xl text-lg text-slate-700 dark:text-gray-400">As a seasoned UX and UI designer, I specialize in designing digital products for diverse clients, ranging from small-scale businesses to multinational corporations and their users. With over one and half decades of experience under my belt, I am highly motivated to ensure that the products I design are both intuitive and functional. I am also skilled in creating corporate identities, branding materials, logos, and illustrations. Although I am not yet an electric hybrid, I consider myself a hybrid designer in the realm of user experience and user interface.</p>
              <ul
                class="my-8 flex flex-col lg:flex-row gap-y-3 lg:gap-x-6 text-slate-500 dark:text-slate-300">
                <li
                  class="flex-1 bg-white dark:bg-white/10 px-4 py-6 drop-shadow-lg rounded-md ring-2 ring-slate-200 dark:ring-slate-500">
                  <div class="font-bold text-lg align-middle">
                    <div class="animate-pulse float-left h-2 w-2 bg-red-500 rounded mt-2 mr-3"></div>
                    Director Product Design
                  </div>
                  <div class="ml-5">ShortHills Tech (Trader Interactive)<span
                    class="text-sm text-slate-600 dark:text-slate-400">(2022 - Present)</span></div>
                </li>
                <li
                  class="flex-1 bg-white dark:bg-white/10 p-4 py-6 drop-shadow-lg rounded-md ring-2 ring-slate-200 dark:ring-slate-500">
                  <div class="font-bold text-lg align-middle">
                    <div class="animate-pulse float-left h-2 w-2 bg-red-500 rounded mt-2 mr-3"></div>
                    Associate Director UI/UX
                  </div>
                  <div class="ml-5">Affle India Pte.<span
                    class="text-sm ext-slate-600 dark:text-slate-400">(2014-2022)</span></div>
                </li>
                <li
                  class="flex-1 bg-white dark:bg-white/10 p-4 py-6 drop-shadow-lg rounded-md ring-2 ring-slate-200 dark:ring-slate-500">
                  <div class="font-bold text-lg align-middle">
                    <div class="animate-pulse float-left h-2 w-2 bg-red-500 rounded mt-2 mr-3"></div>
                    Game Designer and UI/UX
                  </div>
                  <div class="ml-5">CAIN Technologies <span
                    class="text-sm text-slate-600 dark:text-slate-400">(2012 - 2014)</span></div>
                </li>
              </ul><a href="/assets/Rafael_Calderon_Resume_2022.pdf" target="_blenk"
                class=" float-left w-64 mb-16 sm:mb-24 shadow-sm bg-slate-800 dark:bg-red-500 text-white text-xl font-medium px-8 py-3 rounded-lg ring-1 ring-slate-400 dark:ring-red-400 hover:bg-slate-600 hover:dark:bg-red-600">Download
                Resume</a>
            </div>
          </div>
          <div id="section-skills"
            class="relative grid h-auto place-items-center bg-gradient-to-b from-slate-400/20 dark:from-gray-900 to-transparent">
            <div
              class="z-0 container mx-auto grid w-full max-w-container px-4 my-8 sm:my-16 mt-24 md:mt-24 xl:mt-32 sm:px-6 lg:px-8 ">
              <div class="h-7 font-futura text-base text-slate-500 uppercase tracking-wide"
                aria-hidden="true">What I bring to the table</div>
              <h2
                class="mt-4 leading-none text-4xl font-extrabold tracking-tight text-transparent sm:text-7xl bg-clip-text bg-gradient-to-br from-slate-500 to-slate-900 dark:from-slate-300 dark:to-slate-600 h-20">
                Research and Visual Design</h2>
              <p class="mt-4 max-w-4xl text-lg text-slate-700 dark:text-gray-400">Design systems are critical to the success of any project, and I take great pleasure in crafting them. Additionally, I relish working alongside my team to create prototypes that serve various purposes, including A/B testing and UX research.</p>
              <div class="h-16 my-8">
                <div
                  class="flex flex-row text-slate-400 gap-4 md:gap-8 align-middle justify-left flex-wrap">
                  <div class="w-5 sm:w-10"><svg class="drop-shadow-lg" viewBox="0 0 16 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 24C6.208 24 8 22.208 8 20V16H4C1.792 16 0 17.792 0 20C0 22.208 1.792 24 4 24Z"
                      fill="#0ACF83"></path>
                    <path d="M0 12C0 9.792 1.792 8 4 8H8V16H4C1.792 16 0 14.208 0 12Z"
                      fill="#A259FF"></path>
                    <path d="M0 4C0 1.792 1.792 0 4 0H8V8H4C1.792 8 0 6.208 0 4Z" fill="#F24E1E">
                    </path>
                    <path d="M8 0H12C14.208 0 16 1.792 16 4C16 6.208 14.208 8 12 8H8V0Z"
                      fill="#FF7262"></path>
                    <path
                      d="M16 12C16 14.208 14.208 16 12 16C9.792 16 8 14.208 8 12C8 9.792 9.792 8 12 8C14.208 8 16 9.792 16 12Z"
                      fill="#1ABCFE"></path>
                  </svg></div>
                  <div class="w-8 sm:w-[72px]"><svg viewBox="0 0 27 24" class="drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5.30205 8.55798L13.0898 24L0 8.55798H5.30205Z" fill="#EA6C00"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.8798 8.55798L13.0921 24L26.1819 8.55798H20.8798Z" fill="#EA6C00">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5.30176 8.55798H20.8773L13.0895 24L5.30176 8.55798Z" fill="#FDAD00">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.0895 0L5.71165 0.790071L5.30176 8.55798L13.0895 0Z" fill="#FDD231">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.0894 0L20.4673 0.790071L20.8772 8.55798L13.0894 0Z" fill="#FDD231">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M26.1819 8.55795L20.4699 0.790039L20.8798 8.55795H26.1819Z"
                      fill="#FDAD00"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 8.55795L5.71194 0.790039L5.30204 8.55795H0Z" fill="#FDAD00"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.0895 0L5.30176 8.55798H20.8773L13.0895 0Z" fill="#FEEEB7"></path>
                  </svg></div>
                  <div class="w-8 sm:w-16"><svg viewBox="0 0 25 24" class="drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.0062 0H2.35754C1.15595 0 0.181885 0.974063 0.181885 2.17566V21.8243C0.181885 23.0259 1.15595 24 2.35754 24H22.0062C23.2078 24 24.1819 23.0259 24.1819 21.8243V2.17566C24.1819 0.974063 23.2078 0 22.0062 0Z"
                      fill="#DC395F"></path>
                    <path
                      d="M8.20268 7.55109C9.00049 7.55109 9.66883 6.92577 9.66883 6.10621C9.66883 5.28721 9.00049 4.66199 8.20268 4.66199C7.40486 4.66199 6.73671 5.28721 6.73671 6.10621C6.73671 6.92568 7.40486 7.55109 8.20268 7.55109ZM5.16274 15.2874C5.07658 15.6539 5.03336 16.0497 5.03336 16.3726C5.03336 17.6449 5.72327 18.4895 7.18943 18.4895C8.40536 18.4895 9.39114 17.7674 10.1009 16.6014L9.66752 18.3408H12.0821L13.4621 12.8059C13.8071 11.4045 14.4754 10.6771 15.4888 10.6771C16.2866 10.6771 16.7824 11.1732 16.7824 11.9922C16.7824 12.2295 16.7608 12.488 16.6746 12.7684L15.963 15.3125C15.8552 15.679 15.8123 16.0458 15.8123 16.3905C15.8123 17.5983 16.5235 18.4817 18.0113 18.4817C19.2834 18.4817 20.2966 17.6628 20.8572 15.7007L19.9087 15.3345C19.4343 16.649 19.0246 16.8866 18.7012 16.8866C18.3777 16.8866 18.2052 16.6712 18.2052 16.2402C18.2052 16.0462 18.2486 15.8308 18.3131 15.5715L19.0031 13.0929C19.1756 12.5109 19.2403 11.9948 19.2403 11.5207C19.2403 9.66647 18.1191 8.69878 16.7608 8.69878C15.4888 8.69878 14.1951 9.84619 13.5484 11.0538L14.0226 8.88628H10.336L9.81846 10.7954H11.5434L10.4812 15.0479C9.64708 16.9021 8.11493 16.9322 7.92264 16.8892C7.60689 16.8179 7.40496 16.698 7.40496 16.2878C7.40496 16.051 7.44808 15.711 7.55589 15.301L9.17308 8.88628H5.07658L4.55908 10.7954H6.26224L5.16283 15.2874"
                      fill="white"></path>
                  </svg></div>
                  <div class="w-8 sm:w-16"><svg viewBox="0 0 25 24" class="drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.18188 1.48291H23.1819V22.5171H1.18188V1.48291Z" fill="#2E001E">
                    </path>
                    <path
                      d="M0.181885 0.5V23.5H24.1819V0.5H0.181885ZM1.18188 1.48291H23.1819V22.5171H1.18188V1.48291Z"
                      fill="#FF2BC2"></path>
                    <path
                      d="M17.6118 10.1619C17.4618 10.0931 17.2718 10.0636 17.0318 10.0636C15.7718 10.0636 14.9318 11.017 14.9318 12.5995C14.9318 14.4081 15.7918 15.1354 16.9118 15.1354C17.1518 15.1354 17.4118 15.1059 17.6018 15.0273V10.1619H17.6118ZM13.1318 12.6781C13.1318 10.388 14.6318 8.59909 17.0918 8.59909C17.3018 8.59909 17.4118 8.59909 17.6118 8.61875V6.0632C17.6118 6.00422 17.6618 5.96491 17.7118 5.96491H19.3218C19.4018 5.96491 19.4218 5.99439 19.4218 6.04354V15.0273C19.4218 15.2927 19.4218 15.6269 19.4718 15.9905C19.4718 16.0593 19.4718 16.0692 19.4118 16.0986C18.5718 16.4918 17.6918 16.6687 16.8518 16.6687C14.6818 16.6687 13.1318 15.3516 13.1318 12.6781V12.6781ZM9.72175 11.0858L12.5218 16.423C12.5718 16.5016 12.5418 16.5803 12.4618 16.5803H10.7218C10.6118 16.5803 10.5618 16.5508 10.5118 16.4525C9.87175 15.1551 9.22175 13.8085 8.55175 12.4128H8.53175C7.93175 13.7298 7.27175 15.1649 6.63175 16.4623C6.58175 16.541 6.53175 16.5704 6.45175 16.5704H4.79175C4.69175 16.5704 4.68175 16.4918 4.73175 16.4328L7.47175 11.2529L4.82175 6.10251C4.76175 6.02388 4.82175 5.95508 4.89175 5.95508H6.61175C6.71175 5.95508 6.76175 5.97474 6.79175 6.0632C7.42175 7.37046 8.06175 8.65806 8.66175 9.97516H8.68175C9.26175 8.67772 9.90175 7.37046 10.5118 6.08286C10.5618 6.00422 10.5918 5.95508 10.6918 5.95508H12.3018C12.3818 5.95508 12.4118 6.01405 12.3618 6.10251L9.72175 11.0858V11.0858Z"
                      fill="#FF2BC2"></path>
                  </svg></div>
                  <div class="w-8 sm:w-16"><svg viewBox="0 0 24 24" class="drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.18302 21.6082L0 0H24L21.817 21.5965L11.9802 24" fill="#E44D26">
                    </path>
                    <path d="M12 22.1626V1.77368H21.8104L19.9383 20.2083" fill="#F16529"></path>
                    <path
                      d="M4.45874 4.41626H12.0001V7.06478H7.75312L8.03096 9.77747H12.0001V12.4201H5.27903L4.45874 4.41626ZM5.41133 13.7502H8.42787L8.63956 15.8679L12.0001 16.6613V19.4265L5.83471 17.9097"
                      fill="#EBEBEB"></path>
                    <path
                      d="M19.5147 4.41626H11.9866V7.06478H19.2368L19.5147 4.41626ZM18.9656 9.77747H11.9866V12.426H15.6911L15.3405 15.8679L11.9866 16.6613V19.4148L18.1387 17.9097"
                      fill="white"></path>
                  </svg></div>
                  <div class="w-8 sm:w-16"><svg viewBox="0 0 24 24" class="drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0H0V24H24V0Z" fill="#F7DF1E"></path>
                    <path
                      d="M16.122 18.7502C16.6054 19.5395 17.2344 20.1197 18.3468 20.1197C19.2812 20.1197 19.8782 19.6526 19.8782 19.0073C19.8782 18.234 19.2649 17.9601 18.2363 17.5102L17.6725 17.2683C16.0451 16.5749 14.9639 15.7064 14.9639 13.8702C14.9639 12.1787 16.2527 10.8911 18.2668 10.8911C19.7007 10.8911 20.7315 11.3902 21.4744 12.6968L19.7182 13.8244C19.3315 13.1311 18.9144 12.858 18.2668 12.858C17.6062 12.858 17.1875 13.277 17.1875 13.8244C17.1875 14.501 17.6066 14.7749 18.5742 15.194L19.138 15.4355C21.0542 16.2572 22.1361 17.0949 22.1361 18.9784C22.1361 21.0088 20.5411 22.1212 18.399 22.1212C16.3045 22.1212 14.9513 21.1231 14.2892 19.8149L16.122 18.7502ZM8.15515 18.9456C8.50943 19.5742 8.83172 20.1056 9.60657 20.1056C10.3475 20.1056 10.815 19.8157 10.815 18.6884V11.0199H13.0702V18.7189C13.0702 21.0542 11.7011 22.117 9.70257 22.117C7.89686 22.117 6.85115 21.1825 6.31934 20.057L8.15515 18.9456Z"
                      fill="black"></path>
                  </svg></div>
                  <div class="w-8 sm:w-16"><svg viewBox="0 0 24 24" class="drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4.80005C8.7999 4.80005 6.79995 6.39965 5.99985 9.59854C7.2 7.99894 8.60003 7.39932 10.1999 7.79907C11.1129 8.02715 11.7653 8.6895 12.4877 9.42237C13.6641 10.6162 15.0257 11.9979 18.0001 11.9979C21.1999 11.9979 23.2002 10.3983 24 7.19914C22.8001 8.79874 21.4001 9.39867 19.7999 8.99892C18.8873 8.77083 18.2348 8.10848 17.5125 7.37561C16.336 6.18176 14.9741 4.80005 12 4.80005V4.80005ZM5.99985 11.9979C2.80005 11.9979 0.7998 13.5975 0 16.7967C1.19985 15.1971 2.59988 14.5972 4.20008 14.9973C5.11272 15.2256 5.76516 15.8877 6.48753 16.6203C7.66397 17.8141 9.02589 19.1961 12 19.1961C15.2001 19.1961 17.2 17.5965 18.0001 14.3973C16.8 15.9969 15.4 16.5969 13.8001 16.1968C12.8871 15.969 12.2347 15.3064 11.5123 14.5738C10.3359 13.38 8.97427 11.9979 5.99985 11.9979V11.9979Z"
                      fill="#2DD4BF"></path>
                  </svg></div>
                  <div class="w-8 sm:w-16"><svg viewBox="0 0 25 24" class="drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.20144 2.84308C7.54391 2.6348 7.07096 2.67738 6.74278 2.86291C6.41461 3.04843 6.14046 3.4282 5.99592 4.08991C5.85139 4.75154 5.85423 5.62814 6.02563 6.67565C6.08746 7.05353 6.17051 7.44941 6.27443 7.86026C7.24554 7.64892 8.29888 7.48814 9.4098 7.38605C10.0556 6.49507 10.7244 5.68225 11.3969 4.96444C11.0855 4.67089 10.7769 4.40252 10.4735 4.16114C9.63277 3.49205 8.85888 3.05134 8.20144 2.84308ZM12.2553 4.10148C11.918 3.7833 11.5819 3.49086 11.2495 3.2263C10.3405 2.50292 9.43268 1.96697 8.58012 1.69691C7.72765 1.42687 6.86233 1.4043 6.12764 1.81964C5.39294 2.23498 4.98024 2.98004 4.79284 3.83794C4.60542 4.69593 4.62553 5.73372 4.81083 6.86622C4.8786 7.2804 4.96919 7.71162 5.08196 8.15672C4.63193 8.28363 4.20525 8.42241 3.80505 8.57203C2.71076 8.98115 1.78283 9.48299 1.11769 10.0709C0.452619 10.6588 0 11.3813 0 12.212C0 13.0426 0.452619 13.7651 1.11769 14.353C1.78283 14.9409 2.71076 15.4428 3.80505 15.8519C4.20525 16.0015 4.63192 16.1403 5.08196 16.2672C4.96918 16.7123 4.87858 17.1435 4.81081 17.5577C4.62551 18.6902 4.6054 19.728 4.79282 20.586C4.98023 21.4439 5.39293 22.189 6.12762 22.6043C6.86231 23.0196 7.72763 22.9971 8.58011 22.727C9.43267 22.457 10.3405 21.921 11.2495 21.1977C11.5819 20.9331 11.918 20.6406 12.2553 20.3225C12.5926 20.6406 12.9287 20.933 13.2611 21.1976C14.1701 21.921 15.0779 22.4569 15.9305 22.727C16.7829 22.997 17.6483 23.0196 18.383 22.6043C19.1176 22.1889 19.5303 21.4439 19.7178 20.586C19.9052 19.728 19.8851 18.6902 19.6998 17.5577C19.632 17.1435 19.5414 16.7123 19.4286 16.2672C19.8787 16.1403 20.3054 16.0015 20.7056 15.8519C21.7999 15.4428 22.7278 14.9409 23.3929 14.353C24.058 13.7651 24.5106 13.0426 24.5106 12.212C24.5106 11.3813 24.058 10.6588 23.3929 10.0709C22.7278 9.48299 21.7999 8.98115 20.7056 8.57203C20.3054 8.42241 19.8787 8.28362 19.4286 8.1567C19.5414 7.71163 19.632 7.28044 19.6997 6.86628C19.885 5.73378 19.9052 4.69599 19.7177 3.838C19.5303 2.9801 19.1176 2.23504 18.3829 1.8197C17.6482 1.40436 16.7829 1.42693 15.9305 1.69697C15.0779 1.96703 14.1701 2.50298 13.2611 3.22636C12.9287 3.4909 12.5926 3.78332 12.2553 4.10148ZM12.2553 5.83039C11.8418 6.27488 11.4274 6.76 11.0177 7.28162C11.425 7.26585 11.8378 7.25779 12.2553 7.25779C12.6728 7.25779 13.0857 7.26585 13.4929 7.28162C13.0833 6.76 12.6688 6.27488 12.2553 5.83039ZM8.51347 8.69733C7.84729 8.78389 7.211 8.89275 6.61111 9.02117C6.79748 9.59407 7.01934 10.1881 7.27586 10.7963C7.46552 10.4431 7.66483 10.0889 7.87356 9.73492C8.08231 9.38089 8.2959 9.03478 8.51347 8.69733ZM7.92414 12.212C8.22948 11.5935 8.56804 10.9664 8.93902 10.3373C9.31002 9.70804 9.69543 9.10736 10.0897 8.5392C10.7894 8.48891 11.5133 8.46245 12.2553 8.46245C12.9973 8.46245 13.7212 8.48891 14.4209 8.5392C14.8152 9.10734 15.2006 9.70801 15.5716 10.3372C15.9425 10.9664 16.2811 11.5935 16.5865 12.212C16.2811 12.8304 15.9425 13.4576 15.5715 14.0868C15.2006 14.7159 14.8152 15.3166 14.4209 15.8847C13.7213 15.935 12.9973 15.9615 12.2553 15.9615C11.5133 15.9615 10.7894 15.935 10.0897 15.8847C9.69542 15.3166 9.31003 14.7159 8.93904 14.0867C8.56805 13.4575 8.22948 12.8304 7.92414 12.212ZM6.56427 12.212C6.09911 11.2189 5.71463 10.2453 5.416 9.31613C5.00068 9.43343 4.60902 9.56094 4.2439 9.69745C3.23173 10.0759 2.45499 10.5118 1.94208 10.9651C1.42911 11.4186 1.23029 11.8409 1.23029 12.212C1.23029 12.583 1.42911 13.0054 1.94208 13.4588C2.45499 13.9122 3.23173 14.348 4.2439 14.7265C4.60902 14.863 5.00068 14.9905 5.416 15.1078C5.71463 14.1786 6.09911 13.205 6.56427 12.212ZM6.61111 15.4027C6.79747 14.8298 7.01934 14.2358 7.27586 13.6277C7.46553 13.9809 7.66484 14.335 7.87358 14.689C8.08232 15.043 8.29589 15.3891 8.51345 15.7266C7.84728 15.64 7.21099 15.5312 6.61111 15.4027ZM6.27443 16.5636C6.1705 16.9745 6.08744 17.3704 6.02561 17.7483C5.85421 18.7958 5.85137 19.6724 5.9959 20.334C6.14045 20.9958 6.41459 21.3755 6.74276 21.561C7.07094 21.7466 7.5439 21.7892 8.20142 21.5809C8.85886 21.3726 9.63276 20.9319 10.4735 20.2628C10.7768 20.0214 11.0855 19.753 11.3969 19.4595C10.7244 18.7417 10.0555 17.9288 9.40978 17.0378C8.29887 16.9358 7.24553 16.775 6.27443 16.5636ZM13.1137 19.4595C13.4252 19.753 13.7338 20.0214 14.037 20.2628C14.8778 20.9318 15.6517 21.3726 16.3092 21.5808C16.9667 21.7891 17.4396 21.7465 17.7678 21.561C18.096 21.3755 18.3701 20.9957 18.5147 20.334C18.6592 19.6724 18.6564 18.7958 18.485 17.7482C18.4231 17.3704 18.3401 16.9745 18.2362 16.5637C17.2651 16.775 16.2117 16.9358 15.1008 17.0379C14.4551 17.9288 13.7862 18.7417 13.1137 19.4595ZM13.4929 17.1423C13.0833 17.6639 12.6688 18.149 12.2553 18.5935C11.8418 18.149 11.4274 17.6639 11.0177 17.1423C11.4249 17.1581 11.8378 17.1661 12.2553 17.1661C12.6728 17.1661 13.0857 17.1581 13.4929 17.1423ZM15.9972 15.7266C16.6633 15.64 17.2996 15.5312 17.8995 15.4027C17.7131 14.8298 17.4913 14.2359 17.2347 13.6277C17.0451 13.9809 16.8457 14.3351 16.637 14.6891C16.4283 15.0431 16.2147 15.3892 15.9972 15.7266ZM17.9463 12.212C18.4115 13.205 18.796 14.1786 19.0946 15.1078C19.5099 14.9905 19.9016 14.863 20.2667 14.7265C21.2789 14.348 22.0556 13.9122 22.5686 13.4588C23.0815 13.0054 23.2803 12.583 23.2803 12.212C23.2803 11.8409 23.0815 11.4186 22.5686 10.9651C22.0556 10.5118 21.2789 10.0759 20.2667 9.69745C19.9016 9.56094 19.5099 9.43342 19.0946 9.31612C18.796 10.2453 18.4115 11.2189 17.9463 12.212ZM18.2362 7.86025C17.2651 7.64892 16.2117 7.48814 15.1008 7.38605C14.4551 6.49507 13.7862 5.68225 13.1137 4.96445C13.4251 4.67092 13.7337 4.40256 14.037 4.1612C14.8778 3.49211 15.6517 3.0514 16.3091 2.84314C16.9667 2.63486 17.4396 2.67744 17.7678 2.86297C18.096 3.04849 18.3701 3.42826 18.5147 4.08997C18.6592 4.75159 18.6563 5.6282 18.485 6.67571C18.4231 7.05357 18.3401 7.44943 18.2362 7.86025ZM17.8995 9.02116C17.7131 9.59407 17.4913 10.1881 17.2347 10.7962C17.0451 10.443 16.8458 10.0889 16.637 9.73486C16.4283 9.38085 16.2147 9.03476 15.9971 8.69733C16.6633 8.78389 17.2996 8.89275 17.8995 9.02116ZM14.4246 12.212C14.4246 13.3851 13.4534 14.3361 12.2553 14.3361C11.0572 14.3361 10.086 13.3851 10.086 12.212C10.086 11.0389 11.0572 10.0879 12.2553 10.0879C13.4534 10.0879 14.4246 11.0389 14.4246 12.212Z"
                      fill="#61DAFB"></path>
                  </svg></div>
                  <div class="w-8 sm:w-16"><svg viewBox="0 0 24 24" class="drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.40578 16.5349C1.42878 16.5892 1.45478 16.6392 1.48278 16.6893C1.49578 16.7185 1.51378 16.7488 1.52978 16.7759C1.55578 16.8302 1.58378 16.8824 1.61078 16.9345L1.76779 17.21C1.79679 17.2612 1.82479 17.3112 1.85779 17.3613C1.91279 17.4594 1.97779 17.5554 2.03479 17.6535C2.06079 17.6942 2.08479 17.7349 2.11379 17.7756C2.22379 17.954 2.32379 18.1022 2.43079 18.2462C2.50679 18.3537 2.58279 18.4591 2.6648 18.5645C2.6918 18.6041 2.7218 18.6438 2.7498 18.6834L2.9708 18.9631C2.9978 18.9954 3.0248 19.033 3.0538 19.0664C3.1518 19.1895 3.2558 19.3084 3.3598 19.4295C3.3598 19.4316 3.3628 19.4337 3.3648 19.4368C3.4938 19.6058 3.63281 19.7561 3.78481 19.8897L3.78881 19.8938C3.86881 19.9794 3.94881 20.0639 4.03381 20.1474L4.13481 20.2486C4.24581 20.3571 4.35681 20.4646 4.47381 20.569C4.47581 20.569 4.47681 20.571 4.47881 20.5721L4.53582 20.6243C4.63782 20.7171 4.74082 20.809 4.84582 20.8945L4.97082 21.0041C5.05582 21.075 5.14382 21.1418 5.23082 21.2117L5.36682 21.3203C5.45983 21.3933 5.55883 21.4643 5.65383 21.5352C5.68883 21.5613 5.72383 21.5874 5.75983 21.6114L5.78883 21.6354L6.06983 21.8274L6.18983 21.9109C6.33683 22.009 6.48284 22.1008 6.62884 22.1926C6.67084 22.2145 6.71284 22.2385 6.75184 22.2636C6.85984 22.3283 6.97184 22.394 7.08084 22.4535C7.14084 22.489 7.20284 22.5192 7.26484 22.5516C7.33985 22.5954 7.41785 22.6382 7.49785 22.682C7.51985 22.6893 7.53785 22.6966 7.55585 22.707L7.55985 22.7029C7.59285 22.7185 7.62385 22.7352 7.65585 22.7519C7.77585 22.8145 7.90085 22.874 8.03085 22.9324C8.05485 22.9429 8.08085 22.9533 8.10685 22.9679C8.25086 23.0336 8.39486 23.0963 8.54386 23.1568C8.57786 23.1672 8.61386 23.1849 8.64886 23.1985C8.78386 23.2517 8.92286 23.306 9.06086 23.3571L9.11087 23.3759C9.26387 23.4302 9.41487 23.4823 9.57087 23.5314C9.60687 23.5418 9.64387 23.5554 9.68187 23.5658C9.84087 23.6159 9.99487 23.6754 10.1559 23.7067C20.429 25.6507 23.414 17.2935 23.414 17.2935C20.906 20.6848 16.4549 21.579 12.2399 20.5836C12.0839 20.546 11.9279 20.4938 11.7699 20.4458C11.5469 20.38 11.3258 20.3072 11.1069 20.2277L11.2019 20.258L11.1399 20.233C11.0039 20.185 10.8729 20.1317 10.7399 20.0785C10.7073 20.0641 10.6743 20.0509 10.6409 20.0389L10.6299 20.0357C10.4829 19.9742 10.3399 19.9116 10.1979 19.8458C10.1669 19.8354 10.1409 19.8208 10.1099 19.8083C9.94168 19.7318 9.77498 19.6518 9.60987 19.5683L9.74787 19.6319C9.71186 19.6153 9.6765 19.5972 9.64187 19.5777C9.54787 19.5317 9.45387 19.4796 9.36187 19.4305C9.2918 19.3959 9.22276 19.359 9.15487 19.3199L9.17487 19.3304C9.06186 19.2678 8.94886 19.1999 8.83486 19.1363C8.80086 19.1112 8.76186 19.0904 8.72286 19.0674C8.55341 18.9646 8.38604 18.8582 8.22086 18.7481L8.28386 18.7878C8.24153 18.7605 8.20016 18.7316 8.15985 18.7011L8.16586 18.7053C8.05837 18.6364 7.95299 18.5641 7.84985 18.4883C7.81585 18.4653 7.78485 18.4403 7.74985 18.4152C7.64211 18.3385 7.53608 18.2592 7.43185 18.1773L7.45585 18.1951C7.41385 18.1596 7.36885 18.1262 7.32385 18.0918C7.23584 18.0198 7.14684 17.9509 7.05884 17.8758L6.94084 17.7777C6.81508 17.6733 6.69171 17.5658 6.57084 17.4552L6.56984 17.4542L6.22283 17.1255L6.12283 17.0274C6.04083 16.9408 5.95683 16.8584 5.87283 16.7728L5.77583 16.6685C5.67229 16.5615 5.57126 16.4519 5.47283 16.3398L5.46683 16.3325L5.44983 16.3179C5.34394 16.1965 5.2396 16.0737 5.13682 15.9495C5.10982 15.9172 5.08482 15.8827 5.05682 15.8483L4.82982 15.5613C4.72749 15.4272 4.62747 15.2912 4.52982 15.1533L4.48981 15.0949C2.15179 11.7808 1.30578 7.20729 3.1768 3.45496L1.52478 5.63477C-0.60024 8.80589 -0.337237 12.9297 1.28778 16.297C1.32478 16.3794 1.36578 16.4566 1.40578 16.5349V16.5349Z"
                      fill="#3B82F6"></path>
                    <path d="M8.56275 11.9666L8.55173 11.9499L8.54272 11.9374L8.56275 11.9666Z"
                      fill="black"></path>
                    <path
                      d="M9.68097 13.3356L9.77097 13.4295C9.88497 13.5443 10.002 13.6559 10.121 13.7676L10.136 13.7811C10.256 13.8918 10.391 14.0076 10.53 14.1203L10.551 14.137C10.585 14.161 10.614 14.1891 10.647 14.2131C10.787 14.3258 10.928 14.4333 11.075 14.5408L11.09 14.5502C11.152 14.5971 11.218 14.6399 11.288 14.6858C11.316 14.7046 11.348 14.7297 11.378 14.7484C11.484 14.8194 11.588 14.8851 11.695 14.953C11.712 14.9603 11.727 14.9697 11.743 14.977C11.833 15.0344 11.931 15.0897 12.025 15.1397C12.058 15.1606 12.09 15.1763 12.124 15.1961C12.191 15.2305 12.257 15.2671 12.321 15.3025L12.353 15.3171C12.488 15.386 12.626 15.4507 12.761 15.5144C12.795 15.5279 12.824 15.5394 12.853 15.554C12.964 15.6041 13.077 15.6521 13.188 15.6959C13.238 15.7137 13.285 15.7345 13.332 15.7502C13.434 15.7898 13.541 15.8264 13.642 15.8629L13.782 15.9098C13.928 15.9568 14.076 16.0184 14.231 16.0434C22.1641 17.4062 24.0001 11.065 24.0001 11.065C22.3471 13.5349 19.1481 14.7119 15.739 13.7926C15.5689 13.7478 15.4001 13.6974 15.233 13.6413L15.29 13.658C15.242 13.6444 15.2 13.6288 15.154 13.6142C15.05 13.5766 14.943 13.5401 14.842 13.5015L14.698 13.4451C14.586 13.3982 14.472 13.3544 14.363 13.3043C14.329 13.2886 14.298 13.2782 14.272 13.2625C14.132 13.1968 13.991 13.1321 13.854 13.0632L13.648 12.9516L13.529 12.889C13.437 12.8389 13.352 12.7867 13.264 12.7335C13.2416 12.7225 13.2198 12.7099 13.199 12.6959L13.202 12.697C13.096 12.6281 12.986 12.5613 12.884 12.4914C12.85 12.4716 12.819 12.4476 12.787 12.4267L12.579 12.2858C12.435 12.1815 12.294 12.0698 12.151 11.9613C12.119 11.9311 12.088 11.906 12.057 11.8789C10.558 10.6549 9.37597 8.98221 8.81496 7.0883C8.22395 5.11927 8.35396 2.91127 9.37497 1.11963L8.11995 2.96449C6.57894 5.26118 6.66594 8.33108 7.86595 10.7603C8.08495 11.209 8.30696 11.5878 8.55196 11.9488C8.77996 12.289 9.03196 12.6876 9.33597 12.961C9.44397 13.0893 9.55997 13.2114 9.68097 13.3356V13.3356Z"
                      fill="#3B82F6"></path>
                    <path
                      d="M2.4358 18.2524L2.4318 18.2462L2.4248 18.2368L2.4358 18.2524ZM6.59384 17.4761L6.60384 17.4834L6.60584 17.4865L6.59384 17.4761Z"
                      fill="black"></path>
                    <path
                      d="M13.666 0.9673C12.757 2.35199 12.67 4.07164 13.296 5.59824C13.961 7.2198 15.32 8.49283 16.904 9.09596C16.969 9.12205 17.0321 9.14396 17.0991 9.16901L17.1871 9.19718C17.2791 9.22744 17.3721 9.26292 17.4671 9.28483C21.8481 10.1624 23.0341 6.94954 23.3531 6.47684C22.3101 8.03162 20.5611 8.40518 18.4151 7.86362C18.2285 7.81614 18.0448 7.7569 17.8651 7.68623L17.8981 7.69771C17.6744 7.61694 17.4554 7.52288 17.2421 7.41597L17.2801 7.43371C16.87 7.22501 16.518 6.99962 16.191 6.74084C14.273 5.2278 13.087 2.34677 14.339 0L13.666 0.9673Z"
                      fill="#3B82F6"></path>
                  </svg></div>
                </div>
              </div>
            </div>
          </div>
          <div id="section-design-systems"
            class="bg-gradient-to-b from-slate-400/20 dark:from-gray-900 to-transparent">
            <div class="relative container mx-auto overflow-hidden pt-[2.75rem] pb-16 ">
              <div
                class="absolute rounded-bl-lg h-screen -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]">
              </div>
              <div
                class="relative mx-auto grid w-full max-w-container grid-cols-1 px-4 mt-8 sm:mt-16 md:mt-24 xl:mt-32 sm:px-6 lg:px-8 ">
                <div class="col-start-1 row-start-1 h-7 font-futura text-base text-slate-500 uppercase tracking-wide"
                  aria-hidden="true">Design is Art, that follows a System</div>
                <h2
                  class="col-start-1 row-start-2 mt-4 max-w-[36rem] leading-none text-4xl font-extrabold tracking-tight text-transparent sm:text-7xl xl:max-w-[43.5rem] bg-clip-text bg-gradient-to-br from-slate-500 to-slate-900 dark:from-slate-300 dark:to-slate-600 md:h-56">
                  Passionate about Design Systems and Prototyping</h2>
                <p
                  class="md:pr-6 col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700 dark:text-gray-400">
                  I am convinced that when properly implemented, a DS (design system) can bring many benefits to a design team. When starting a new DS, it's important to account for the scale and replicability of the project, as well as resources and time availability. The right approach and the right tools will allow a gratifying prototyping process.</p>
                <p></p>
                <div
                  class="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    class="inline-flex justify-center shadow-sm bg-slate-800 dark:bg-red-500 text-white text-xl font-medium px-8 py-3 rounded-lg ring-1 ring-slate-400 dark:ring-red-300">View
                    Work</button></div>
                <div
                  class="pointer-events-none col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end">
                  <div
                    class=" mt-12 -ml-[32rem] h-[46.375rem] origin-top scale-[calc(204/299)] select-none sm:-mt-20 sm:-ml-[24rem] sm:h-auto sm:transform-none md:-ml-64 md:mt-10 lg:-ml-16 lg:mt-0 xl:ml-0 xl:-mr-4">
                    <div class="flex justify-end">
                      <div class="relative flex items-end">
                        <div class="absolute top-full left-16 -mt-px h-8 overflow-hidden">
                          <div class="flex -mt-px h-[2px] w-56"></div>
                        </div>
                        <div>
                          <div class="p-4">
                            <div
                              class="ml-auto pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-red-600 ring-black/20">
                              <div
                                class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4">
                              </div>
                            </div>
                            <div class="mt-8 flex items-center justify-end">
                              <div
                                class="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 dark:bg-slate-500 ring-slate-900/5">
                                <div
                                  class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out">
                                </div>
                              </div>
                              <div
                                class="pointer-events-auto ml-8 rounded-md bg-red-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-red-500 dark:hover:bg-slate-900 dark:ring-1 dark:ring-red-500 dark:hover:ring-slate-600 cursor-pointer">
                                Submit Form</div>
                            </div>
                          </div>
                          <div class="relativez-5 p-4 text-right">
                            <div
                              class="absolute -inset-y-8 left-0 w-px bg-slate-300/25 dark:bg-slate-50/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                            </div>
                            <div
                              class="absolute -inset-x-8 top-0 h-px bg-slate-300/25 dark:bg-slate-50/10 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                            </div>
                            <div
                              class="absolute inset-0 -right-px bg-gradient-to-br from-white/0 via-white/25 dark:via-white/5 to-white/0">
                            </div>
                            <div
                              class="pointer-events-auto relative inline-flex rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900">
                              <div class="flex py-2 px-3"><svg
                                class="fill-slate-500 dark:fill-red-500" width="20"
                                height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9V9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z">
                                </path>
                              </svg><span class="pl-3">Followers</span></div>
                              <div class="border-l border-slate-400/20 py-2 px-2.5">150k</div>
                            </div>
                          </div>
                        </div>
                        <div class="relativez-5 p-4">
                          <div
                            class=" w-[24.5rem] divide-y divide-slate-400/20 rounded-lg text-[0.8125rem] leading-5 text-slate-900 dark:text-slate-100 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 dark:ring-slate-600/60 bg-white dark:bg-gradient-to-t from-gray-900 to-gray-800">
                            <div class="flex items-center p-4"><img
                              src="https://www.rafaelcalderon.com/assets/avatar_1.png"
                              alt="" class="h-10 w-10 flex-none rounded-full" />
                              <div class="ml-4 flex-auto">
                                <div class="font-medium">Jillianna Baker</div>
                                <div class="mt-1 text-slate-700 dark:text-slate-400">
                                  @jillbaker</div>
                              </div>
                              <div
                                class="pointer-events-auto cursor-pointer ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium select-none shadow-sm dark:shadow-xl text-slate-700 dark:text-slate-200 ring-1 ring-slate-700/10 dark:ring-slate-600 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-white/90 dark:bg-gradient-to-bl from-slate-400/20 to-transparent">
                                View</div>
                            </div>
                            <div class="flex items-center p-4"><img
                              src="https://www.rafaelcalderon.com/assets/avatar_2.png"
                              alt="" class="h-10 w-10 flex-none rounded-full" />
                              <div class="ml-4 flex-auto">
                                <div class="font-medium">Lindsey Holmes</div>
                                <div class="mt-1 text-slate-700 dark:text-slate-400">
                                  @linholmes2001</div>
                              </div>
                              <div
                                class="pointer-events-auto cursor-pointer ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium select-none shadow-sm dark:shadow-xl text-slate-700 dark:text-slate-200 ring-1 ring-slate-700/10 dark:ring-slate-600 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-white/90 dark:bg-gradient-to-bl from-slate-400/20 to-transparent">
                                View</div>
                            </div>
                            <div class="flex items-center p-4"><img
                              src="https://www.rafaelcalderon.com/assets/avatar_3.png"
                              alt="" class="h-10 w-10 flex-none rounded-full" />
                              <div class="ml-4 flex-auto">
                                <div class="font-medium">Bert Turner</div>
                                <div class="mt-1 text-slate-700 dark:text-slate-400">
                                  @turnerbert</div>
                              </div>
                              <div
                                class="pointer-events-auto cursor-pointer ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium select-none shadow-sm dark:shadow-xl text-slate-700 dark:text-slate-200 ring-1 ring-slate-700/10 dark:ring-slate-600 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-white/90 dark:bg-gradient-to-bl from-slate-400/20 to-transparent">
                                View</div>
                            </div>
                            <div class="p-4">
                              <div
                                class="pointer-events-auto cursor-pointer rounded-md py-2 px-4 text-center font-medium select-none shadow-sm dark:shadow-xl text-slate-700 dark:text-slate-200 ring-1 ring-slate-700/10 dark:ring-slate-600 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-white/90 dark:bg-gradient-to-bl from-slate-400/20 to-transparent">
                                View all</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <div class="relative z-5 p-4">
                        <div
                          class="flex w-[41rem] rounded-lg shadow-xl shadow-black/5 ring-1 ring-slate-700/10 bg-white dark:bg-gradient-to-b from-gray-700 to-gray-900">
                          <div class="flex items-center space-x-4 py-4 px-6"><svg
                            class="h-6 w-6 flex-none dark:fill-slate-400/75 fill-slate-500">
                            <path
                              d="M6.22 11.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3 6.75l-.53-.53a.75.75 0 0 0 0 1.06L3 6.75Zm4.28-3.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM13.5 18a.75.75 0 0 0 0 1.5V18ZM7.28 9.97 3.53 6.22 2.47 7.28l3.75 3.75 1.06-1.06ZM3.53 7.28l3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm16.72 5.47c0 2.9-2.35 5.25-5.25 5.25v1.5a6.75 6.75 0 0 0 6.75-6.75h-1.5ZM15 7.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 15 6v1.5ZM15 6H3v1.5h12V6Zm0 12h-1.5v1.5H15V18Z">
                            </path>
                            <path d="M3 15.75h.75V21"
                              class="stroke-slate-500 dark:stroke-slate-400/75"
                              stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"></path>
                            <path
                              d="M9 16.5A.75.75 0 0 0 9 15v1.5Zm-2.25-.75V15a.75.75 0 0 0-.75.75h.75Zm0 2.25H6c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5ZM9 15H6.75v1.5H9V15Zm-3 .75V18h1.5v-2.25H6Zm.75 3h1.5v-1.5h-1.5v1.5Zm1.5 1.5h-1.5v1.5h1.5v-1.5ZM9 19.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25H9Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z">
                            </path>
                          </svg><svg class="h-10 w-10 flex-none" fill="none">
                              <circle cx="20" cy="20" r="20"
                                class="fill-slate-900 dark:fill-red-500"></circle>
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.5 13.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L16.28 27.99c-1.25.687-2.779-.217-2.779-1.643V13.653Z"
                                fill="#fff"></path>
                            </svg><svg
                              class="h-6 w-6 flex-none dark:fill-slate-400/75 fill-slate-500">
                              <path
                                d="M16.72 9.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21 6.75l.53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-3.22-4.28a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM10.5 19.5a.75.75 0 0 0 0-1.5v1.5Zm3.75-4.5a.75.75 0 0 0 0 1.5V15Zm.75.75h.75A.75.75 0 0 0 15 15v.75ZM14.25 21a.75.75 0 0 0 1.5 0h-1.5Zm6-4.5a.75.75 0 0 0 0-1.5v1.5ZM18 15.75V15a.75.75 0 0 0-.75.75H18ZM18 18h-.75c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5Zm-.22-9.22 3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm3.75-4.81-3.75-3.75-1.06 1.06 3.75 3.75 1.06-1.06ZM2.25 12.75A6.75 6.75 0 0 0 9 19.5V18a5.25 5.25 0 0 1-5.25-5.25h-1.5ZM9 6a6.75 6.75 0 0 0-6.75 6.75h1.5C3.75 9.85 6.1 7.5 9 7.5V6Zm0 1.5h12V6H9v1.5Zm0 12h1.5V18H9v1.5Zm5.25-3H15V15h-.75v1.5Zm0-.75V21h1.5v-5.25h-1.5Zm6-.75H18v1.5h2.25V15Zm-3 .75V18h1.5v-2.25h-1.5Zm.75 3h1.5v-1.5H18v1.5Zm1.5 1.5H18v1.5h1.5v-1.5Zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z">
                              </path>
                            </svg></div>
                          <div
                            class="flex flex-auto items-center border-l border-slate-200/20 pr-4 pl-6 text-[0.8125rem] leading-5 text-slate-700 dark:text-slate-300">
                            <div>00:51</div>
                            <div
                              class="ml-4 flex flex-auto rounded-full bg-slate-100 dark:bg-slate-600">
                              <div
                                class="h-2 w-1/3 flex-none rounded-l-full rounded-r-[1px] bg-red-600">
                              </div>
                              <div
                                class="-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-red-600">
                              </div>
                            </div>
                            <div class="ml-4">55:43</div><svg
                              class="ml-6 h-6 w-6 flex-none fill-slate-400 stroke-slate-400">
                              <path d="M14 5 9 9H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l5 4V5Z"
                                stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                              <path d="M19 12c0-1.5-1-2-1-2v4s1-.5 1-2Z" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg><svg
                              class="ml-6 h-6 w-6 flex-none fill-slate-900 dark:fill-red-500">
                              <path
                                d="M12 8v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1V8Zm0 0V7a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 12v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 16v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1Z">
                              </path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-start justify-end">
                      <div>
                        <div class="relative flex items-end justify-end">
                          <div
                            class="absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                          </div>
                          <div>
                            <div class="flex justify-end p-4">
                              <div
                                class="pointer-events-auto cursor-pointer flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white dark:bg-gradient-to-t from-slate-900 to-slate-700 text-[0.8125rem] font-medium leading-5 text-slate-700 dark:text-slate-100 shadow-sm ring-1 ring-slate-700/10 dark:ring-slate-400/40">
                                <div
                                  class="py-2 px-4 hover:bg-slate-100 hover:text-slate-900">
                                  Years</div>
                                <div
                                  class="py-2 px-4 hover:bg-slate-100 hover:text-slate-900">
                                  Months</div>
                                <div
                                  class="py-2 px-4 hover:bg-slate-100 hover:text-slate-900">
                                  Days</div>
                              </div>
                            </div>
                            <div class="relativez-5 p-4">
                              <div
                                class="absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                              </div>
                              <div
                                class="absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                              </div>
                              <div
                                class="absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                              </div>
                              <div
                                class="absolute bottom-full left-16 -mb-px flex h-8 items-end overflow-hidden">
                                <div class="flex -mb-px h-[2px] w-56"></div>
                              </div>
                              <div
                                class="flex w-[23.5625rem] items-center rounded-md p-4 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 text-slate-900 dark:text-slate-100 dark:ring-slate-600/60 bg-white dark:bg-gradient-to-t from-gray-900 to-gray-800">
                                <svg class="h-6 w-6 flex-none stroke-slate-500 dark:stroke-slate-300"
                                  stroke-width="2" stroke-linecap="round" fill="none">
                                  <path d="M4 7h16M4 12h16M4 17h16"></path>
                                </svg><svg viewBox="0 0 54 31"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="fill-gray-900 dark:fill-slate-500 ml-6 h-10 w-10 flex-none">
                                  <path
                                    d="M0 0h44.582C49.782 0 54 4.337 54 9.688c0 5.35-4.217 9.687-9.419 9.687h-1.883C48.94 19.375 54 24.58 54 31H37.675v-7.75H26.372V15.5h11.303V7.75h-21.35V31H0V0Z">
                                  </path>
                                </svg>
                                <div
                                  class="ml-auto flex h-6 w-6 items-center justify-center rounded-md shadow ring-1 ring-slate-900/10 dark:ring-slate-600">
                                  <svg class="h-4 w-4 fill-red-500" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z">
                                    </path>
                                  </svg></div>
                                <div
                                  class="ml-6 text-[0.8125rem] font-medium text-slate-700 dark:text-slate-400">
                                  v3.0</div><svg
                                    class="ml-2 h-1 w-1.5 overflow-visible fill-slate-400 stroke-slate-400">
                                  <path d="M0 0H6L3 4Z" stroke-width="1"
                                    stroke-linejoin="round"></path>
                                </svg><svg viewBox="0 0 16 16"
                                  class="ml-6 h-6 w-6 fill-slate-400">
                                  <path
                                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="relativez-5 p-4">
                            <div class="space-y-4">
                              <div
                                class="pointer-events-auto w-[21rem] rounded-lg p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 text-slate-900 dark:text-slate-100s ring-2 ring-red-500 dark:ring-red-600 bg-white dark:bg-gradient-to-t from-gray-900 to-gray-700">
                                <div class="flex justify-between">
                                  <div
                                    class="font-medium text-slate-900 dark:text-slate-300">
                                    Dashboard</div><svg class="h-5 w-5 flex-none"
                                      fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                                      class="fill-red-500"></path>
                                  </svg>
                                </div>
                                <div class="mt-1 text-slate-600 dark:text-slate-500">Your
                                  update was finished</div>
                                <div
                                  class="mt-6 font-medium text-slate-400 dark:text-slate-400">
                                  Congratulations!</div>
                              </div>
                              <div
                                class="pointer-events-auto w-[21rem] rounded-lg p-4 text-[0.8125rem] leading-5 hover:bg-slate-50 text-slate-900 dark:text-slate-100 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 dark:ring-slate-600/60 bg-white dark:bg-gradient-to-t from-gray-900 to-gray-800">
                                <div class="flex justify-between">
                                  <div
                                    class="font-medium text-slate-900 dark:text-slate-300">
                                    Existing customers</div>
                                </div>
                                <div class="mt-1 text-slate-700 dark:text-slate-500">Last
                                  message sent an hour ago</div>
                                <div
                                  class="mt-6 font-medium text-slate-900 dark:text-slate-400">
                                  1200 users</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-start justify-end">
                          <div class="relative p-4">
                            <div
                              class="absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                            </div>
                            <div
                              class="absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                            </div>
                            <div
                              class="pointer-events-auto w-36 space-y-1 rounded-lg p-3 text-[0.8125rem] font-medium leading-6 text-slate-900 dark:text-slate-400 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 dark:ring-slate-600/60 bg-white dark:bg-gradient-to-t from-gray-900 to-gray-800">
                              <div
                                class="flex rounded-[10px] p-1 bg-slate-50 dark:bg-slate-100/10">
                                <div
                                  class="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white dark:bg-gradient-to-t from-slate-900 to-slate-800 shadow ring-1 ring-slate-900/10 dark:ring-slate-600">
                                  <svg class="h-4 w-4 fill-red-500">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z">
                                    </path>
                                  </svg></div>
                                <div class="ml-3 text-slate-900 dark:text-slate-100">Light
                                </div>
                              </div>
                              <div class="flex rounded-[10px] p-1">
                                <div
                                  class="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white dark:bg-gradient-to-t from-slate-900 to-slate-800 shadow ring-1 ring-slate-900/10 dark:ring-slate-600">
                                  <svg class="h-4 w-4 fill-slate-400">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z">
                                    </path>
                                  </svg></div>
                                <div class="ml-3">Dark</div>
                              </div>
                              <div class="flex rounded-[10px] p-1">
                                <div
                                  class="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white dark:bg-gradient-to-t from-slate-900 to-slate-800 shadow ring-1 ring-slate-900/10 dark:ring-slate-600">
                                  <svg class="h-4 w-4 fill-slate-400">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z">
                                    </path>
                                  </svg></div>
                                <div class="ml-3">System</div>
                              </div>
                            </div>
                          </div>
                          <div class="relative p-4">
                            <div
                              class="absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                            </div>
                            <div
                              class="absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                            </div>
                            <div
                              class="absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                            </div>
                            <div class="absolute -top-px right-16 h-8 overflow-hidden">
                              <div class="flex -mt-px h-[2px] w-56 -scale-x-100"></div>
                            </div>
                            <div
                              class="pointer-events-auto w-[28.125rem] text-[0.8125rem] leading-5 text-slate-700 dark:text-slate-400">
                              <div class="font-semibold text-slate-900 dark:text-slate-200">
                                Assigned to</div>
                              <div
                                class="mt-2 flex items-center justify-between rounded-md py-2 px-3 bg-white dark:bg-gradient-to-t from-slate-900 to-slate-800 shadow ring-1 ring-slate-900/10 dark:ring-slate-600 dark:text-slate-100">
                                Noam Chomsky<svg
                                  class="h-5 w-5 flex-none fill-slate-400 dark:fill-red-500">
                                  <path
                                    d="M10 3a1 1 0 0 1 .707.293l3 3a1 1 0 0 1-1.414 1.414L10 5.414 7.707 7.707a1 1 0 0 1-1.414-1.414l3-3A1 1 0 0 1 10 3Zm-3.707 9.293a1 1 0 0 1 1.414 0L10 14.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z">
                                  </path>
                                </svg></div>
                              <div
                                class="mt-4 overflow-hidden rounded-md bg-white py-1 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 dark:bg-gradient-to-t from-slate-900 to-slate-800 dark:ring-slate-600">
                                <div class="py-2 px-3 bg-red-600 text-white">Daniel Dennett
                                </div>
                                <div class="py-2 px-3">Albrecht Durer</div>
                                <div class="py-2 px-3">Andy Clark</div>
                                <div class="py-2 px-3">Martha Nussbaum</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="relative p-4">
                          <div
                            class="pointer-events-auto w-[25.625rem] rounded-lg text-[0.8125rem] leading-5 text-slate-700 dark:text-slate-100 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 dark:ring-slate-600/60 bg-white dark:bg-gradient-to-t from-gray-900 to-gray-800">
                            <div class="flex items-center py-2.5 px-3.5 text-slate-400"><svg
                              class="mr-2 h-5 w-5 stroke-slate-500" fill="none"
                              viewBox="0 0 24 24" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>Search projects...</div>
                            <div class="border-t border-slate-400/20 py-3 px-3.5">
                              <div
                                class="mb-1.5 text-[0.6875rem] font-semibold text-slate-500">
                                Recent searches</div>
                              <div class="flex items-center rounded-md p-1.5"><svg
                                class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                                fill="none" viewBox="0 0 24 24" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z">
                                </path>
                              </svg>Tailwind Labs / Website Redesign</div>
                              <div class="flex items-center rounded-md p-1.5"><svg
                                class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                                fill="none" viewBox="0 0 24 24" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z">
                                </path>
                              </svg>Laravel LLC / Conference Branding</div>
                            </div>
                            <div class="border-t border-slate-400/20 py-3 px-3.5">
                              <div class="flex items-center rounded-md p-1.5"><svg
                                class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                                fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path
                                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                </path>
                              </svg>Add new file...</div>
                              <div class="flex items-center rounded-md p-1.5"><svg
                                class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                                fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path
                                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z">
                                </path>
                              </svg>Add new folder...</div>
                              <div class="flex items-center rounded-md p-1.5"><svg
                                class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                                fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                              </svg>Add hashtag...</div>
                              <div
                                class="flex items-center rounded-md p-1.5 bg-red-600 text-white">
                                <svg class="mr-2.5 h-5 w-5 flex-none stroke-white"
                                  fill="none" viewBox="0 0 24 24" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round">
                                  <path
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
                                  </path>
                                </svg>Add label...</div>
                            </div>
                          </div>
                        </div>
                        <div class="relative p-4">
                          <div
                            class="-mr-[4.625rem] w-[30.25rem] rounded-md bg-white p-4 text-[0.8125rem] leading-6 text-slate-900 dark:text-slate-200 shadow-xl shadow-black/5 ring-1 py-1 ring-slate-700/10 dark:bg-gradient-to-t from-slate-900 to-slate-800 dark:ring-slate-600">
                            <div class="font-semibold leading-5">Account</div>
                            <div class="mt-2 leading-5 text-slate-400">Manage how information is
                              displayed on your account.</div>
                            <div
                              class="mt-4 flex items-center border-t border-slate-400/20 py-3">
                              <span class="w-2/5 flex-none">Language</span><span
                                class="">English</span><span
                                  class="pointer-events-auto ml-auto font-medium text-red-600 hover:text-red-500">Update</span>
                            </div>
                            <div class="flex items-center border-t border-slate-400/20 py-3">
                              <span class="w-2/5 flex-none">Date format</span><span
                                class="">DD-MM-YYYY</span><span
                                  class="ml-auto flex items-center font-medium text-red-600"><span
                                    class="pointer-events-auto hover:text-red-500">Update</span><span
                                      class="mx-3 h-6 w-px bg-slate-400/20"></span><span
                                        class="pointer-events-auto hover:text-red-500">Remove</span></span>
                            </div>
                            <div class="flex items-center border-t border-slate-400/20 py-3">
                              <span>Automatic timezone</span><span class="ml-auto">
                                <div
                                  class="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-red-600 ring-black/20">
                                  <div
                                    class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4">
                                  </div>
                                </div>
                              </span></div>
                            <div class="flex items-center border-t border-slate-400/20 pt-3">
                              <span>Auto-update applicant data</span><span class="ml-auto">
                                <div
                                  class="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5">
                                  <div
                                    class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out">
                                  </div>
                                </div>
                              </span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto px-5">
            <div id="referrals"
              class="container relative mx-auto grid w-full max-w-container my-8 sm:my-16 md:mt-24 xl:mt-32 sm:px-4 ">
              <div class="h-7 font-futura text-base text-slate-500 uppercase tracking-wide"
                aria-hidden="true">MANY THANKS FOR THE KIND WORDS</div>
              <h2
                class="leading-tight h-auto md:h-22 text-4xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-500 to-slate-900 dark:from-slate-300 dark:to-slate-600">
                What they are saying!</h2>
              <div class="flex flex-col xl:flex-row mx-auto h-full mt-8 mb-16">
                <div class="">
                  <div
                    class="rounded-md overscroll-contain overflow-y-auto h-auto bg-white dark:bg-slate-800 shadow-xl p-4 sm:p-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-6 sm:leading-7">
                    <blockquote
                      class="p-4 my-4 bg-white border-l-4 border-slate-200 dark:border-slate-600 dark:bg-slate-800">
                      <p class="w-auto italic text-xl sm:text-2xl antialiased">"Is hard to write about
                        Rafael's work not only because his work is amazing but also because of being
                        so good his work usually don't need words to explain what he means."</p>
                    </blockquote>
                  </div>
                  <div class="flex flex-row m-4 sm:m-8 mt-8"><img
                    class="ring-2 ring-white drop-shadow flex w-14 h-14 rounded-full mr-4"
                    src="https://www.rafaelcalderon.com/assets/avatar_carpintero.jpeg"
                    alt="Photo of Pablo Carpintero" />
                    <div class="flex flex-col">
                      <h3 class="text-xl font-bold text-slate-600 dark:text-slate-200">Pablo
                        Carpintero</h3>
                      <h4 class="text-md text-slate-400 dark:text-slate-400">Creative Director</h4>
                    </div>
                  </div>
                </div>
                <div class="flex-1 w-auto sm:w-1/4">
                  <div class="flex flex-row justify-center sm:justify-start mt-8 sm:ml-8"><button
                    data-direction="left" class=""><svg width="38" height="32" viewBox="0 0 38 32"
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-slate-800 dark:fill-slate-200">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M38 16C38 15.1064 37.2632 14.382 36.3543 14.382L5.4034 14.382L16.3529 2.7152C16.9693 2.05848 16.9274 1.03486 16.2595 0.428879C15.5915 -0.177097 14.5504 -0.135957 13.934 0.520766L0.446469 14.8919C0.327855 15.0157 0.232687 15.1538 0.161187 15.3007C0.152872 15.3177 0.145094 15.3345 0.137426 15.3517C0.128788 15.3712 0.120344 15.3911 0.112525 15.4108C0.04864 15.5716 0.0120659 15.7402 0.00252689 15.9097C0.00125879 15.9322 0.000492908 15.9539 0.00017902 15.9765C7.54376e-05 15.984 1.04436e-07 15.9924 1.04106e-07 16C1.03763e-07 16.0078 6.28807e-05 16.0157 0.000179018 16.0235C0.00339634 16.2454 0.0520268 16.4564 0.137329 16.6481C0.144962 16.6653 0.152916 16.6824 0.161184 16.6993C0.2327 16.8462 0.327895 16.9844 0.446541 17.1082L13.934 31.4792C14.5504 32.136 15.5915 32.1771 16.2595 31.5711C16.9274 30.9651 16.9693 29.9415 16.3529 29.2848L5.4034 17.618L36.3543 17.618C37.2632 17.618 38 16.8936 38 16Z">
                      </path>
                    </svg></button><button data-direction="right" class=""><svg width="38"
                      height="32" viewBox="0 0 38 32"
                      class="ml-12 fill-slate-800 dark:fill-slate-200"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M-6.99382e-07 16C-7.38442e-07 15.1064 0.73679 14.382 1.64567 14.382L32.5966 14.382L21.6471 2.7152C21.0307 2.05848 21.0726 1.03486 21.7405 0.428879C22.4085 -0.177097 23.4496 -0.135957 24.066 0.520766L37.5535 14.8919C37.6721 15.0157 37.7673 15.1538 37.8388 15.3007C37.8471 15.3177 37.8549 15.3345 37.8626 15.3517C37.8712 15.3712 37.8797 15.3911 37.8875 15.4108C37.9514 15.5716 37.9879 15.7402 37.9975 15.9097C37.9987 15.9322 37.9995 15.9539 37.9998 15.9765C37.9999 15.984 38 15.9924 38 16C38 16.0078 37.9999 16.0157 37.9998 16.0235C37.9966 16.2454 37.948 16.4564 37.8627 16.6481C37.855 16.6653 37.8471 16.6824 37.8388 16.6993C37.7673 16.8462 37.6721 16.9844 37.5535 17.1082L24.066 31.4792C23.4496 32.136 22.4085 32.1771 21.7405 31.5711C21.0726 30.9651 21.0307 29.9415 21.6471 29.2848L32.5966 17.618L1.64567 17.618C0.73679 17.618 -6.60322e-07 16.8936 -6.99382e-07 16Z">
                      </path>
                    </svg></button></div>
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
                    <span class="inline-block pr-2">Ⓒ 2023 </span><span
                      class="inline-block pr-2">Made with<svg
                        class="inline-block py-2 w-8 h-8 fill-red-500"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                          d="m47.6 300.4 180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141-45.6-7.6-92 7.3-124.6 39.9l-12 12-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z">
                        </path>
                      </svg></span>
                    {/* <span class="inline-block"><a
                      class="border-dotted border-b-2 border-slate-900/50 dark:border-slate-400 font-bold text-slate-900 dark:text-slate-300 hover:text-red-500 hover:border-red-500"
                      href="https://reactjs.org/" target="_blank">React</a> and <a
                        class="border-dotted border-b-2 border-slate-900/50 dark:border-slate-400 font-bold text-slate-900 dark:text-slate-300 hover:text-red-500 hover:border-red-500"
                        href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.
                    </span> */}
                    </p>
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
