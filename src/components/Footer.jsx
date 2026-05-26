import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-800 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-black text-cyan-400 mb-4">
              Aniket Sonar
            </h2>

            <p className="text-slate-400 leading-8">
              MCA Student and aspiring full-stack developer passionate about
              building scalable and modern web applications using React, Flask,
              Node.js, and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 duration-300">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400 duration-300">
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

            <div className="space-y-5 text-slate-400">
              {/* Email */}
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />

                <p className="break-all">aniketsonar7083@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400 text-xl" />

                <p>+91 8862016664</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />

                <p>Dhule, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-6 mt-14"
        >
          {/* GitHub */}
          <a
            href="https://github.com/AniketSonar"
            target="_blank"
            className="
              w-14 h-14
              flex items-center justify-center
              rounded-2xl
              bg-slate-800/50
              border border-slate-700
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-1
              duration-300
              text-2xl
            "
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sonaraniket"
            target="_blank"
            className="
              w-14 h-14
              flex items-center justify-center
              rounded-2xl
              bg-slate-800/50
              border border-slate-700
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-1
              duration-300
              text-2xl
            "
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/aniket_sonar13/"
            target="_blank"
            className="
              w-14 h-14
              flex items-center justify-center
              rounded-2xl
              bg-slate-800/50
              border border-slate-700
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-1
              duration-300
              text-2xl
            "
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800 mt-14 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Aniket Sonar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
