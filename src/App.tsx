import "./index.css";
import heroImage from "./assets/selfie.png";

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
];

function App() {
    return (
        <div className="site-shell">
            <header className="hero">
                <div className="hero__content">
                    <p className="eyebrow">Software Engineer</p>
                    <h1 className="hero__name">Joseph Hilby</h1>

                    <p className="hero__tagline">
                        Systems, compilers, and high-reliability software engineering
                    </p>

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
                        <h2>Aviation leadership, now focused on software and systems</h2>
                        <p>
                            Former U.S. Naval Aviator with 10+ years leading
                            personnel, training, and safety-critical flight operations across
                            aviation, maintenance, and logistics. Currently finishing a second bachelors
                            degree in Computer Science in order to build a strong technical foundation to
                            succeed and lead in emerging aerospace and defense technologies.
                        </p>
                    </div>

                    <div className="snapshot-grid">
                        <article className="snapshot-card">
                            <h3>Operational Leadership</h3>
                            <p>
                                Led teams of 60+ personnel across aviation operations, pilot training,
                                aircraft maintenance, and mission-critical logistics in high-reliability
                                environments requiring disciplined execution and strong operational leadership.
                            </p>
                        </article>

                        <article className="snapshot-card">
                            <h3>High-Responsibility Environment</h3>
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

                <section id="projects" className="section">
                    <div className="section__intro">
                        <p className="section__label">Projects</p>
                        <h2>Featured engineering work</h2>
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
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
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