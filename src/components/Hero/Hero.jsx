import "./Hero.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

import profile from "../../assets/images/profile.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <motion.span
          className="welcome"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          👋 Welcome to my Portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
        >
          Hi, I'm
          <br />
          <span>Jai Pratap Singh</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
        >
          Full-Stack Developer | Java Developer | AI Enthusiast
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
        >
          Passionate about building beautiful,
          responsive and modern web applications
          using React and JavaScript.
        </motion.p>

        <div className="hero-buttons">

          <a href="#contact" className="btn-primary">
            Contact Me
          </a>

          <a href="/Resume.pdf" 
          download="Resume.pdf"
          className="btn-secondary">
            Download Resume
          </a>

        </div>

        <div className="socials">

          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaEnvelope /></a>

        </div>

      </div>

      <div className="hero-right">

        <div className="circle">

          <img src={profile} alt="Profile" />

        </div>

        <SiReact className="floating react"/>

        <SiJavascript className="floating js"/>

        <FaJava className="floating java" />

        <SiPython className="floating python"/>

      </div>

    </section>
  );
}

export default Hero;