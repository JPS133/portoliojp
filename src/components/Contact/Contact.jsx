import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    subtitle: "Professional Profile",
    value: "Jai Pratap Singh",
    button: "View Profile",
    link: "https://www.linkedin.com/in/jai-pratap-singh-50a255331/",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    subtitle: "Projects & Repositories",
    value: "@JPS133",
    button: "View GitHub",
    link: "https://github.com/JPS133",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    subtitle: "Let's Work Together",
    value: "jaiprataps830@gmail.com",
    button: "Send Email",
    link: "mailto:jaiprataps830@gmail.com",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    subtitle: "Follow My Journey",
    value: "@theee__jp.effect",
    button: "Follow Me",
    link: "https://www.instagram.com/theee__jp.effect?igsh=MXhhbTBuemw1NzZtaA==",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-tag">Get In Touch</div>

      <h2>
        Let's <span>Connect</span>
      </h2>

      <p>
        I'm always open to internships, collaborations, freelance work, and
        exciting opportunities.
      </p>

      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="contact-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <span>{item.subtitle}</span>

            <p>{item.value}</p>

            <div className="contact-btn">
              {item.button}
              <FaArrowRight />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Contact;