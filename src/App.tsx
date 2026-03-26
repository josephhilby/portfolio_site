import "./index.css";
import heroImage from "./assets/selfie.png";
import ProjectsSection, { type Project } from "./components/ProjectSections";

const projects: Project[] = [
    {
        name: "FreshlyGround",
        description:
            "A programming language and compiler project focused on explicit compilation stages and first-principles language design.",
        techStack: ["Java", "Gradle", "JUnit", "Javalin", "TypeScript", "HTML/CSS", "React", "Vite", "VitePress", "Docker"],
        concepts: ["Compiler Design", "Abstract Syntax Trees", "Semantic Analysis", "Code Generation"],
        liveUrl: "https://freshlyground.onrender.com/",
        githubUrl: "https://github.com/josephhilby/FreshlyGround",
        docsUrl: "https://freshlyground-docs.onrender.com/",
    },
    {
        name: "Hack++ (In Progress)",
        description:
            "A nand2tetris-inspired computing stack exploring assembly, virtual machines, and computer architecture.",
        techStack: ["C", "C++", "GoogleTest", "TypeScript", "HTML/CSS", "React", "Vite", "VitePress", "Docker"],
        concepts: ["Hardware Emulation", "Instruction Set Architecture", "Assembly", "Virtual Machine Abstraction", "Bit Masking",
            "Memory Management", "Memory Mapped Input/Output", "Learning In Public"],
        githubUrl: "https://github.com/josephhilby/HackPlusPlus",
        docsUrl: "https://hackplusplus-docs.onrender.com/",
    },
];

function App() {
    return (
        <div className="site-shell">
            <header className="hero">
                <div className="hero__content">
                    <p className="eyebrow">Aviator and Engineer</p>
                    <h1 className="hero__name">Joseph Hilby</h1>

                    <p className="hero__tagline">
                        Management Experience | ~2000 Flight Hours | High-Reliability Software Engineering
                    </p>

                    <p className="hero__summary">
                        Veteran Naval Aviator and computer science student presenting a systems-oriented
                        software portfolio featuring work in compiler design, low-level systems, and full-stack
                        application development.
                    </p>

                    <div className="hero__actions">
                        <a className="button button--primary" href="#projects">
                            View Projects
                        </a>
                        <a
                            className="button button--secondary"
                            href="https://github.com/josephhilby"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            className="button button--secondary"
                            href="https://www.linkedin.com/in/josephmhilby/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            className="button button--secondary"
                            href="/hilby_resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                <div className="hero__image">
                    <img src={heroImage} alt="Naval aviation cockpit portrait" />
                </div>
            </header>

            <main>
                <section className="section">
                    <div className="section__intro">
                        <p className="section__label">Snapshot</p>
                        <h2>Aviation experience, now focused on software and systems</h2>
                        <p>
                            Former U.S. Naval Aviator with 10+ years leading safety-critical
                            flight operations, personnel training, aviation maintenance, and logistics.
                            Currently finishing a second bachelors degree in Computer Science in order
                            to build a strong technical foundation to succeed and lead in emerging aerospace
                            and defense technologies.
                        </p>
                    </div>

                    <div className="snapshot-grid">
                        <article className="snapshot-card">
                            <h3>Military Leadership</h3>
                            <p>
                                Led teams of 60+ personnel across aviation operations, pilot training,
                                aircraft maintenance, and mission-critical logistics in high-reliability
                                environments requiring disciplined execution and strong operational leadership.
                            </p>
                        </article>

                        <article className="snapshot-card">
                            <h3>High-Risk Operations</h3>
                            <p>
                                Accountable for safety-critical operations and more than $1B in
                                aircraft across deployments, training commands, and emergency response
                                missions.
                            </p>
                        </article>

                        <article className="snapshot-card">
                            <h3>Current Technical Focus</h3>
                            <p>
                                Building portfolio projects in compiler design, computer architecture,
                                and application development that demonstrate a strong grasp of
                                computer science fundamentals, layered abstractions, and high-quality
                                implementation.
                            </p>
                        </article>
                    </div>
                </section>

                <ProjectsSection projects={projects} />
            </main>

            <footer className="footer">
                <p>Built with React, TypeScript, and Vite.</p>
            </footer>
        </div>
    );
}

export default App;