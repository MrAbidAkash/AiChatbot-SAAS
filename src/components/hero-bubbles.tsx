"use client";

import { useEffect, useRef, useCallback } from "react";

export interface HeroBubblesConfig {
  /** Number of bubbles to render */
  bubbleCount?: number;
  /** Minimum bubble radius in pixels */
  minRadius?: number;
  /** Maximum bubble radius in pixels */
  maxRadius?: number;
  /** Base movement speed multiplier (0.1 = slow, 1 = normal, 2 = fast) */
  speed?: number;
  /** Enable mouse interaction effects */
  mouseInteraction?: boolean;
  /** Mouse influence radius in pixels */
  mouseRadius?: number;
  /** Color theme: 'teal' | 'pink' | 'purple' | 'mixed' */
  colorTheme?: "teal" | "pink" | "purple" | "mixed";
  /** Overall opacity multiplier (0-1) */
  opacity?: number;
  /** Enable glow effect on bubbles */
  enableGlow?: boolean;
  /** Enable depth layers for parallax effect */
  enableDepth?: boolean;
  /** Enable connection lines between nearby bubbles */
  enableConnections?: boolean;
  /** Maximum distance for connection lines */
  connectionDistance?: number;
  /** Enable floating particles effect */
  enableParticles?: boolean;
  /** Number of floating particles */
  particleCount?: number;
  /** Enable mouse trail effect */
  enableMouseTrail?: boolean;
}

interface Bubble {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  opacity: number;
  targetOpacity: number;
  hue: "teal" | "pink" | "purple" | "mixed";
  phase: number;
  phaseSpeed: number;
  scaleX: number;
  scaleY: number;
  morphSpeed: number;
  morphPhase: number;
  depth: number; // 0-1, affects size, speed, and opacity
  pulsePhase: number;
  pulseSpeed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  hue: "teal" | "pink" | "purple";
  life: number;
  maxLife: number;
}

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  radius: number;
}

const defaultConfig: Required<HeroBubblesConfig> = {
  bubbleCount: 24,
  minRadius: 30,
  maxRadius: 180,
  speed: 1,
  mouseInteraction: true,
  mouseRadius: 200,
  colorTheme: "mixed",
  opacity: 1,
  enableGlow: true,
  enableDepth: true,
  enableConnections: true,
  connectionDistance: 180,
  enableParticles: true,
  particleCount: 40,
  enableMouseTrail: true,
};

