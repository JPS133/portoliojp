import "./Projects.css";
import projects from "../../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-tag">
        Featured Projects
      </div>

      <h2>
        Things I've <span>Built</span>
      </h2>

      <p>
        A selection of projects showcasing my skills in
        frontend development, AI, and full-stack engineering.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">

                

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;