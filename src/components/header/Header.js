import React from "react";
import './header.css';
import image from '../../assets/pictureOne.jpg'

import { HiOutlineHome } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <section className="" id="hero">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative col-span-1 size-full min-h-[200px] overflow-hidden shadow-xl shadow-black/40 sm:rounded-r-3xl">
            <img alt="Image-first" fetchpriority="high" decoding="async" data-nimg="fill" className="contain" sizes="(min-width: 320px) 640px, 320px"
              // src="https://timbaker.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-edited-optimized.2bba0eef.webp&w=640&q=80"
              src={image}
              style={{ position: "absolute", height: "100%", width: "100%;", inset: "0px", color: "transparent" }} /></div>
          <div className="relative col-span-1 sm:-ml-4 sm:mr-4 sm:py-6 md:-ml-8 md:mr-8 md:py-12">
            <div className="z-20 flex w-full flex-col items-start  overflow-visible bg-gray-900 px-4 py-8 shadow-xl shadow-black/30 sm:rounded-2xl sm:p-8 lg:p-12">
              <div className="relative mb-4 flex flex-row  flex-wrap items-center"><p className="whitespace-nowrap text-xs  font-bold text-stone-300 lg:text-sm">&lt;<span className="font-bold text-green-600">code</span>&gt;<span className="font-medium text-stone-400">I build</span></p>
                <div className="ml-1 flex w-max items-center"><p className="animate-typing overflow-hidden whitespace-nowrap text-xs  font-black tracking-wide text-stone-300 lg:text-sm">information gathering tools</p><p className="animate-blinking p-0.5 align-middle text-lg font-bold text-white">|</p>
                  <p className="text-xs font-bold text-stone-300 lg:text-sm ">&lt;/<span className="font-bold text-green-600">code</span>&gt;</p></div>
              </div>
              <div className="mb-4 flex w-full flex-wrap items-center gap-y-2"><h1 className="mr-4 w-max text-3xl font-black text-white">Amar Singh Chauhan</h1>
                <div className="flex gap-x-6 sm:gap-x-3"><a aria-label="Github" className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5" href="https://github.com/tbakerx">
                  <svg className="size-5 align-baseline" fill="currentColor" viewBox="0 0 128 128" width="128" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.508-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" fill-rule="evenodd"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></svg></a><a aria-label="LinkedIn" className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5" href="https://www.linkedin.com/in/timbakerx/"><svg className="size-5 align-baseline" fill="currentColor" viewBox="0 0 48 48" width="128" xmlns="http://www.w3.org/2000/svg"><path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="currentColor"></path></svg></a><a aria-label="Instagram" className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5" href="https://www.instagram.com/tbakerx/"><svg className="size-5 align-baseline" fill="currentColor" viewBox="0 0 128 128" width="128" xmlns="http://www.w3.org/2000/svg"><path d="M92.6759 0H35.3226C15.8457 0 0 15.8465 0 35.3234V92.6766C0 112.154 15.8457 128 35.3226 128H92.6759C112.154 128 128 112.154 128 92.6766V35.3234C128.001 15.8465 112.154 0 92.6759 0ZM116.644 92.6766C116.644 105.892 105.892 116.643 92.6766 116.643H35.3226C22.1079 116.644 11.3568 105.892 11.3568 92.6766V35.3234C11.3568 22.1086 22.1079 11.3568 35.3226 11.3568H92.6759C105.891 11.3568 116.643 22.1086 116.643 35.3234V92.6766H116.644Z" fill="currentColor"></path><path d="M64 31.0191C45.8133 31.0191 31.0176 45.8147 31.0176 64.0015C31.0176 82.1875 45.8133 96.9823 64 96.9823C82.1867 96.9823 96.9824 82.1875 96.9824 64.0015C96.9824 45.8147 82.1867 31.0191 64 31.0191ZM64 85.6248C52.0761 85.6248 42.3744 75.9246 42.3744 64.0007C42.3744 52.0761 52.0754 42.3751 64 42.3751C75.9246 42.3751 85.6256 52.0761 85.6256 64.0007C85.6256 75.9246 75.9239 85.6248 64 85.6248Z" fill="currentColor"></path><path d="M98.3656 21.3893C96.1775 21.3893 94.0281 22.2752 92.4828 23.8273C90.9299 25.3718 90.0373 27.522 90.0373 29.7176C90.0373 31.9065 90.9307 34.0559 92.4828 35.608C94.0273 37.1526 96.1775 38.046 98.3656 38.046C100.561 38.046 102.704 37.1526 104.256 35.608C105.808 34.0559 106.694 31.9057 106.694 29.7176C106.694 27.522 105.808 25.3718 104.256 23.8273C102.711 22.2752 100.561 21.3893 98.3656 21.3893Z" fill="currentColor"></path></svg></a><a aria-label="Twitter" className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5" href="https://twitter.com/TimBakerx"><svg className="size-5 align-baseline" fill="currentColor" viewBox="0 0 48 48" width="128" xmlns="http://www.w3.org/2000/svg"><path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" fill="currentColor"></path></svg></a></div></div>
              <p className="prose mb-4 text-gray-200">
                I’m a passionate <strong className="text-white">Frontend Engineer</strong> with 3 years of experience building user-friendly and scalable web applications. I specialize in React.js, Tailwind CSS, Next.js, and Material-UI.

                I’ve worked with companies like Technobux India, Spearmint Technology, and Kalolytic Solutions, where I enjoyed turning complex problems into clean and intuitive user interfaces.

                Most recently, I worked at <strong className="text-white">Kalolytic Solutions Pvt. Ltd.</strong>, contributing to the development of a Loan Oriented System (LOS) platform designed to streamline the bank loan process.

                I'm currently expanding my skill set into backend development with Node.js, Express, and MongoDB.
              </p>


              <p className="prose mb-4 text-gray-200">
                In my free time, I enjoy listening to music, <strong className="text-white">Watching Movies </strong> , practicing <strong className="text-white">Code </strong>, traveling<strong className="text-white"> in the mountains.</strong>
              </p>

              <div className="flex space-x-2">
                <button
                  onClick={() => window.open('/assets/resume.pdf', '_blank')}
                  className="flex items-center rounded-full border-2 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 border-green-800 focus:ring-green-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mr-2 size-5 stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Resume
                </button>
                <a className="flex rounded-full border-2  bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2  focus:ring-offset-2 focus:ring-offset-stone-800 border-green-800 focus:ring-green-800" download="Amar-Singh-Resume.pdf" href="/assets/resume.pdf"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mr-2 size-5 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg>Resume</a>
                <a className="flex rounded-full border-2  bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2  focus:ring-offset-2 focus:ring-offset-stone-800 border-stone-300 focus:ring-stone-300" href="#contact">Contact</a></div></div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Header;
