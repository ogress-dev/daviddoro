import React, { useEffect, useRef } from 'react';
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
  const previousSlideToTopRef = useRef(slideToTop);

  useEffect(() => {
    if (slideToTop && !previousSlideToTopRef.current) {
      const start = rotation.get();
      controls.start({
        rotate: start + 360,
        transition: getTransition(spinDuration, start)
      });
    } else if (!slideToTop && previousSlideToTopRef.current) {
      controls.stop();
    }
    previousSlideToTopRef.current = slideToTop;
  }, [slideToTop, spinDuration, controls, rotation]);

  return (
    <motion.div
      className={`circular-text ${className}`}
      animate={{
        left: slideToTop ? '50%' : 'auto',
        right: slideToTop ? 'auto' : '0.5rem',
        bottom: slideToTop ? 'auto' : '0.5rem',
        top: slideToTop ? '2rem' : 'auto',
        width: slideToTop ? 380 : 470,
        height: slideToTop ? 380 : 470,
        x: slideToTop ? '-50%' : '20%',
        y: slideToTop ? '0%' : '30%',
      }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      style={{
        rotate: rotation,
        position: 'fixed',
        zIndex: 1,
        pointerEvents: 'auto',
        overflow: 'hidden',
      }}
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
