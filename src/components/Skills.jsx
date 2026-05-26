import { FaReact, FaPython, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

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
];

function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
          Skills & Technologies
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto leading-8 mb-16 text-lg">
          Technologies and tools I use to build responsive, scalable, and modern
          web applications.
        </p>
      </div>

      {/* Scrolling Skills */}
      <div className="relative">
        {/* Fade Left */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-20"></div>

        {/* Fade Right */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-20"></div>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="
                min-w-[220px]
                bg-slate-800/50
                backdrop-blur-xl
                border border-slate-700
                rounded-3xl
                px-8 py-8
                flex flex-col items-center justify-center
                hover:border-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-500/10
                duration-300
                group
              "
              >
                {/* Icon */}
                <div
                  className="
                text-5xl
                text-cyan-400
                mb-5
                group-hover:scale-110
                duration-300
              "
                >
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-slate-200">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
