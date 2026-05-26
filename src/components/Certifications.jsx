import { motion } from "framer-motion"

const certifications = [
  "AI Fundamentals and Vision AI Workshop",
  "SQL (Basic)",
  "Quadrant BUG2BUILD Participation",
  "Graphs Camp Participation",
  "Python (Basic)",
]

function Certifications() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black text-center mb-14"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="
                bg-slate-800/50
                backdrop-blur-lg
                border border-slate-700
                rounded-3xl
                p-6
                hover:border-cyan-400
                duration-300
              "
            >

              <h3 className="text-xl font-semibold text-slate-200">
                {cert}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications