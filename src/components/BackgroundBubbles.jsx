import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

function BackgroundBubbles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const bubbles = [];
    const totalBubbles = 30;

    // Create bubbles
    for (let i = 0; i < totalBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.style.position = 'absolute';
      bubble.style.width = `${Math.random() * 15 + 5}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.background = 'rgba(255, 255, 255, 0.1)';
      bubble.style.borderRadius = '50%';
      bubble.style.backdropFilter = 'blur(5px)';
      bubble.style.opacity = '0.2';
      bubble.style.transform = 'translate(-50%, -50%)';
      
      // Random initial position
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(bubble);
      bubbles.push({
        element: bubble,
        x: parseFloat(bubble.style.left),
        y: parseFloat(bubble.style.top),
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        size: parseFloat(bubble.style.width),
        targetSize: parseFloat(bubble.style.width) * 2,
        opacity: 0.2,
        targetOpacity: 0.4,
        phase: 'growing',
        phaseProgress: 0,
        phaseDuration: Math.random() * 2000 + 1000
      });
    }

    let lastTime = performance.now();
    let animationFrame;
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      bubbles.forEach(bubble => {
        bubble.phaseProgress += deltaTime;
        const phaseRatio = Math.min(bubble.phaseProgress / bubble.phaseDuration, 1);

        // Update position
        bubble.x += bubble.speedX * (deltaTime / 16);
        bubble.y += bubble.speedY * (deltaTime / 16);

        // Bounce off edges
        if (bubble.x < 0 || bubble.x > 100) {
          bubble.speedX *= -0.8;
          bubble.x = Math.max(0, Math.min(100, bubble.x));
        }
        if (bubble.y < 0 || bubble.y > 100) {
          bubble.speedY *= -0.8;
          bubble.y = Math.max(0, Math.min(100, bubble.y));
        }

        // Phase-based animations
        switch (bubble.phase) {
          case 'growing':
            bubble.size = bubble.size + (bubble.targetSize - bubble.size) * 0.05;
            bubble.opacity = 0.2 + (0.4 - 0.2) * phaseRatio;
            if (phaseRatio >= 1) {
              bubble.phase = 'darkening';
              bubble.phaseProgress = 0;
              bubble.targetOpacity = 0.6;
            }
            break;
          case 'darkening':
            bubble.opacity = 0.4 + (0.6 - 0.4) * phaseRatio;
            if (phaseRatio >= 1) {
              bubble.phase = 'dissolving';
              bubble.phaseProgress = 0;
              bubble.targetSize = bubble.size * 1.5;
            }
            break;
          case 'dissolving':
            bubble.size = bubble.size + (bubble.targetSize - bubble.size) * 0.05;
            bubble.opacity = 0.6 * (1 - phaseRatio);
            if (phaseRatio >= 1) {
              // Reset bubble
              bubble.phase = 'growing';
              bubble.phaseProgress = 0;
              bubble.size = Math.random() * 15 + 5;
              bubble.targetSize = bubble.size * 2;
              bubble.opacity = 0.2;
              bubble.x = Math.random() * 100;
              bubble.y = Math.random() * 100;
              bubble.speedX = (Math.random() - 0.5) * 0.3;
              bubble.speedY = (Math.random() - 0.5) * 0.3;
            }
            break;
        }

        // Apply changes
        bubble.element.style.left = `${bubble.x}%`;
        bubble.element.style.top = `${bubble.y}%`;
        bubble.element.style.width = `${bubble.size}px`;
        bubble.element.style.height = `${bubble.size}px`;
        bubble.element.style.opacity = bubble.opacity;
        bubble.element.style.background = `rgba(255, 255, 255, ${bubble.opacity * 0.5})`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate(performance.now());

    return () => {
      cancelAnimationFrame(animationFrame);
      bubbles.forEach(bubble => bubble.element.remove());
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflow="hidden"
      pointerEvents="none"
      zIndex={0}
    />
  );
}

export default BackgroundBubbles; 