import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-6 text-sm md:text-base">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
            Hi, I'm <span className="text-cyan-400">Aniket Sonar</span>
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "MCA Student",
              2000,
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Python Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl text-slate-300 mb-8 font-bold"
          />

          <p className="text-slate-300 text-lg md:text-xl leading-9 max-w-2xl">
            Passionate MCA student and aspiring software developer focused on
            building scalable web applications using React, Flask, Node.js, and
            modern web technologies. Dedicated to solving real-world problems
            through technology and continuous learning.
          </p>

          

          {/* Buttons */}
          <div className="mt-12 flex gap-5 flex-wrap">
            <a
              href="#projects"
              className="
                border border-cyan-400
                hover:bg-cyan-400
                hover:text-black
                px-8 py-4
                rounded-2xl
                font-bold
                text-lg
                duration-300
                backdrop-blur-lg
                hover:shadow-lg
                hover:shadow-cyan-500/30
              "
            >
              <span className="flex items-center gap-3">
                View Projects <FaArrowRight />
              </span>
            </a>

            <a
              href="https://github.com/AniketSonar"
              target="_blank"
              className="
                border border-cyan-400
                hover:bg-cyan-400
                hover:text-black
                px-8 py-4
                rounded-2xl
                font-bold
                text-lg
                duration-300
                backdrop-blur-lg
                hover:shadow-lg
                hover:shadow-cyan-500/30
              "
            >
              <span className="flex items-center gap-3">
                <FaGithub />
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/sonaraniket"
              target="_blank"
              className="
              border border-cyan-400
              hover:bg-cyan-400
              hover:text-black
              px-8 py-4
              rounded-2xl
              font-bold
              text-lg
              duration-300
              backdrop-blur-lg
              hover:shadow-lg
              hover:shadow-cyan-500/30"
            >
              <span className="flex items-center gap-3">
                <FaLinkedin />
                LinkedIn
              </span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="
                border border-cyan-400
                hover:bg-cyan-400
                hover:text-black
                px-8 py-4
                rounded-2xl
                font-bold
                text-lg
                duration-300
                backdrop-blur-lg
                hover:shadow-lg
                hover:shadow-cyan-500/30
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
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow Ring */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full"></div>

            {/* Image */}
            <img
              src={profile}
              alt="Aniket"
              className="
                relative
                w-[280px]
                md:w-[380px]
                lg:w-[450px]
                rounded-full
                border-4
                border-cyan-400/30
                shadow-2xl
                shadow-cyan-500/20
                hover:scale-105
                duration-500
                object-cover
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
