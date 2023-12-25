import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Page() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#87CEFA",
          },
          opacity: {
            value: 0.8,
            random: false,
          },
          size: {
            value: 8,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#808080",
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            random: false,
            straight: false,
            out_mode: "bounce",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 150,
              size: 20,
              duration: 2,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        background: {
          color: "#F5F5F5",
        },
        retina_detect: false,
      }}
    />
  );
}
