import React, { useRef, useEffect } from 'react';
import './ElectricBackground.css';

const ElectricBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let sparks = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Observe body size changes to update canvas height
    const resizeObserver = new ResizeObserver(() => {
      canvas.height = document.documentElement.scrollHeight;
    });
    resizeObserver.observe(document.body);

    // Particle class - small floating electric nodes
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.life = 1;
      }

      update(time) {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;
        this.opacity = 0.2 + Math.sin(this.pulsePhase) * 0.3;

        // Wrap around
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity * 0.15})`;
        ctx.fill();
      }
    }

    // Spark class - electric discharge between points
    class Spark {
      constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.life = 1;
        this.decay = Math.random() * 0.03 + 0.02;
        this.segments = this.generateSegments();
      }

      generateSegments() {
        const segments = [];
        const dx = this.x2 - this.x1;
        const dy = this.y2 - this.y1;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const numSegments = Math.floor(dist / 8) + 2;

        for (let i = 0; i <= numSegments; i++) {
          const t = i / numSegments;
          const x = this.x1 + dx * t;
          const y = this.y1 + dy * t;
          // Add perpendicular jitter (electric zigzag)
          const perpX = -dy / dist;
          const perpY = dx / dist;
          const jitter = (Math.random() - 0.5) * 12 * (i > 0 && i < numSegments ? 1 : 0);
          segments.push({
            x: x + perpX * jitter,
            y: y + perpY * jitter
          });
        }
        return segments;
      }

      update() {
        this.life -= this.decay;
        // Re-jitter segments for flickering effect
        if (Math.random() < 0.3) {
          this.segments = this.generateSegments();
        }
      }

      draw(ctx) {
        if (this.life <= 0) return;

        ctx.beginPath();
        ctx.moveTo(this.segments[0].x, this.segments[0].y);
        for (let i = 1; i < this.segments.length; i++) {
          ctx.lineTo(this.segments[i].x, this.segments[i].y);
        }
        ctx.strokeStyle = `rgba(0, 240, 255, ${this.life * 0.6})`;
        ctx.lineWidth = this.life * 1.5;
        ctx.stroke();

        // Glow layer
        ctx.beginPath();
        ctx.moveTo(this.segments[0].x, this.segments[0].y);
        for (let i = 1; i < this.segments.length; i++) {
          ctx.lineTo(this.segments[i].x, this.segments[i].y);
        }
        ctx.strokeStyle = `rgba(0, 240, 255, ${this.life * 0.15})`;
        ctx.lineWidth = this.life * 5;
        ctx.stroke();
      }
    }

    // Initialize particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 25000);
    for (let i = 0; i < Math.min(particleCount, 120); i++) {
      particles.push(new Particle());
    }

    let time = 0;
    const connectionDistance = 120;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw particles
      particles.forEach(p => {
        p.update(time);
        p.draw(ctx);
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Randomly create electric sparks
      if (Math.random() < 0.03 && sparks.length < 5) {
        const i = Math.floor(Math.random() * particles.length);
        const j = Math.floor(Math.random() * particles.length);
        if (i !== j) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            sparks.push(new Spark(particles[i].x, particles[i].y, particles[j].x, particles[j].y));
          }
        }
      }

      // Update & draw sparks
      sparks = sparks.filter(s => s.life > 0);
      sparks.forEach(s => {
        s.update();
        s.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="electric-background" />;
};

export default ElectricBackground;
