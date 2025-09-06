import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const AnimatedBackground = () => {
  const [engineInit, setEngineInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineInit(true));
  }, []);

  const particlesOptions: ISourceOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 40,
        density: {},
      },
      color: { value: "#94a3b8" },
      links: {
        enable: true,
        color: "#94a3b8",
        distance: 120,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.4,
        outModes: { default: "out" },
      },
      opacity: { value: { min: 0.1, max: 0.3 } },
      size: { value: { min: 1, max: 2 } },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.3 } },
      },
    },
    detectRetina: true,
  };

  if (!engineInit) return null;

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      className="absolute inset-0 -z-10"
    />
  );
};

export default AnimatedBackground;