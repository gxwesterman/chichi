"use client"

import React from 'react';

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState<{x: number, y: number}>({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;