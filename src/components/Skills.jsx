import { motion } from "framer-motion"

const skills = [
  "React",
  "JavaScript",
  "Python",
  "Flask",
  "Node.js",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Bootstrap",
  "GitHub",
  "Java",
  "C++",
  "Team Leadership",
]

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black mb-14 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 p-6 rounded-2xl text-center hover:bg-cyan-400 hover:text-black duration-300 hover:scale-105 cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills