import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute left-0 top-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-10">About Me</h2>

        <p className="text-slate-300 leading-9 text-lg">
          I’m Aniket Sonar, an MCA student and aspiring software developer
          passionate about technology, innovation, and problem-solving. I have a
          strong foundation in web development, programming, databases, and
          modern frontend technologies.
          <br />
          <br />
          I enjoy building responsive and scalable applications using React,
          Flask, Node.js, and Tailwind CSS while continuously learning new
          technologies and improving my development skills.
          <br />
          <br />
          My goal is to contribute to impactful software projects and grow as a
          full-stack developer in the IT industry.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
