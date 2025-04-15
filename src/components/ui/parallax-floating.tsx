import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface FloatingProps {
  children: React.ReactNode;
  sensitivity?: number;
  className?: string;
}

interface FloatingElementProps {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}

const Floating: React.FC<FloatingProps> = ({ 
  children, 
  sensitivity = 1,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = (mouseX - centerX) * sensitivity * 0.01;
      const deltaY = (mouseY - centerY) * sensitivity * 0.01;

      x.set(deltaX);
      y.set(deltaY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sensitivity, x, y]);

  return (
    <motion.div ref={ref} className={className}>
      {children}
    </motion.div>
  );
};

export const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  depth = 1,
  className = ""
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 200,
    damping: 20
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 200,
    damping: 20
  });

  return (
    <motion.div
      style={{
        x: useSpring(useTransform(x, v => v * depth), {
          stiffness: 200,
          damping: 20
        }),
        y: useSpring(useTransform(y, v => v * depth), {
          stiffness: 200,
          damping: 20
        }),
        rotateX,
        rotateY,
        position: 'absolute'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Floating;