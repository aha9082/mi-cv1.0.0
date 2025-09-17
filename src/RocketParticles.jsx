import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const RocketParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: "#000000", // fondo negro
        },
        particles: {
          number: {
            value: 30, // 🎯 Menos estrellas
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#ffffff", "#aaccff", "#99bbff"], // colores suaves
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            random: true,
          },
          size: {
            value: { min: 1, max: 2 },
          },
          move: {
            enable: true,
            speed: { min: 1, max: 2 }, // 🎯 Caída lenta
            direction: "bottom",
            straight: false,
            outModes: {
              default: "out",
            },
            trail: {
              enable: true,
              length: 3,
              fillColor: "#000",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default RocketParticles;