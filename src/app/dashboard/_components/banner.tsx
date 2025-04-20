"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../../../app/VelvetMenaceBanner.css";

const Banner: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.OrthographicCamera,
      renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const init = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const canvas = canvasRef.current;
      const container = containerRef.current;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      scene = new THREE.Scene();
      const aspect = width / height;
      camera = new THREE.OrthographicCamera(
        -aspect * 5,
        aspect * 5,
        5,
        -5,
        1,
        1000
      );
      camera.position.z = 10;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      createParticles();

      const ambientLight = new THREE.AmbientLight(0x330033, 0.5);
      scene.add(ambientLight);

      animate();
    };

    const createParticles = () => {
      const particleCount = 200;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const color1 = new THREE.Color(0xcc0066);
      const color2 = new THREE.Color(0x330033);

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 3;
        const z = (Math.random() - 0.5) * 5;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const mixRatio = Math.random();
        const color = new THREE.Color().lerpColors(color1, color2, mixRatio);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        sizes[i] = Math.random() * 0.5 + 0.2;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          attribute float size;
          varying vec3 vColor;
          uniform float time;
          float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
          void main() {
            vColor = color;
            vec3 pos = position;
            float slowTime = time * 0.1;
            pos.x += sin(slowTime + pos.y) * 0.2;
            pos.y += cos(slowTime * 0.7 + pos.x * 0.5) * 0.1;
            float glitchFactor = step(0.99, rand(vec2(floor(time * 0.2), 0.0)));
            pos.x += glitchFactor * (rand(vec2(pos.y, time)) * 2.0 - 1.0) * 0.5;
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            gl_PointSize = size * (1.0 + sin(time * 0.5 + pos.x * 2.0) * 0.2);
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            vec2 center = gl_PointCoord - vec2(0.5);
            float dist = length(center);
            if (dist > 0.5) discard;
            float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
            gl_FragColor = vec4(vColor, alpha * 0.7);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if ((particles.material as THREE.ShaderMaterial).uniforms) {
        (particles.material as THREE.ShaderMaterial).uniforms.time.value +=
          delta * 10;
      }
      renderer.render(scene, camera);
    };

    init();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div ref={containerRef} id="banner-container">
      <canvas ref={canvasRef} id="canvas"></canvas>
      <div className="scanner"></div>
      <div className="marquee">
        <div className="marquee-content">
          [VELVET_MENACE.SYS] * [ECHOES_OF_ABSENCE] * [VOID_PROTOCOL_ACTIVE] *
          [FORGOTTEN_FRAGMENTS] * [NOTHING_IS_REAL] * [VELVET_MENACE.SYS] *
          [ECHOES_OF_ABSENCE] * [VOID_PROTOCOL_ACTIVE] * [FORGOTTEN_FRAGMENTS] *
          [NOTHING_IS_REAL]
        </div>
      </div>
      <div className="banner-text glitch-text">
        <div className="dot-pulse"></div>
        <span className="text-4xl">HEY MILTON !</span>
      </div>
      <div className="ascii-icon">
        ╔═╗╔═╗╔═╗╔═╗
        <br />
        ║ ║ ║╠╩╗║╣ <br />
        ╚═╝╚═╝╚═╝╚═╝
      </div>
      <div className="status-bar">
        <span>SYSTEM: DECAYING</span>
        <span>STATUS: VOID</span>
        <span>WHISPERS: 73%</span>
      </div>
    </div>
  );
};

export default Banner;
