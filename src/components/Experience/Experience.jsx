import "./Experience.css";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026",
    title: "AI Software Engineer Internship",
    company: "Working Trial",
    description:
      "Built AI-powered applications using React, Next.js, Prisma and AI APIs."
  },
  {
    year: "2026",
    title: "College Discovery Platform",
    company: "Full Stack Project",
    description:
      "Developed authentication, search, PostgreSQL database and responsive UI."
  },
  {
    year: "2025",
    title: "Movie Recommendation System",
    company: "Academic Project",
    description:
      "Machine learning based recommendation system with modern UI."
  },
  {
    year: "2024",
    title: "Started Web Development",
    company: "Self Learning",
    description:
      "Began learning HTML, CSS, JavaScript and React."
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="section-tag">
        Journey
      </div>

      <h2>
        Education &
        <span> Experience</span>
      </h2>

      <div className="timeline">

        {timeline.map((item, index) => (

          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity:0, x:index%2===0?-80:80 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Experience;