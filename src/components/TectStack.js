import React from 'react'


const SkillBar = ({ level }) => {
    return (
        <div className="flex w-full items-center justify-start space-x-0.5">
            {Array.from({ length: 10 }, (_, i) => (
                <span
                    key={i}
                    className={`flex h-3 flex-grow rounded-md ${i < level ? "bg-[#e6ff99]" : "bg-gray-900"
                        }`}
                ></span>
            ))}
        </div>
    );
};

const SkillGroup = ({ title, skills }) => (
    <>
        <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-gray-100">
            {title}
        </h3>
        {skills.map(({ name, level }) => (
            <React.Fragment key={name}>
                <div className="grid grid-flow-col justify-start">
                    <span className="whitespace-nowrap text-sm font-medium text-gray-300">
                        {name}
                    </span>
                </div>
                <SkillBar level={level} />
            </React.Fragment>
        ))}
    </>
);


function TectStack() {
    const skillGroups = [
        {
            title: "Frontend",
            skills: [
                { name: "React.js", level: 8 },
                { name: "Next.js", level: 6.5 },
                { name: "Vite.js", level: 8 },
                { name: "TypeScript", level: 5 },
                { name: "Tailwind CSS", level: 9 },
                { name: "Material-UI", level: 8 },
                { name: "Bootstrap", level: 4 },
            ],
        },
        {
            title: "Mobile",
            skills: [
                { name: "React Native", level: 4.4 },
                { name: "Expo", level: 8 },
                { name: "Google Maps Integration", level: 6 },
                { name: "webscocket", level: 6 },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 4 },
                { name: "Express.js", level: 4 },
                { name: "MongoDB", level: 5 },
                { name: "Cookie Parser", level: 3 },
                { name: "JWT Authentication", level: 4 },
            ],
        },
        {
            title: "Blockchain",
            skills: [
                { name: "Ethereum", level: 6 },
                { name: "Binance Smart Chain", level: 6 },
                { name: "Polygon", level: 6 },
                { name: "Arbitrum", level: 5 },
            ],
        },
        {
            title: "Tools",
            skills: [
                { name: "VS Code", level: 9 },
                { name: "Prettier", level: 8 },
                { name: "ESLint", level: 8 },
                { name: "Postman", level: 7 },
                { name: "AWS EC2", level: 4.5 },
                { name: "FileZilla", level: 6 },
                { name: "Nginx", level: 6.5 },
            ],
        },
    ];

    return (
        <section className="  p-4 md:p-8" id="skills">
            <h2
                className="mb-4 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
                style={{
                    textShadow:
                        "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
                }}
            >
                <span className="font-brand-primary text-green-700">Cor</span>e tech stack
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="grid-cols-[max-content_1fr] place-content-start gap-2 grid"
                    >
                        <SkillGroup title={group.title} skills={group.skills} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TectStack
