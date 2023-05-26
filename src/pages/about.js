import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export default function work() {
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
                                            class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium">Home</button><button
                                                href="/work"
                                                class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium">Work</button><button
                                                    href="/about"
                                                    class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium"
                                                    style={{ "color": "rgb(239, 68, 68);" }}>About</button>
                                            <div class="h-auto pt-2.5 ">
                                                <div class="pointer-events-auto"><button type="button"
                                                    aria-label="Toggle dark mode" class=""><span
                                                        style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                                                            style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                                                                alt="" aria-hidden="true"
                                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
                                                                style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
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
                        <section
                            class="flex-col md:flex-row flex items-left md:justify-between pt-32 md:pt-48 mb-16 md:mb-12">
                            <h1
                                class="drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-bl from-slate-400 to-slate-900 dark:from-slate-200 dark:to-slate-500 text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                                Glad to meet you!</h1>
                            <h4 class="text-slate-600 dark:text-slate-400 text-left text-lg md:mt-20 md:pl-8"></h4>
                        </section>
                        <div class="flex flex-col md:flex-row gap-16 max-w-screen-2xl pb-24">
                            <div class="flex-1 relative"><span
                                style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" }}><span
                                    style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" }}><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27716%27%20height=%27403%27/%3e"
                                        style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px" }} /></span><img
                                    alt="About cover"
                                    src="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fabout.webp&amp;w=1920&amp;q=75"
                                    decoding="async" data-nimg="intrinsic"
                                    srcset="https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fabout.webp&amp;w=750&amp;q=75  1x,https://www.rafaelcalderon.com/_next/image?url=%2Fassets%2Fabout.webp&amp;w=1920&amp;q=75  2x"
                                    style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} /><noscript></noscript></span>
                            </div>
                            <div class="flex-1 relative">
                                <article
                                    class="prose pros prose-p:text-slate-800 dark:prose-p:text-slate-400 prose-a:marker:text-red-500 prose-a:text-red-500 prose-a:underline prose-a:under prose-a:underline-offset-4">
                                    <p>
                                    I moved to the Delhi from my birthplace, Ludhiana, in 2005. I now live in Rajouri Garden, New Delhi, where we were naturalized in 2020. Learning new things is something that I'm passionate about. I love reading, particularly when I am broadening my understanding of a specific topic (like a design problem) that I am trying to solve. I like working to improve communication and making things clear, so whatever has to be said (like a design solution), shouldn't get in your way. I love to cook and play tennis (Not at the same time, offcourse 😁)
                                    </p>
                                    <p>Thank you for taking the time to read this. You can contact me at <a href='mailto:hello@rohitbehl.com'>hello@rohitbehl.com</a> /
                                     <a href='mailto:rohitbehldesigner@gmail.com'>rohitbehldesigner@gmail.com</a>
                                    </p>
                                </article>
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
