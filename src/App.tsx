import "./index.css";
import heroImage from "./assets/selfie.png";
import ProjectsSection, { type Project } from "./components/ProjectSections";

const projects: Project[] = [
  {
    name: "FreshlyGround (Compiler Design)",
    description:
      "Managed the end-to-end development of a high-level language. Focused on compiler pipeline architecture, semantic analysis, and iterative performance optimization within the SDLC.",
    techStack: [
      "Java",
      "Gradle",
      "JUnit",
      "Javalin",
      "TypeScript",
      "HTML/CSS",
      "React",
      "Vite",
      "VitePress",
      "Docker",
    ],
    concepts: [
      "Compiler Design",
      "Abstract Syntax Trees",
      "Semantic Analysis",
      "Code Generation",
    ],
    liveUrl: "https://freshlyground.onrender.com/",
    githubUrl: "https://github.com/josephhilby/FreshlyGround",
    docsUrl: "https://freshlyground-docs.onrender.com/",
  },
  {
    name: "Hack++ (Systems Architecture, In Progress)",
    description:
      "Engineered a full-stack architecture from logic gates to ISA. This project showcases my ability to manage complex technical abstractions and conduct system-wide validation.",
    techStack: [
      "C",
      "C++",
      "GoogleTest",
      "TypeScript",
      "HTML/CSS",
      "React",
      "Vite",
      "VitePress",
      "Docker",
    ],
    concepts: [
      "Hardware Emulation",
      "Instruction Set Architecture",
      "Assembly",
      "Virtual Machine Abstraction",
      "Bit Masking",
      "Memory Management",
      "Memory Mapped Input/Output",
      "Learning In Public",
    ],
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
            Technical Program Manager | Systems Engineering & Software
            Architecture | Veteran Naval Aviator
          </p>

          <p className="hero__summary">
            Technical Program Manager blending high-consequence leadership with
            engineering expertise. I translate complex technical requirements
            into reliable, scalable outcomes, bridging the gap between
            engineering teams and stakeholders.
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
            <h3 className="evolution-heading">Professional Evolution</h3>
            <h2>Aviation expertise, now focused on technical leadership.</h2>
          </div>

          <div className="evolution-container">
            {/* Part 1: Operational Foundation */}
            <div className="evolution-group">
              <p className="section__label">
                The Foundation: Military Operations
              </p>
              <div className="snapshot-grid">
                <article className="snapshot-card">
                  <h3>Leadership</h3>
                  <p>
                    Led teams of 60+ personnel across aviation operations,
                    training, maintenance, and logistics in high-stress
                    environments.
                  </p>
                </article>
                <article className="snapshot-card">
                  <h3>High-Risk Operations</h3>
                  <p>
                    Accountable for safety-critical operations and $1B+ in
                    assets across deployments, training commands, and emergency
                    response missions.
                  </p>
                </article>
                <article className="snapshot-card">
                  <h3>Standardization SME</h3>
                  <p>
                    Evaluated and certified 250+ personnel, establishing
                    rigorous quality control benchmarks for complex, high-risk
                    flight maneuvers.
                  </p>
                </article>
              </div>
            </div>

            {/* Part 2: TPM Application */}
            <div className="evolution-group">
              <p className="section__label">
                The Focus: Technical Program Management
              </p>
              <div className="snapshot-grid">
                <article className="snapshot-card">
                  <h3>Technical Stakeholder Alignment</h3>
                  <p>
                    Proven ability to synthesize complex technical architectures
                    for leadership, ensuring cross-functional teams remain
                    synchronized.
                  </p>
                </article>
                <article className="snapshot-card">
                  <h3>Program Governance & Risk</h3>
                  <p>
                    Expert in managing complex dependencies and mitigating
                    systemic risks. Applying rigorous QA frameworks to ensure
                    project availability.
                  </p>
                </article>
                <article className="snapshot-card">
                  <h3>Systems-First Engineering</h3>
                  <p>
                    Deep understanding of the full software/hardware stack.
                    Architecting systems to understand trade-offs essential for
                    high-reliability delivery.
                  </p>
                </article>
              </div>
            </div>
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
