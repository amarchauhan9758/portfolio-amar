import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ResumeSection = () => {
  const sectionRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState({});
  const educationRef = useRef([]);
  const experienceRef = useRef([]);

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const educationData = [
    {
      id: "self-learning",
      period: "2021 - 2022",
      institution: "Self-Learning (Udemy) and Youtube",
      title: "Frontend Development with HTML, CSS, JavaScript & Tailwind CSS",
      description:
        "After graduation, I enrolled in multiple Udemy courses to enhance my frontend development skills. I focused on mastering HTML and CSS, then moved on to JavaScript basics and DOM manipulation. I also learned Tailwind CSS to build clean, responsive UI designs quickly and efficiently. This self-learning phase built the foundation that helped me move into real-world frontend development with confidence.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      id: "bca",
      period: "2016 - 2019",
      institution: "Mahatma Jyotiba Phule Rohilkhand University, Bareilly",
      title: "Bachelor of Computer Science",
      description:
        "During my BCA, I gained strong exposure to core programming concepts and web development fundamentals. This is where I began working with JavaScript and gradually explored modern libraries like React.js, which sparked my interest in building interactive and dynamic user interfaces.",
      skills: [
        "JavaScript",
        "React.js",
        "Data Structures",
        "Algorithms",
        "DBMS",
      ],
    },
    {
      id: "12th",
      period: "2015 - 2016",
      institution: "Woodrow Senior Secondary School",
      title: "12th Standard – PCM (CBSE Board)",
      description:
        "Completed my higher secondary education with Physics, Chemistry, and Mathematics (PCM) from the CBSE board. During this time, I developed an early interest in computer science and web technologies, which eventually led me to explore JavaScript and React.js.",
      skills: ["Physics", "Chemistry", "Mathematics", "Problem Solving"],
    },
  ];

  const experienceData = [
    {
      id: "factorwise",
      period: "2025 Sept - 2026 May",
      company: "Agrim Fincap Pvt Ltd.",
      title: "SoftWare Engineer",

      description:
        "Worked on a CRM-based Payday Loan Management System using Next.js and modern frontend practices. Built scalable and reusable UI components, integrated APIs with Node.js and Prisma, and enhanced user experience with smooth animations using GSAP.",

      achievements: [
        "Built Payday Loan CRM from scratch using Next.js with scalable architecture",
        "Developed reusable components to improve code maintainability and overall performance",
        "Improved application load time by ~30% using Next.js optimizations like code-splitting and dynamic imports",
        "Implemented protected routes with Role-Based Access Control (RBAC) for secure user authorization",
        "Managed global state efficiently using Redux, reducing unnecessary re-renders",
        "Implemented SSR and client-side hydration for better performance and user experience",
        "Optimized images and caching strategies using next/image",
        "Enhanced UI experience with smooth animations using GSAP",
      ],

      tech: [
        "Next.js",
        "React.js",
        "Redux",
        "GSAP",
        "SSR",
        "Prisma",
        "Node.js",
        "REST APIs",
        "Tailwind CSS",
      ],
    },

    {
      id: "kalolytic",
      period: "2023 May - 2025 May",
      company: "Kalolytic Solutions Pvt Ltd.",
      title: "Frontend Developer",
      description:
        "Developed frontend modules (DLP, Super Admin) using React, Redux, Material UI. Worked closely with backend teams to integrate RESTful APIs, ensuring payload encryption using Crypto.js. Implemented JWT-based authentication and session management for secure user access.",
      achievements: [
        "Built scalable admin dashboard serving 10k+ users",
        "Reduced load time by 40% through code optimization",
        "Implemented real-time notifications system",
      ],
      tech: ["React.js", "Redux", "Material-UI", "JWT", "REST APIs"],
    },
    {
      id: "spearmint",
      period: "2022 Nov - 2023 March",
      company: "Spearmint Technologies",
      title: "Frontend Developer",
      description:
        "Built frontend with Next.js, TypeScript, and Web3.js for Ethereum/BSC integration. Assisted in deploying smart contracts (Remix IDE) and connecting frontend to Polygon/Ethereum blockchains.",
      achievements: [
        "Implemented Web3 wallet integration",
        "Deployed 3 smart contracts on testnet",
        "Created reusable component library",
      ],
      tech: ["Next.js", "TypeScript", "Web3.js", "Solidity", "Ethereum"],
    },
    // {
    //   id: "technobux",
    //   period: "2022 April - 2022 Sept",
    //   company: "Technobux India Pvt. Ltd (wezbo)",
    //   title: "Frontend Developer",
    //   description:
    //     "Single-handedly developed the company website using React, Tailwind CSS, and integrated RESTful APIs for dynamic data rendering and functionality. Built a scalable and responsive Admin Dashboard using Tailwind CSS with a focus on clean code practices, reusable components, and optimized layout for different screen sizes.",
    //   achievements: [
    //     "Developed complete company website from scratch",
    //     "Built responsive admin dashboard",
    //     "Implemented 5+ REST API integrations",
    //   ],
    //   tech: ["React.js", "Tailwind CSS", "REST APIs", "Responsive Design"],
    // },
    {
      id: "chegg",
      period: "2020 Oct - 2021 Jan",
      company: "Chegg.Inc",
      title: "Subject Matter Expert",
      description:
        "After completing my graduation in 2019 and during the COVID-19 lockdown period (2020–2021), I worked as a freelancer with Chegg as a Subject Matter Expert. This role involved solving academic queries, mainly related to computer science and programming. It helped me strengthen my problem-solving skills, improve code accuracy, and maintain consistency under tight deadlines.",
      achievements: [
        "Solved 500+ programming queries",
        "Maintained 98% customer satisfaction",
        "Specialized in JavaScript and Web Development",
      ],
    },
  ];

  useEffect(() => {
    const animateItems = (items) => {
      items.forEach((el, index) => {
        setTimeout(() => {
          el?.classList.add("visible");
        }, index * 200);
      });
    };

    setTimeout(() => {
      animateItems(educationRef.current);
      animateItems(experienceRef.current);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative p-4 md:p-8" id="resume">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
        {/* Education Section */}
        <div className="col-span-1">
          <h2
            className="mb-6 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
            style={{
              textShadow:
                "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
            }}
          >
            <span className="font-brand-primary text-green-700">Edu</span>cation
          </h2>

          <ul className="space-y-6">
            {educationData.map((item, index) => (
              <li
                key={item.id}
                ref={(el) => (educationRef.current[index] = el)}
                className="timeline-item relative opacity-0 translate-y-5 transition-all duration-500"
              >
                <div className="relative border-l-2 border-gray-700 pl-6 pb-2">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-green-500 border-2 border-gray-900 shadow-lg" />

                  <div className="mb-3">
                    <div className="inline-flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gradient-to-r from-green-700 to-green-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                        {item.period}
                      </span>
                      <span className="text-xs font-medium text-gray-300">
                        {item.institution}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {expandedItems[item.id]
                        ? item.description
                        : `${item.description.substring(0, 150)}${item.description.length > 150 ? "..." : ""}`}
                    </p>

                    {item.description.length > 150 && (
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="text-green-400 text-xs hover:text-green-300 transition-colors mb-3"
                      >
                        {expandedItems[item.id] ? "Show less" : "Read more"}
                      </button>
                    )}

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800 rounded-md text-xs text-green-400 border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Section */}
        <div className="col-span-1">
          <h2
            className="mb-6 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
            style={{
              textShadow:
                "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
            }}
          >
            <span className="font-brand-primary text-green-700">Exp</span>
            erience
          </h2>

          <ul className="space-y-6">
            {experienceData.map((item, index) => (
              <li
                key={item.id}
                ref={(el) => (experienceRef.current[index] = el)}
                className="timeline-item relative opacity-0 translate-y-5 transition-all duration-500"
              >
                <div className="relative border-l-2 border-gray-700 pl-6 pb-2">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-green-500 border-2 border-gray-900 shadow-lg" />

                  <div className="mb-3">
                    <div className="inline-flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gradient-to-r from-green-700 to-green-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                        {item.period}
                      </span>
                      <span className="text-xs font-medium text-gray-300">
                        {item.company}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {expandedItems[item.id]
                        ? item.description
                        : `${item.description.substring(0, 150)}${item.description.length > 150 ? "..." : ""}`}
                    </p>

                    {item.description.length > 150 && (
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="text-green-400 text-xs hover:text-green-300 transition-colors mb-3"
                      >
                        {expandedItems[item.id] ? "Show less" : "Read more"}
                      </button>
                    )}

                    {/* Achievements */}
                    {item.achievements && (
                      <ul className="space-y-1 mb-3">
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-gray-400"
                          >
                            <svg
                              className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech stack tags */}
                    {item.tech && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800 rounded-md text-xs text-green-400 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .timeline-item.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default ResumeSection;
