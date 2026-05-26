import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        background: {
          color: {
            value: "#020617",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#38bdf8",
          },

          links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },

          opacity: {
            value: 0.5,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 5 },
          },
        },

        detectRetina: true,
      }}

      className="fixed inset-0 z-0"
    />
  )
}

export default ParticlesBackground