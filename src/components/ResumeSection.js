import React from 'react';

const ResumeSection = () => {
    return (
        <section className="p-4 md:p-8" id="resume">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                {/* Education Section */}
                <div className="col-span-1">
                    <h2
                        className="mb-4 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
                        style={{
                            textShadow:
                                'rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px',
                        }}
                    >
                        <span className="font-brand-primary text-green-700">Edu</span>cation
                    </h2>

                    <ul>



                        <li className="relative border-b border-l border-gray-700 py-4 pl-4 last:border-b-0">
                            <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                                <span className="whitespace-nowrap rounded-full border border-green-700 bg-gray-950 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                                    2021 - 2022
                                </span>
                                <span className="text-xs font-medium text-gray-200">Self-Learning (Udemy) and Youtube</span>
                            </div>
                            <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                                <h2 className="font-bold text-white">Frontend Development with HTML, CSS, JavaScript & Tailwind CSS</h2>
                                <p className="text-gray-300">
                                    After graduation, I enrolled in multiple Udemy courses to enhance my frontend development skills. I focused on mastering HTML and CSS, then moved on to JavaScript basics and DOM manipulation. I also learned Tailwind CSS to build clean, responsive UI designs quickly and efficiently. This self-learning phase built the foundation that helped me move into real-world frontend development with confidence.
                                </p>
                            </div>
                        </li>



                        {/* UVic */}
                        <li className="relative border-b border-l border-gray-700 py-4 pl-4 last:border-b-0">
                            <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                                <span className="whitespace-nowrap rounded-full border border-green-700 bg-gray-950 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                                    2016 - 2019
                                </span>
                                <span className="text-xs font-medium text-gray-200">Mahatma Jyotiba Phule Rohilkhand University, Bareilly</span>
                            </div>
                            <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                                <h2 className="font-bold text-white">Bachelor of Computer Science</h2>
                                <p className="text-gray-300">
                                    During my BCA, I gained strong exposure to core programming concepts and web development fundamentals. This is where I began working with JavaScript and gradually explored modern libraries like React.js, which sparked my interest in building interactive and dynamic user interfaces...
                                </p>
                            </div>
                        </li>


                        <li className="relative border-b border-l border-gray-700 py-4 pl-4 last:border-b-0">
                            <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                                <span className="whitespace-nowrap rounded-full border border-green-700 bg-gray-950 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                                    2015 - 2016
                                </span>
                                <span className="text-xs font-medium text-gray-200">Woodrow Senior Secondary School</span>
                            </div>
                            <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                                <h2 className="font-bold text-white">12th Standard – PCM (CBSE Board)</h2>
                                <p className="text-gray-300">
                                    Completed my higher secondary education with Physics, Chemistry, and Mathematics (PCM) from the CBSE board. During this time, I developed an early interest in computer science and web technologies, which eventually led me to explore JavaScript and React.js.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Experience Section */}
                <div className="col-span-1">
                    <h2
                        className="mb-4 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
                        style={{
                            textShadow:
                                'rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px',
                        }}
                    >
                        <span className="font-brand-primary text-green-700">Exp</span>erience
                    </h2>

                    <ul>

                        <li className="relative border-b border-l border-gray-700 py-4 pl-4 last:border-b-0">
                            <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                                <span className="whitespace-nowrap rounded-full border border-green-700 bg-gray-950 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                                    2020 Oct   - 2021 Jan
                                </span>
                                <span className="text-xs font-medium text-gray-200">Chegg.Inc</span>
                            </div>
                            <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                                <h2 className="font-bold text-white">Subject Matter Expert</h2>
                                <p className="text-gray-300">
                                    After completing my graduation in 2019 and during the COVID-19 lockdown period (2020–2021), I worked as a freelancer with Chegg as a Subject Matter Expert. This role involved solving academic queries, mainly related to computer science and programming. It helped me strengthen my problem-solving skills, improve code accuracy, and maintain consistency under tight deadlines
                                </p>


                            </div>
                        </li>
                        {/* Instant Domains */}
                        <li className="relative border-b border-l border-gray-700 py-4 pl-4 last:border-b-0">
                            <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                                <span className="whitespace-nowrap rounded-full border border-green-700 bg-gray-950 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                                    2023 May - 2025 May
                                </span>
                                <span className="text-xs font-medium text-gray-200">Kalolytic Solutions Pvt Ltd.</span>
                            </div>
                            <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                                <h2 className="font-bold text-white">Frontend Developer</h2>
                                <p className="text-gray-300">
                                    Developed frontend modules (DLP, Super Admin) using React, Redux, Material UI.
                                </p>
                                <p className="text-gray-300">
                                    Backend Collaboration: Worked closely with backend teams to integrate RESTful APIs, ensuring
                                    payload encryption using Crypto.js.

                                </p>
                                <p>
                                    Implemented JWT-based authentication and session management for secure user access.

                                </p>
                                <ul>
                                    <li className="text-gray-300">
                                        <strong className="text-stone-200">Frontend:</strong> React, Next.js, Material UI and CSS
                                    </li>

                                </ul>
                            </div>
                        </li>

                        {/* Instant Domain Search */}
                        <li className="relative border-b border-l border-gray-700 py-4 pl-4 last:border-b-0">
                            <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                                <span className="whitespace-nowrap rounded-full border border-green-700 bg-gray-950 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                                    2022 Nov - 2023 March
                                </span>
                                <span className="text-xs font-medium text-gray-200">Spearmint Technologies</span>
                            </div>
                            <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                                <h2 className="font-bold text-white">Frotned Developer</h2>
                                <p className="text-gray-300">
                                    Built frontend with Next.js, TypeScript, and Web3.js for Ethereum/BSC integration.

                                </p>
                                <p className="text-gray-300">
                                    Backend Exposure: Assisted in deploying smart contracts (Remix IDE) and connecting frontend to
                                    Polygon/Ethereum blockchains.
                                </p>
                                <ul>
                                    <li className="text-gray-300">
                                        <strong className="text-stone-200">Frontend:</strong> Nextjs/TypeScript, Web 3.0,   Material UI and Tailwind CSS
                                    </li>
                                    <li className="text-gray-300">
                                        <strong className="text-stone-200">Backend:</strong> Solidity, Remix IDE, Smart Contracts
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Shop Your Own Mortgage */}
                        <li className="relative border-b border-l border-gray-700 py-4 pl-4 last:border-b-0">
                            <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                                <span className="whitespace-nowrap rounded-full border border-green-700 bg-gray-950 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                                    2022 April- 2022 Sept
                                </span>
                                <span className="text-xs font-medium text-gray-200">Technobux India Pvt. Ltd (wezbo)</span>
                            </div>
                            <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                                <h2 className="font-bold text-white">Frontend Developer</h2>
                                <p className="text-gray-300">
                                    Single-handedly developed the company website using <strong className="text-stone-200">React</strong>, <strong className="text-stone-200">Tailwind CSS</strong>, and integrated <strong className="text-stone-200">RESTful APIs</strong> for dynamic data rendering and functionality.
                                </p>
                                <p className="text-gray-300">
                                    Built a scalable and responsive <strong className="text-stone-200">Admin Dashboard</strong> using <strong className="text-stone-200">Tailwind CSS</strong> with a focus on clean code practices, reusable components, and optimized layout for different screen sizes.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
