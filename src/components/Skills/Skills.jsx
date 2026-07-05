import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiNextdotjs,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const row1 = [
  { icon: <FaHtml5 />, title: "HTML5" },
  { icon: <FaCss3Alt />, title: "CSS3" },
  { icon: <SiJavascript />, title: "JavaScript" },
  { icon: <FaReact />, title: "React" },
  { icon: <SiNextdotjs />, title: "Next.js" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS" },
];

const row2 = [
  { icon: <FaJava />, title: "Java" },
  { icon: <SiPython />, title: "Python" },
  { icon: <SiMysql />, title: "MySQL" },
  { icon: <FaGitAlt />, title: "Git" },
  { icon: <SiGithub />, title: "GitHub" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technologies I <span>Work With</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        I enjoy building modern web applications using React,
        JavaScript and Java while continuously exploring new
        technologies.
      </motion.p>

      {/* First Row */}
      <div className="slider">
        <div className="slide-track">
          {[...row1, ...row1].map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="slider reverse">
        <div className="slide-track">
          {[...row2, ...row2].map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;