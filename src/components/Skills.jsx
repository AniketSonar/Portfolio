import { motion } from "framer-motion"

import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaJava,
} from "react-icons/fa"

import {
  SiJavascript,
  SiTailwindcss,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiBootstrap,
} from "react-icons/si"

const skills = [
  {
    name: "React",
    icon: <FaReact />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "Python",
    icon: <FaPython />,
  },

  {
    name: "Flask",
    icon: <SiFlask />,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },

  {
    name: "Express.js",
    icon: <SiExpress />,
  },

  {
    name: "MySQL",
    icon: <SiMysql />,
  },

  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },

  {
    name: "Java",
    icon: <FaJava />,
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black text-center mb-6"
        >
          Skills & Technologies
        </motion.h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-center max-w-3xl mx-auto leading-8 mb-16 text-lg">

          Technologies and tools I use to build responsive,
          scalable, and modern web applications.

        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                group
                relative
                bg-slate-800/50
                backdrop-blur-xl
                border border-slate-700
                rounded-3xl
                p-8
                flex flex-col items-center justify-center
                text-center
                hover:border-cyan-400
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                duration-300
                overflow-hidden
              "
            >

              {/* Glow Effect */}
              <div className="
                absolute
                inset-0
                bg-cyan-500/0
                group-hover:bg-cyan-500/5
                duration-300
              "></div>

              {/* Icon */}
              <div className="
                text-5xl
                text-cyan-400
                mb-5
                relative
                z-10
                group-hover:scale-110
                duration-300
              ">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="
                text-lg
                md:text-xl
                font-semibold
                text-slate-200
                relative
                z-10
              ">

                {skill.name}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills