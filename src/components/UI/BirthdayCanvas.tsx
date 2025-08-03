import React, { useEffect, useRef } from 'react';

const BirthdayCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple birthday celebration animation placeholder
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FF6B6B';
    ctx.font = '20px Arial';
    ctx.fillText('🎉 Happy Birthday! 🎉', 50, 100);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      style={{ border: '1px solid #ccc' }}
    />
  );
};

export default BirthdayCanvas;
