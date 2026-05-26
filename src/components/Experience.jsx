import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            bg-slate-800/50
            backdrop-blur-xl
            border border-slate-700
            rounded-3xl
            p-8 md:p-10
            hover:border-cyan-400
            hover:shadow-xl
            hover:shadow-cyan-500/10
            duration-300
          "
        >

          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Left */}
            <div className="flex items-start gap-5">

              {/* Icon */}
              <div className="
                w-16 h-16
                rounded-2xl
                bg-cyan-500/10
                border border-cyan-400/20
                flex items-center justify-center
                text-cyan-400
                text-2xl
              ">
                <FaBriefcase />
              </div>

              {/* Role Info */}
              <div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Web Development Intern
                </h3>

                <p className="text-cyan-400 font-semibold">
                  UptoSkills
                </p>

              </div>

            </div>

            {/* Date */}
            <div className="
              bg-slate-700/50
              border border-slate-600
              px-5 py-3
              rounded-xl
              text-slate-300
              text-sm md:text-base
              w-fit
            ">
              Nov 2025 – Feb 2026
            </div>

          </div>

          {/* Description */}
          <div className="mt-10 space-y-5 text-slate-300 leading-8">

            <p>
              • Developed responsive UI components using
              React.js and Tailwind CSS.
            </p>

            <p>
              • Collaborated with mentors to understand
              project requirements and workflows.
            </p>

            <p>
              • Improved frontend responsiveness and
              user experience for web applications.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Experience