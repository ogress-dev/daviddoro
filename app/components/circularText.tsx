import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'motion/react';

import './CircularText.css';
interface CircularTextProps {
  text: string;
  spinDuration?: number;
  className?: string;
  slideToTop?: boolean;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  className = '',
  slideToTop = false
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, controls]);

  return (
    <motion.div
      className={`circular-text ${className}`}
      style={{
        rotate: rotation,
        position: 'fixed',
        right: slideToTop ? '50%' : '0.5rem',
        bottom: slideToTop ? 'auto' : '0.5rem',
        top: slideToTop ? '2rem' : 'auto',
        width: 470,
        height: 470,
        zIndex: 1,
        pointerEvents: 'auto',
        translateX: slideToTop ? '50%' : '20%',
        translateY: slideToTop ? '0%' : '30%',
        overflow: 'hidden',
        transition: 'all 0.7s ease-in-out'
      }}
      initial={{ rotate: 0 }}
      animate={controls}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
