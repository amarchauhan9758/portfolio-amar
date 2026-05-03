import React, { useState, useRef , useEffect } from "react";
import { useTechStackAnimations } from "../utils/useTechStackAnimations";

const SkillBar = ({ level, skillName, uniqueId, onBarReady }) => {
  const barRef = useRef(null);
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (barRef.current && onBarReady) {
      onBarReady(uniqueId, barRef.current, level, setDisplayLevel, skillName);
    }
  }, [level, skillName, uniqueId, onBarReady]);

  return (
    <div className="skill-item flex flex-col w-full gap-1">
      <div className="flex justify-between items-center">
        <span className="skill-name text-sm font-medium text-gray-300">
          {skillName}
        </span>
        <span className="text-xs text-[#e6ff99] font-mono">
          {Math.floor(displayLevel * 10)}%
        </span>
      </div>
      <div
        ref={barRef}
        className="flex w-full items-center justify-start space-x-0.5"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`flex h-3 flex-grow rounded-md transition-all duration-300 bg-gray-700`}
            data-level={i}
          ></span>
        ))}
      </div>
    </div>
  );
};

const SkillGroup = ({ title, skills, groupIndex, onSkillBarReady }) => (
  <>
    <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-gray-100 mb-2">
      {title}
    </h3>
    {skills.map(({ name, level }, skillIndex) => (
      <div key={name} className="col-span-2">
        <SkillBar
          level={level}
          skillName={name}
          uniqueId={`${groupIndex}-${skillIndex}`}
          onBarReady={(id, element, lvl, setDisplay, skillName) =>
            onSkillBarReady(id, element, lvl, setDisplay, skillName)
          }
        />
      </div>
    ))}
  </>
);

function TechStack() {
  const {
    sectionRef,
    titleRef,
    skillGroupsRef,
    skillBarsMap,
    sectionProgressRef,
  } = useTechStackAnimations();

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
        { name: "Redux", level: 7.5 },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", level: 4.4 },
        { name: "Expo", level: 8 },
        { name: "Google Maps Integration", level: 6 },
        { name: "Websocket", level: 6 },
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

  const handleSkillBarReady = (
    id,
    element,
    level,
    setDisplayLevel,
    skillName,
  ) => {
    skillBarsMap(id, element, level, setDisplayLevel, skillName);
  };

  return (
    <section
      ref={sectionRef}
      className="relative p-4 md:p-8 overflow-hidden"
      id="skills"
    >
      {/* Progress bar for scroll indicator */}
      <div
        ref={sectionProgressRef}
        className="absolute top-0 left-0 h-1 bg-[#e6ff99] origin-left scale-x-0"
        style={{ width: "100%" }}
      />

      <h2
        ref={titleRef}
        className="mb-8 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
        style={{
          textShadow:
            "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
        }}
      >
        <span className="font-brand-primary text-green-700">Cor</span>e tech
        stack
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.title}
            ref={skillGroupsRef}
            className="skill-group-container grid-cols-[max-content_1fr] place-content-start gap-3 grid opacity-0"
          >
            <SkillGroup
              title={group.title}
              skills={group.skills}
              groupIndex={groupIndex}
              onSkillBarReady={handleSkillBarReady}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
