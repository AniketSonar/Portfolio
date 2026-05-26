import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      className="
        min-h-[90vh]
        flex items-center
        justify-center
        px-6
        pt-20 pb-10
        relative
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-10 lg:gap-16
        items-center
        relative
        z-10
      "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main Heading */}
          <h1
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            leading-[1.1]
            mb-6
          "
          >
            Hi, I'm{" "}
            <span
              className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
            >
              Aniket Sonar
            </span>
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Python Developer",
              2000,
              "MCA Student",
              2000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            className="
              text-xl
              md:text-3xl
              font-bold
              text-slate-300
              mb-8
              min-h-[60px]
            "
          />

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            {/* Projects */}
            <a
              href="#projects"
              className="
                group
                border border-cyan-400
                hover:bg-cyan-400
                hover:text-black
                px-6 py-3
                rounded-2xl
                font-bold
                text-base
                duration-300
                backdrop-blur-lg
                hover:shadow-lg
                hover:shadow-cyan-500/30
              "
            >
              <span className="flex items-center gap-3">
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 duration-300" />
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AniketSonar"
              target="_blank"
              className="
                border border-slate-800
                hover:border-cyan-400
                hover:text-cyan-400
                px-6 py-3
                rounded-2xl
                font-bold
                text-base
                duration-300
                bg-slate-800/40
                backdrop-blur-lg
              "
            >
              <span className="flex items-center gap-3">
                <FaGithub />
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sonaraniket"
              target="_blank"
              className="
                border border-slate-800
                hover:border-cyan-400
                hover:text-cyan-400
                px-6 py-3
                rounded-2xl
                font-bold
                text-base
                duration-300
                bg-slate-800/40
                backdrop-blur-lg
              "
            >
              <span className="flex items-center gap-3">
                <FaLinkedin />
                LinkedIn
              </span>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="
                border border-slate-800
                hover:border-cyan-400
                hover:text-cyan-400
                px-6 py-3
                rounded-2xl
                font-bold
                text-base
                duration-300
                bg-slate-800/40
                backdrop-blur-lg
              "
            >
              <span className="flex items-center gap-3">
                <FaDownload />
                Resume
              </span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end items-center"
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="
              absolute
              inset-0
              bg-cyan-500/20
              blur-[100px]
              rounded-full
            "
            ></div>

            {/* Image Border */}
            <div
              className="
              absolute
              inset-0
              rounded-full
              border
              border-cyan-400/20
            "
            ></div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Aniket Sonar"
              className="
                relative
                w-[240px]
sm:w-[300px]
md:w-[360px]
lg:w-[360px]
                rounded-full
                border-4
                border-cyan-400/20
                object-cover
                shadow-2xl
                shadow-cyan-500/20
                hover:scale-105
                duration-500
              "
            />

            {/* Floating Card */}
            <div
              className="
              absolute
              -bottom-4
              -left-4
              bg-slate-800/70
              backdrop-blur-xl
              border border-slate-800
              px-6 py-4
              rounded-2xl
              shadow-xl
            "
            >
              <h3 className="text-cyan-400 font-bold text-xl">MCA</h3>

              <p className="text-slate-300 text-sm">Full Stack Developer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
