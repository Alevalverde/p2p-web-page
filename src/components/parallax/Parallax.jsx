import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '700%']);
  const yStar = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const ySun = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const xSun = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText, position: 'absolute', top: '5%' }}>Queremos hacerlo simple para vos</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="sun"
        style={{
          y: ySun,
          x: xSun,
        }}
      ></motion.div>
      <motion.div style={{ x: yStar }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
