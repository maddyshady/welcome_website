
// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';
export default function Header() {
    return (
        <>
            <div class="pointer-events-auto z-20 absolute top-0 w-screen overscroll-contain">
                <nav class="fixed dark:bg-gray-700 dark:bg-opacity-60 bg-white backdrop-blur-md bg-opacity-90 w-full sm:px-6  drop-shadow-sm" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)" }}>
                    <div class="container mx-auto md:px-8 ">
                        <div class="flex h-16">
                            <div class="flex w-full items-center justify-between">
                                <div class="flex-shrink-0">
                                    <div class="hidden md:block h-6">
                                        <svg width="100%" height="100%" viewBox="0 0 54 31" xmlns="http://www.w3.org/2000/svg" class="fill-gray-900 dark:fill-gray-200">
                                            <path d="M0 0h44.582C49.782 0 54 4.337 54 9.688c0 5.35-4.217 9.687-9.419 9.687h-1.883C48.94 19.375 54 24.58 54 31H37.675v-7.75H26.372V15.5h11.303V7.75h-21.35V31H0V0Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="hidden md:block float-right">
                                    <div class="ml-10 flex items-stretch space-x-4">
                                        <Link href="/">
                                        <button  class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium" style={{ "color": "rgb(239, 68, 68)" }}>Home</button>
                                        </Link>
                                        <Link href="/work">
                                        <button  class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium" style={{ color: null }}>Work</button>
                                        </Link>
                                        <Link href="/about">
                                        <button  class="dark:text-gray-100 text-gray-900 hover:drop-shadow-md rounded-md px-3 py-2 text-lg font-medium" style={{ color: null }}>About</button>
                                        </Link>
                                        <div class="h-auto pt-2.5 ">
                                            <div class="pointer-events-auto">
                                                <button type="button" aria-label="Toggle dark mode" class="">
                                                    <span style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0", "margin": "0", "padding": "0", "position": "relative", "maxWidth": "100%" }}>
                                                        <span style={{ "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0", "margin": "0", "padding": "0", "maxWidth": "100%" }}>
                                                            <img style={{ "display": "block", "maxWidth": "100%", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0", "margin": "0", "padding": "0" }} alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20
													xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" />
                                                        </span>
                                                        <img alt="Icon" src="https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg" decoding="async" data-nimg="intrinsic" style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "right": "0", "boxSizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0", "height": "0", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} srcset="https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg  1x,https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg  2x" />
                                                        <noscript>
                                                            <img alt="Icon" srcSet="/_next/static/media/moon.75269553.svg 1x, /_next/static/media/moon.75269553.svg 2x" src="https://www.rafaelcalderon.com/_next/static/media/moon.75269553.svg" decoding="async" data-nimg="intrinsic" style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "right": "0", "boxSizing": "border-box", "padding": "0", "border": "none", "margin": "auto", "display": "block", "width": "0", "height": "0", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} loading="lazy" />
                                                        </noscript>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex h-10 mt-3 mr-3 md:hidden">
                                <button type="button" class="dark:bg-gray-100 bg-gray-900 inline-flex items-center justify-center p-2 rounded-lg dark:text-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}