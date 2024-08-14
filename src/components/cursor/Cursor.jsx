import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './cursor.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.img
      src="../../../public/usdt.png" // Reemplaza con la ruta de tu imagen
      alt="Custom Cursor"
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
      transition={{ type: 'spring', stiffness: 800, damping: 30 }} // Mantén la configuración de la transición si la necesitas
    />
  );
};

export default Cursor;
