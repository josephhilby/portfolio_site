export type Project = {
    name: string;
    description: string;
    techStack: string[];
    concepts: string[];
    liveUrl?: string;
    githubUrl?: string;
    docsUrl?: string;
};

type ProjectsSectionProps = {
    projects: Project[];
};

function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
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

                            <div className="project-card__section">
                                <h4 className="project-card__subheading">Tech Stack:</h4>
                                <ul className="tag-list">
                                    {project.techStack.map((item) => (
                                        <li key={item} className="tag">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-card__section">
                                <h4 className="project-card__subheading">Engineering Concepts:</h4>
                                <ul className="tag-list">
                                    {project.concepts.map((item) => (
                                        <li key={item} className="tag">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
    );
}

export default ProjectsSection;