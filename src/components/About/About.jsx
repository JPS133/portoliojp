import "./About.css";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";
import about from "../../assets/images/about.png";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <div className="section-title">
          About Me
        </div>

        <h2>
          Passionate Developer &
          <span> Problem Solver</span>
        </h2>

        <p>
          I'm Jai Pratap Singh, a B.Tech CSE student with a passion for
          building responsive web applications using modern technologies.
          I enjoy learning new frameworks, solving coding problems,
          and creating projects that solve real-world problems.
        </p>

        <div className="info">

          <div className="info-box">
            <FaUserGraduate />
            <div>
              <h4>B.Tech CSE</h4>
              <span>Expected Graduation 2028</span>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h4>Lucknow</h4>
              <span>India</span>
            </div>
          </div>

          <div className="info-box">
            <FaLaptopCode />
            <div>
              <h4>Frontend Development</h4>
              <span>React • JavaScript</span>
            </div>
          </div>

        </div>

      </motion.div>

      <motion.div
        className="about-right"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <div className="code-card">

          <FaCode className="code-icon"/>

          <div className="terminal">

            <p>&lt;Developer /&gt;</p>
            <p>const skills = [</p>
            <p>"React",</p>
            <p>"JavaScript",</p>
            <p>"Java",</p>
            <p>"Python"</p>
            <p>]</p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;