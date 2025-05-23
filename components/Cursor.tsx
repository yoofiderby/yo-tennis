'use client';

import { useRef, useEffect } from 'react';
// import '@styles/cursor.css';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    key: -1,
  });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      
      // Update dot position immediately
      if (dot) {
        dot.style.left = `${clientX}px`;
        dot.style.top = `${clientY}px`;
      }
      
      // Set the target for the outer circle
      positionRef.current.mouseX = clientX;
      positionRef.current.mouseY = clientY;
    };

    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      
      // Calculate new position for outer circle
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
      } = positionRef.current;
      
      // Smooth interpolation of position for outer circle
      positionRef.current.destinationX += (mouseX - destinationX) * 0.15;
      positionRef.current.destinationY += (mouseY - destinationY) * 0.15;
      
      // Apply the position to outer circle
      if (cursor) {
        cursor.style.left = `${positionRef.current.destinationX}px`;
        cursor.style.top = `${positionRef.current.destinationY}px`;
      }
    };

    // Handle click animation
    const clickHandler = () => {
      cursor.classList.add('expand');
      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    };

    // Handle link hover effects
    const anchors = document.querySelectorAll('a');
    anchors.forEach((anchor) => {
      anchor.addEventListener('mouseenter', () => {
        cursor.classList.add('expand');
      });
      anchor.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand');
      });
    });

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('click', clickHandler);
    positionRef.current.key = requestAnimationFrame(followMouse);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('click', clickHandler);
      cancelAnimationFrame(positionRef.current.key);
      anchors.forEach((anchor) => {
        anchor.removeEventListener('mouseenter', () => {});
        anchor.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="dot" ref={dotRef} />
    </>
  );
} 