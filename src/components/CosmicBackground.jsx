import React, { useEffect, useRef, useState } from 'react';
import './CosmicBackground.css';

const CosmicBackground = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // 3D Parallax Mouse Tracking with smooth inertia interpolation
  useEffect(() => {
    let animationId;

    const handleMouseMove = (e) => {
      // Normalized between -1 and 1
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos(prev => ({ ...prev, targetX: nx, targetY: ny }));
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const nx = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        const ny = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
        setMousePos(prev => ({ ...prev, targetX: nx, targetY: ny }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Smooth inertia physics (lerp)
    const updateInterpolation = () => {
      setMousePos(prev => ({
        ...prev,
        x: prev.x + (prev.targetX - prev.x) * 0.055,
        y: prev.y + (prev.targetY - prev.y) * 0.055,
      }));
      animationId = requestAnimationFrame(updateInterpolation);
    };

    animationId = requestAnimationFrame(updateInterpolation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // 3D Cyber Particles & Constellations Canvas (Retina / 4K DPI Aware)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // 3D Space Particle with depth & velocity
    class Particle3D {
      constructor(width, height) {
        this.reset(width, height, true);
      }

      reset(width, height, randomZ = false) {
        this.x = (Math.random() - 0.5) * width * 1.6;
        this.y = (Math.random() - 0.5) * height * 1.6;
        this.z = randomZ ? Math.random() * 900 + 100 : 1000;
        this.speed = Math.random() * 0.55 + 0.25;
        this.baseRadius = Math.random() * 1.5 + 0.6;
        this.opacity = Math.random() * 0.65 + 0.35;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        const colors = ['#00f0ff', '#38bdf8', '#818cf8', '#a5f3fc', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(width, height) {
        this.z -= this.speed;
        this.pulse += this.pulseSpeed;

        if (this.z <= 12) {
          this.reset(width, height);
        }
      }

      getScreenPos(width, height, mx, my) {
        const fov = 380;
        const factor = fov / this.z;
        const screenX = width / 2 + (this.x - mx * 55) * factor;
        const screenY = height / 2 + (this.y - my * 55) * factor;
        return { x: screenX, y: screenY, factor };
      }

      draw(ctx, width, height, screenPos) {
        const { x: sx, y: sy, factor } = screenPos;
        if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) return;

        const size = Math.max(0.4, this.baseRadius * factor * 1.15);
        const dynamicAlpha = Math.min(1, Math.max(0.12, (1 - this.z / 1000) * this.opacity * (0.75 + Math.sin(this.pulse) * 0.25)));

        ctx.save();
        ctx.globalAlpha = dynamicAlpha;

        // Glowing halo for prominent nodes
        if (size > 1.6) {
          const glowGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, size * 3.2);
          glowGrad.addColorStop(0, this.color);
          glowGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(sx, sy, size * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 14000), 100);
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle3D(window.innerWidth, window.innerHeight));
    }

    // Render loop with 3D constellation linkages
    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const mx = mousePos.x;
      const my = mousePos.y;

      const screenPositions = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(width, height);
        const pos = p.getScreenPos(width, height, mx, my);
        screenPositions.push(pos);
        p.draw(ctx, width, height, pos);
      }

      // Draw subtle cyber constellation lines between nearby particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = screenPositions[i];
          const p2 = screenPositions[j];
          if (!p1 || !p2) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const lineAlpha = (1 - dist / 80) * 0.18;
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [mousePos]);

  // Dynamic 3D Matrix Transformations
  const bg3DTransform = `
    translate3d(${-mousePos.x * 24}px, ${-mousePos.y * 24}px, 0)
    rotateY(${mousePos.x * 3.8}deg)
    rotateX(${-mousePos.y * 3.8}deg)
    scale(1.06)
  `;

  const globeGyro3DTransform = `
    translate3d(${mousePos.x * 38}px, ${mousePos.y * 38}px, 50px)
    rotateY(${mousePos.x * 14}deg)
    rotateX(${-mousePos.y * 14}deg)
  `;

  return (
    <div className="cosmic-3d-wrapper" aria-hidden="true">
      {/* 4K Ultra HD 3D Parallax Background Layer */}
      <div 
        className="cosmic-image-layer"
        style={{ transform: bg3DTransform }}
      >
        <img 
          src="./cosmic-bg.png" 
          alt="4K Cosmic Background" 
          className="cosmic-bg-img"
        />
        {/* Ambient Dark Atmospheric Fog for Readability */}
        <div className="cosmic-ambient-overlay"></div>
      </div>

      {/* 3D Celestial Hologram & Orbital Gyro Rings Centered over the 4K Globe */}
      <div 
        className="cosmic-sphere-anchor"
        style={{ transform: globeGyro3DTransform }}
      >
        <div className="cosmic-core-glow"></div>
        <div className="cosmic-flare"></div>
        <div className="gyro-ring gyro-ring-1"></div>
        <div className="gyro-ring gyro-ring-2"></div>
        <div className="gyro-ring gyro-ring-3"></div>
      </div>

      {/* Interactive 3D Constellations & Cyber Dust Canvas */}
      <canvas ref={canvasRef} className="cosmic-canvas" />

      {/* Subtle 3D Horizon Grid Floor */}
      <div className="cosmic-grid-horizon"></div>
    </div>
  );
};

export default CosmicBackground;
