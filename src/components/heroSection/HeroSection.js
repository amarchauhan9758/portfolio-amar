
import photo from '../../assets/pictureOne.jpg'
const HeroSection = () => {
    return (
        <section id="hero" className="">
            <div className="">
                <div className="relative flex h-screen w-full items-center justify-center">
                    <img
                        alt="I'm Amar-image"
                        fetchPriority="high"
                        width={1920}
                        height={1282}
                        decoding="async"
                        className="absolute z-0 size-full object-cover"
                        style={{ color: 'transparent' }}
                        src={photo}
                        // src="https://demo.reactresume.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-background.371f2b47.webp&w=1920&q=75"
                    />

                    <div className="z-10 max-w-screen-lg px-4 lg:px-0">
                        <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
                            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">I'm Amar Chauhan.</h1>

                            <p className="prose-sm text-lg text-[#e6ff99] sm:prose-base lg:prose-lg">
                                I'm a frontend<strong className="text-stone-100">-focused Full Stack Engineer</strong>, who recently worked
                                at <strong className="text-stone-100">Kalolytic Solutions,</strong>  where I contributed to developed a scalable loan management system for banks, supporting various loan types and approval flows.

                            </p>

                            <p className="prose-sm text-[#e6ff99] sm:prose-base lg:prose-lg">
                                In my free time, you can catch me <strong className="text-stone-100">traveling through the mountains</strong>,
                                enjoying <strong className="text-stone-100">music</strong>, or watching <strong className="text-stone-100">inspiring films</strong>.
                            </p>

                            <div className="flex gap-x-4 text-neutral-100">
                                {/* GitHub */}
                                <a
                                    aria-label="GitHub"
                                    href="https://github.com/amarchauhan9758"
                                    className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <svg className="size-5 align-baseline" viewBox="0 0 128 128" fill="currentColor">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M64 5.1c-33.3 0-60.4 27-60.4 60.4 0 26.7 17.3 49.3 41.3 57.3 3 .6 4.1-1.3 4.1-2.9 0-1.4-.1-6.2-.1-11.2-16.8 3.7-20.3-7.1-20.3-7.1-2.8-7-6.7-8.8-6.7-8.8-5.5-3.7.4-3.7.4-3.7 6.1.4 9.3 6.2 9.3 6.2 5.4 9.2 14.1 6.6 17.6 5 .5-3.9 2.1-6.6 3.8-8.1-13.4-1.5-27.5-6.7-27.5-29.8 0-6.6 2.4-12 6.2-16.2-.6-1.5-2.7-7.7.6-16 0 0 5.1-1.6 16.6 6.2 4.8-1.3 9.9-2 15-2s10.2.7 15 2c11.5-7.8 16.6-6.2 16.6-6.2 3.3 8.3 1.2 14.5.6 16 3.9 4.2 6.2 9.6 6.2 16.2 0 23.2-14.1 28.3-27.6 29.8 2.2 1.9 4.1 5.6 4.1 11.2 0 8.1-.1 14.6-.1 16.6 0 1.6 1.1 3.5 4.1 2.9 24-8 41.3-30.6 41.3-57.3C124.4 32.1 97.3 5.1 64 5.1z" />
                                    </svg>
                                </a>



                                {/* LinkedIn */}
                                <a
                                    aria-label="LinkedIn"
                                    href="https://www.linkedin.com/in/amar-singh-chauhan-a0267b193/"
                                    className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <svg className="size-5 align-baseline" viewBox="0 0 48 48" fill="currentColor">
                                        <path d="M44.45 0H3.54C1.58 0 0 1.55 0 3.46v41.08C0 46.44 1.58 48 3.54 48H44.45C46.41 48 48 46.44 48 44.54V3.46C48 1.55 46.41 0 44.45 0zM14.24 40.9H7.12V17.99h7.12V40.9zm-3.56-26.03c-2.29 0-4.13-1.85-4.13-4.13 0-2.29 1.85-4.13 4.13-4.13s4.13 1.85 4.13 4.13-1.84 4.13-4.13 4.13zm30.22 26.03h-7.12V29.77c0-2.65-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.9v11.32H18.71V17.99h6.82v3.13h.1c.95-1.8 3.27-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    aria-label="Instagram"
                                    href="https://www.instagram.com/your-instagram/"
                                    className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <svg className="size-5 align-baseline" viewBox="0 0 128 128" fill="currentColor">
                                        <path d="M92.7 0H35.3C15.85 0 0 15.85 0 35.32v57.36C0 112.15 15.85 128 35.3 128h57.37C112.15 128 128 112.15 128 92.68V35.32C128 15.85 112.15 0 92.7 0zm23.9 92.68c0 13.22-10.75 23.97-23.97 23.97H35.3c-13.22 0-23.97-10.75-23.97-23.97V35.32c0-13.22 10.75-23.97 23.97-23.97h57.37c13.22 0 23.97 10.75 23.97 23.97v57.36z" />
                                        <path d="M64 31.02c-18.19 0-32.98 14.79-32.98 32.98 0 18.19 14.79 32.98 32.98 32.98s32.98-14.79 32.98-32.98c0-18.19-14.79-32.98-32.98-32.98zm0 54.61c-11.92 0-21.62-9.7-21.62-21.62 0-11.92 9.7-21.62 21.62-21.62 11.92 0 21.62 9.7 21.62 21.62 0 11.92-9.7 21.62-21.62 21.62z" />
                                        <circle cx="98.37" cy="29.72" r="8.68" />
                                    </svg>
                                </a>


                            </div>


                            <div className="flex w-full justify-center gap-x-4">
                                <a
                                    className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-orange-500 ring-orange-500"
                                    href="/assets/resume.pdf"
                                >
                                    Resume
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-white sm:size-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </a>

                                <a
                                    className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-white ring-white"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-6 flex justify-center">
                        <a
                            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                            href="/#about"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 bg-transparent sm:size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// You can extract this into a separate component if you want
const SocialIcon = ({ href, label, icon }) => (
    <a
        aria-label={label}
        className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        {/* You can use a component library like react-icons here */}
        <span>{label}</span> {/* Placeholder for icon */}
    </a>
);



export default HeroSection;
