import { useEffect, useRef } from 'react';

const GlitterEffect = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const ripplesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Mouse event handlers
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        isMoving: true
      };
      // Add ripple effect
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 150,
        opacity: 0.5,
        speed: 5
      });
      // Reset isMoving after a short delay
      setTimeout(() => {
        mouseRef.current.isMoving = false;
      }, 100);
    };

    // Create particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 4 + 2; // Larger stars
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.7 + 0.3; // Brighter stars
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.points = Math.floor(Math.random() * 3) + 4;
        this.innerRadius = this.size * 0.4;
        this.outerRadius = this.size;
        this.density = Math.random() * 30 + 1;
        this.glowSize = this.size * 2; // Glow effect
      }

      update() {
        // Mouse interaction
        if (mouseRef.current.isMoving) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150; // Increased effect radius
          const force = (maxDistance - distance) / maxDistance;

          if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx);
            const repelX = Math.cos(angle) * force * 20; // Increased repulsion
            const repelY = Math.sin(angle) * force * 20;

            this.x -= repelX;
            this.y -= repelY;
            // Increase brightness when moving
            this.opacity = Math.min(this.opacity + 0.1, 1);
          }
        }

        // Return to base position
        const dx = this.x - this.baseX;
        const dy = this.y - this.baseY;
        this.x -= dx * 0.03; // Slower return
        this.y -= dy * 0.03;
        // Gradually return to original opacity
        this.opacity = Math.max(this.opacity - 0.01, this.opacity * 0.95);

        // Normal movement
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Reset particle if it goes off screen
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Draw glow
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.glowSize);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.beginPath();
        ctx.arc(0, 0, this.glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw star
        ctx.beginPath();
        for (let i = 0; i < this.points * 2; i++) {
          const radius = i % 2 === 0 ? this.outerRadius : this.innerRadius;
          const angle = (i * Math.PI) / this.points;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    const init = () => {
      resizeCanvas();
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 6000); // Increased density
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.radius += ripple.speed;
        ripple.opacity -= 0.01;

        if (ripple.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        return true;
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);

    // Start animation
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default GlitterEffect; 