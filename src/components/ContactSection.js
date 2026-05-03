import React, { useEffect, useRef } from "react";

import { Mail, MapPin, Github, PhoneCall } from "lucide-react";
import gsap from "gsap";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Heading
      tl.from("h2", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      // Map zoom
      tl.from(
        mapRef.current,
        {
          scale: 1.1,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      );

      // Left content stagger
      tl.from(
        leftRef.current.children,
        {
          x: -40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.4",
      );

      // Form
      tl.from(
        formRef.current,
        {
          x: 60,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.5",
      );

      // 🔥 Parallax effect (separate)
      gsap.to(mapRef.current, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const btn = buttonRef.current;

    if (!btn) return;

    const enter = () => {
      gsap.to(btn, {
        scale: 1.06,
        backgroundColor: "#166534",
        duration: 0.25,
      });
    };

    const leave = () => {
      gsap.to(btn, {
        scale: 1,
        backgroundColor: "#1d202a",
        duration: 0.25,
      });
    };

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);

    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
    };
  }, []);
  return (
    <section ref={sectionRef} className="p-4 md:p-8 relative" id="contact">
      <h2
        className="mb-4 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
        style={{
          textShadow:
            "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
        }}
      >
        <span className="font-brand-primary text-green-700">Get</span> in touch
      </h2>

      <div  ref={mapRef} className="mb-10 aspect-[5/2] h-auto w-full sm:aspect-[5/2]">
        <div className="relative size-full">
          <div className="absolute top-0 z-10 h-8 w-full bg-gradient-to-b from-stone-900/50 sm:h-12"></div>
          <div className="absolute right-0 z-10 h-full w-8 bg-gradient-to-l from-stone-900/50 sm:w-12"></div>
          <div className="absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t from-stone-900/50 sm:h-12"></div>
          <div className="absolute left-0 z-10 h-full w-8 bg-gradient-to-r from-stone-900/50 sm:w-12"></div>
          <img
            alt="contactMap"
            className="size-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDMqzXbsDCQJVUoZA0E_Z-uGsfQrpHxWb9g&s"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto grid gap-x-4 gap-y-8 md:grid-cols-2">
        <div ref={leftRef} className="bg-[#1d202a] md:col-span-1">
          <div>
            <p className="prose mb-4 leading-6 text-gray-200">
              Have a project for me? Any questions about something I've built?
              I'd love to hear from you, give me a shout by email or by using
              the form below if you'd like to get in contact with me.
            </p>

            <dl className="mt-6 flex flex-col space-y-4 text-base text-gray-400 sm:space-y-2">
              {/* Location */}
              <div>
                <dd className="flex items-center">
                  <a
                    className="-m-2 flex items-center p-2 text-[#e6ff99] hover:text-white"
                    href="https://www.google.ca/maps/place/Bareilly,+UP,+India"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin size={18} />
                    <span className="ml-3 text-sm sm:text-base">
                      Bareilly, UP, India
                    </span>
                  </a>
                </dd>
              </div>

              {/* Email */}
              <div>
                <dd className="flex items-center">
                  <a
                    className="-m-2 flex items-center p-2 text-[#e6ff99] hover:text-white"
                    href="mailto:amarchauhan06232@gmail.com"
                    rel="noreferrer"
                  >
                    <Mail size={18} />
                    <span className="ml-3 text-sm sm:text-base">
                      amarchauhan06232@gmail.com
                    </span>
                  </a>
                </dd>
              </div>

              {/* Github */}
              <div>
                <dd className="flex items-center">
                  <a
                    className="-m-2 flex items-center p-2 text-[#e6ff99] hover:text-white"
                    href="https://github.com/amarchauhan9758"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} />
                    <span className="ml-3 text-sm sm:text-base">
                      Amar Singh Chauhan
                    </span>
                  </a>
                </dd>
              </div>

              {/* WhatsApp */}
              <div>
                <dd className="flex items-center">
                  <a
                    className="-m-2 flex items-center p-2 text-[#e6ff99] hover:text-white"
                    href="https://wa.me/7983779331"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PhoneCall size={18} />
                    <span className="ml-3 text-sm sm:text-base">
                      +91 7983779331
                    </span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Contact Form */}
        <div    ref={formRef} className="md:col-span-1  border border-green-800 rounded-2xl  p-5 ">
          <form
            className="grid min-h-[320px] grid-cols-1 gap-y-4"
            method="POST"
          >
            <input
              className="block w-full rounded-md border-none bg-[#1d202a] px-3 py-2 text-white shadow-xl shadow-black/30 focus:outline-none sm:text-sm placeholder-gray-400"
              name="name"
              placeholder="Name"
              required
              type="text"
            />

            <input
              className="block w-full rounded-md border-none bg-[#1d202a] px-3 py-2 text-white shadow-xl shadow-black/30 focus:outline-none sm:text-sm placeholder-gray-400"
              name="email"
              placeholder="Email"
              required
              type="email"
              autoComplete="email"
            />

            <textarea
              className="block w-full rounded-md border-none bg-[#1d202a] px-3 py-2 text-white shadow-xl shadow-black/30 focus:outline-none sm:text-sm placeholder-gray-400"
              name="message"
              placeholder="Message"
              required
              rows={6}
              maxLength={250}
            ></textarea>
            <div className="text-right sm:text-left">
              <button
                ref={buttonRef}
                aria-label="Submit contact form"
                className="w-max rounded-full   border-2 border-green-800 bg-[#1d202a] px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-gray-900 focus:ring-2 focus:ring-green-800 focus:ring-offset-2 focus:ring-offset-gray-950"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        src="https://i.pinimg.com/736x/54/4f/0e/544f0ee87acb6ce5dd72093caaea42e0.jpg"
        alt="Adiyogi Sketch"
        className="pointer-events-none   rounded-3xl absolute left-6 sm:left-2  bottom-5 sm:bottom-2 z-0 sm:h-24 sm:w-24 h-16 w-20     opacity-10 object-contain"
      />
    </section>
  );
}
