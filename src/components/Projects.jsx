import { motion } from "framer-motion";
import projectImage from "../assets/delivery-project.png";

const projects = [
  {
    title: "Delivery Management System",
    description:
      "Flask-based web application for delivery personnel to manage package statuses with role-based login and real-time tracking.",
    image: projectImage,
    tech: ["Flask", "MySQL", "JavaScript", "HTML/CSS"],
    github: "https://github.com/AniketSonar",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio website with animations, particles background, contact form, and responsive design.",
    image: projectImage,
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/AniketSonar",
  },

  {
    title: "Weather App",
    description:
      "Responsive weather application using API integration to display real-time weather information.",
    image: projectImage,
    tech: ["React", "API", "CSS"],
    github: "https://github.com/AniketSonar",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black mb-14 text-center"
        >
          Projects
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="
                          bg-slate-800/50
                          backdrop-blur-xl
                          border border-slate-700
                          rounded-3xl
                          overflow-hidden
                          hover:-translate-y-3
                          hover:border-cyan-400
                          hover:shadow-2xl
                          hover:shadow-cyan-500/10
                          duration-500
                        ">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover hover:scale-105 duration-500"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-slate-300 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700 px-3 py-2 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