export function HeroBubbles(props: HeroBubblesConfig = {}) {
  const config = { ...defaultConfig, ...props };
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const bubblesRef = useRef<Bubble[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const trailRef = useRef<TrailPoint[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false, prevX: -1000, prevY: -1000 });
  const timeRef = useRef(0);

  const getHueForTheme = useCallback((theme: string): Bubble["hue"] => {
    if (theme === "mixed") {
      const hues: Bubble["hue"][] = ["teal", "teal", "pink", "purple", "mixed"];
      return hues[Math.floor(Math.random() * hues.length)];
    }
    return theme as Bubble["hue"];
  }, []);

  const createBubble = useCallback((w: number, h: number): Bubble => {
    const depth = config.enableDepth ? Math.random() : 0.5;
    const depthFactor = 0.4 + depth * 0.6; // Maps depth to 0.4-1.0
    
    const baseRadius = config.minRadius + Math.random() * (config.maxRadius - config.minRadius);
    const radius = baseRadius * depthFactor;
    
    const speedFactor = config.speed * depthFactor * 0.4;
    const vx = (Math.random() - 0.5) * speedFactor;
    const vy = (Math.random() - 0.5) * speedFactor;
    
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      radius,
      baseRadius: radius,
      vx,
      vy,
      baseVx: vx,
      baseVy: vy,
      opacity: (0.03 + Math.random() * 0.12) * depthFactor,
      targetOpacity: (0.03 + Math.random() * 0.12) * depthFactor,
      hue: getHueForTheme(config.colorTheme),
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: (0.002 + Math.random() * 0.004) * config.speed,
      scaleX: 0.85 + Math.random() * 0.3,
      scaleY: 0.85 + Math.random() * 0.3,
      morphSpeed: (0.003 + Math.random() * 0.005) * config.speed,
      morphPhase: Math.random() * Math.PI * 2,
      depth,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    };
  }, [config, getHueForTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initBubbles = () => {
      const rect = canvas.getBoundingClientRect();
      bubblesRef.current = Array.from({ length: config.bubbleCount }, () => 
        createBubble(rect.width, rect.height)
      );
      // Sort by depth for proper layering
      bubblesRef.current.sort((a, b) => a.depth - b.depth);
    };

    const createParticle = (w: number, h: number, fromMouse = false): Particle => {
      const hues: Array<"teal" | "pink" | "purple"> = ["teal", "pink", "purple"];
      const x = fromMouse && mouseRef.current.active ? mouseRef.current.x : Math.random() * w;
      const y = fromMouse && mouseRef.current.active ? mouseRef.current.y : Math.random() * h;
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.8 * config.speed,
        vy: (Math.random() - 0.5) * 0.8 * config.speed - (fromMouse ? 0.5 : 0),
        radius: 1 + Math.random() * 2.5,
        opacity: 0.2 + Math.random() * 0.4,
        hue: hues[Math.floor(Math.random() * hues.length)],
        life: 0,
        maxLife: fromMouse ? 60 + Math.random() * 40 : 200 + Math.random() * 200,
      };
    };

    const initParticles = () => {
      if (config.enableParticles) {
        const rect = canvas.getBoundingClientRect();
        particlesRef.current = Array.from({ length: config.particleCount }, () => 
          createParticle(rect.width, rect.height)
        );
      }
    };

    const getParticleColor = (hue: "teal" | "pink" | "purple", alpha: number): string => {
      const a = alpha * config.opacity;
      switch (hue) {
        case "teal": return `rgba(45, 212, 191, ${a})`;
        case "pink": return `rgba(236, 72, 153, ${a})`;
        case "purple": return `rgba(168, 85, 247, ${a})`;
      }
    };

    const getGradient = (bubble: Bubble, alpha: number): CanvasGradient => {
      const grad = ctx.createRadialGradient(
        bubble.x, bubble.y, 0,
        bubble.x, bubble.y, bubble.radius
      );

      const a = alpha * config.opacity;

      switch (bubble.hue) {
        case "teal":
          grad.addColorStop(0, `rgba(45, 212, 191, ${a * 0.95})`);
          grad.addColorStop(0.3, `rgba(20, 184, 166, ${a * 0.7})`);
          grad.addColorStop(0.6, `rgba(13, 148, 136, ${a * 0.4})`);
          grad.addColorStop(1, `rgba(15, 118, 110, 0)`);
          break;
        case "pink":
          grad.addColorStop(0, `rgba(236, 72, 153, ${a * 0.95})`);
          grad.addColorStop(0.3, `rgba(219, 39, 119, ${a * 0.7})`);
          grad.addColorStop(0.6, `rgba(190, 24, 93, ${a * 0.4})`);
          grad.addColorStop(1, `rgba(157, 23, 77, 0)`);
          break;
        case "purple":
          grad.addColorStop(0, `rgba(168, 85, 247, ${a * 0.95})`);
          grad.addColorStop(0.3, `rgba(147, 51, 234, ${a * 0.7})`);
          grad.addColorStop(0.6, `rgba(126, 34, 206, ${a * 0.4})`);
          grad.addColorStop(1, `rgba(107, 33, 168, 0)`);
          break;
        case "mixed":
        default:
          grad.addColorStop(0, `rgba(45, 212, 191, ${a * 0.9})`);
          grad.addColorStop(0.35, `rgba(139, 92, 246, ${a * 0.5})`);
          grad.addColorStop(0.7, `rgba(236, 72, 153, ${a * 0.25})`);
          grad.addColorStop(1, `rgba(190, 24, 93, 0)`);
      }
      return grad;
    };

    const getHighlightColor = (hue: Bubble["hue"], alpha: number): string => {
      const a = alpha * config.opacity;
      switch (hue) {
        case "teal": return `rgba(153, 246, 228, ${a})`;
        case "pink": return `rgba(251, 207, 232, ${a})`;
        case "purple": return `rgba(221, 214, 254, ${a})`;
        case "mixed": return `rgba(196, 181, 253, ${a})`;
      }
    };

    const drawConnections = () => {
      if (!config.enableConnections) return;
      
      const bubbles = bubblesRef.current;
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];
          const dx = b1.x - b2.x;
          const dy = b1.y - b2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < config.connectionDistance) {
            const opacity = (1 - dist / config.connectionDistance) * 0.15 * config.opacity;
            const gradient = ctx.createLinearGradient(b1.x, b1.y, b2.x, b2.y);
            gradient.addColorStop(0, getHighlightColor(b1.hue, opacity * b1.opacity));
            gradient.addColorStop(1, getHighlightColor(b2.hue, opacity * b2.opacity));
            
            ctx.beginPath();
            ctx.moveTo(b1.x, b1.y);
            ctx.lineTo(b2.x, b2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.restore();
    };

    const drawParticles = () => {
      if (!config.enableParticles) return;
      
      const rect = canvas.getBoundingClientRect();
      
      particlesRef.current = particlesRef.current.filter(p => {
        p.life++;
        if (p.life > p.maxLife) return false;
        
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.002; // Slight downward drift
        
        // Wrap around
        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;
        
        return true;
      });
      
      // Add new particles to maintain count
      while (particlesRef.current.length < config.particleCount) {
        particlesRef.current.push(createParticle(rect.width, rect.height));
      }
      
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      
      particlesRef.current.forEach(p => {
        const lifeRatio = p.life / p.maxLife;
        const fadeIn = Math.min(lifeRatio * 5, 1);
        const fadeOut = Math.max(1 - (lifeRatio - 0.7) / 0.3, 0);
        const currentOpacity = p.opacity * fadeIn * fadeOut;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = getParticleColor(p.hue, currentOpacity);
        ctx.fill();
      });
      
      ctx.restore();
    };

    const drawMouseTrail = () => {
      if (!config.enableMouseTrail || !mouseRef.current.active) return;
      
      // Add new trail point
      if (mouseRef.current.prevX !== mouseRef.current.x || mouseRef.current.prevY !== mouseRef.current.y) {
        trailRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          opacity: 0.6,
          radius: 4,
        });
        mouseRef.current.prevX = mouseRef.current.x;
        mouseRef.current.prevY = mouseRef.current.y;
      }
      
      // Limit trail length
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
      }
      
      // Update and draw trail
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      
      trailRef.current = trailRef.current.filter((point, index) => {
        point.opacity *= 0.92;
        point.radius *= 0.96;
        
        if (point.opacity < 0.02) return false;
        
        const progress = index / trailRef.current.length;
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius * 3
        );
        gradient.addColorStop(0, `rgba(45, 212, 191, ${point.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${point.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(236, 72, 153, 0)`);
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        return true;
      });
      
      ctx.restore();
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      
      timeRef.current += 0.016; // Approximate 60fps time step

      ctx.clearRect(0, 0, w, h);

      // Draw connection lines first (behind everything)
      drawConnections();
      
      // Draw particles in the background
      drawParticles();
      
      // Draw mouse trail
      drawMouseTrail();

      bubblesRef.current.forEach((b) => {
        // Smooth opacity transitions
        const opacityDelta = (b.targetOpacity - b.opacity) * 0.02;
        b.opacity += opacityDelta;
        
        // Pulse opacity
        b.pulsePhase += b.pulseSpeed;
        const pulseFactor = 1 + Math.sin(b.pulsePhase) * 0.15;
        const currentOpacity = b.opacity * pulseFactor;

        // Change target opacity occasionally
        if (Math.random() < 0.002) {
          b.targetOpacity = (0.03 + Math.random() * 0.12) * (0.4 + b.depth * 0.6);
        }

        // Mouse interaction
        if (config.mouseInteraction && mouseRef.current.active) {
          const dx = mouseRef.current.x - b.x;
          const dy = mouseRef.current.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < config.mouseRadius) {
            const force = (1 - dist / config.mouseRadius) * 0.8;
            const angle = Math.atan2(dy, dx);
            // Push bubbles away from mouse
            b.vx -= Math.cos(angle) * force * 0.5;
            b.vy -= Math.sin(angle) * force * 0.5;
            // Slightly expand bubbles near mouse
            b.radius = b.baseRadius * (1 + force * 0.3);
          } else {
            // Gradually return to base values
            b.vx += (b.baseVx - b.vx) * 0.02;
            b.vy += (b.baseVy - b.vy) * 0.02;
            b.radius += (b.baseRadius - b.radius) * 0.05;
          }
        } else {
          b.vx += (b.baseVx - b.vx) * 0.02;
          b.vy += (b.baseVy - b.vy) * 0.02;
          b.radius += (b.baseRadius - b.radius) * 0.05;
        }

        // Apply velocity with damping
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.995;
        b.vy *= 0.995;

        // Organic sinusoidal drift
        b.phase += b.phaseSpeed;
        b.x += Math.sin(b.phase) * 0.15 * config.speed;
        b.y += Math.cos(b.phase * 0.7) * 0.1 * config.speed;

        // Morph shape over time
        b.morphPhase += b.morphSpeed;
        const morphFactor = 0.1;
        const sx = b.scaleX + Math.sin(b.morphPhase) * morphFactor;
        const sy = b.scaleY + Math.cos(b.morphPhase * 1.3) * morphFactor;

        // Wrap around edges with margin
        const margin = b.radius * 2;
        if (b.x < -margin) b.x = w + margin;
        if (b.x > w + margin) b.x = -margin;
        if (b.y < -margin) b.y = h + margin;
        if (b.y > h + margin) b.y = -margin;

        // Draw glow layer first (if enabled)
        if (config.enableGlow) {
          ctx.save();
          ctx.globalCompositeOperation = "screen";
          ctx.beginPath();
          const glowGrad = ctx.createRadialGradient(
            b.x, b.y, 0,
            b.x, b.y, b.radius * 1.5
          );
          const glowAlpha = currentOpacity * 0.3;
          glowGrad.addColorStop(0, getHighlightColor(b.hue, glowAlpha));
          glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.arc(b.x, b.y, b.radius * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = glowGrad;
          ctx.fill();
          ctx.restore();
        }

        // Draw morphed bubble
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.scale(sx, sy);
        ctx.translate(-b.x, -b.y);

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = getGradient(b, currentOpacity);
        ctx.fill();
        ctx.restore();

        // Inner highlight
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        const highlightRadius = b.radius * 0.25;
        const highlightX = b.x - b.radius * 0.2;
        const highlightY = b.y - b.radius * 0.2;
        
        const highlightGrad = ctx.createRadialGradient(
          highlightX, highlightY, 0,
          highlightX, highlightY, highlightRadius
        );
        const highlightAlpha = currentOpacity * 0.5;
        highlightGrad.addColorStop(0, getHighlightColor(b.hue, highlightAlpha));
        highlightGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.beginPath();
        ctx.arc(highlightX, highlightY, highlightRadius, 0, Math.PI * 2);
        ctx.fillStyle = highlightGrad;
        ctx.fill();
        ctx.restore();

        // Subtle edge ring
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius * 0.92, 0, Math.PI * 2);
        ctx.strokeStyle = getHighlightColor(b.hue, currentOpacity * 0.15);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      mouseRef.current = {
        ...mouseRef.current,
        x: newX,
        y: newY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    initBubbles();
    initParticles();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(canvas);

    if (config.mouseInteraction) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
      if (config.mouseInteraction) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [config, createBubble]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ touchAction: "none" }}
      aria-hidden="true"
    />
  );
}
