import './App.css'
import "./index.css";

type Project = {
    name: string;
    description: string;
    stack: string[];
    liveUrl?: string;
    githubUrl?: string;
    docsUrl?: string;
};

const projects: Project[] = [
    {
        name: "FreshlyGround",
        description:
            "A programming language and compiler project focused on explicit compilation stages and first-principles language design.",
        stack: ["Java", "Compiler Design", "Gradle"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        name: "Hack++",
        description:
            "A nand2tetris-inspired computing stack exploring assembly, virtual machines, and computer architecture.",
        stack: ["C++", "Systems", "Emulation"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        name: "DuoMotion",
        description:
            "A cross-platform fitness platform with modern backend and client architecture.",
        stack: ["TypeScript", "NestJS", "React"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

function App() {
    return (
        <div className="site-shell">
            <header className="hero">
                <div className="hero__content">
                    <p className="eyebrow">Joseph Hilby</p>
                    <h1>Software Engineering Portfolio</h1>
                    <p className="hero__summary">
                        Computer science student, former naval aviator, and builder of
                        systems-oriented software projects spanning compilers, platform
                        engineering, and full-stack application development.
                    </p>

                    <div className="hero__actions">
                        <a className="button button--primary" href="#projects">
                            View Projects
                        </a>
                        <a
                            className="button button--secondary"
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            className="button button--secondary"
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className="section">
                    <div className="section__intro">
                        <p className="section__label">About</p>
                        <h2>A central landing page for my work</h2>
                        <p>
                            This site is intended to serve as a stable entry point for my
                            portfolio. Individual projects are developed and deployed
                            independently, while this page provides a concise overview and
                            links to live demos, repositories, and supporting documentation.
                        </p>
                    </div>
                </section>

                <section id="projects" className="section">
                    <div className="section__intro">
                        <p className="section__label">Projects</p>
                        <h2>Featured engineering work</h2>
                        <p>
                            A selection of portfolio projects focused on software
                            architecture, implementation rigor, and technical depth.
                        </p>
                    </div>

                    <div className="project-grid">
                        {projects.map((project) => (
                            <article key={project.name} className="project-card">
                                <div className="project-card__body">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>

                                    <ul className="tag-list">
                                        {project.stack.map((item) => (
                                            <li key={item} className="tag">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-card__actions">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Source
                                        </a>
                                    )}
                                    {project.docsUrl && (
                                        <a href={project.docsUrl} target="_blank" rel="noreferrer">
                                            Docs
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>Built with React, TypeScript, and Vite.</p>
            </footer>
        </div>
    );
}

export default App;