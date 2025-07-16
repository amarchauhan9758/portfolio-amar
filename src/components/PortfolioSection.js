import React from 'react';
import ProjectCard from "./ProjectCard";
import { projects } from "../services/projectDetails";

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="px-4 py-8 sm:px-8">
            <h2
                className="mb-4 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
                style={{
                    textShadow:
                        "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
                }}
            >
                <span className="font-brand-primary text-green-700">Key De</span>velopement Projects
            </h2>

            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide hover:scrollbar-default">
                {projects
                    .filter(project => project && project.title && project.image && project.link && project.description) // avoids empty cards
                    .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
            </div>
        </section>

    );
};

export default PortfolioSection;
