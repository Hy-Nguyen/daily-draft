import { motion } from 'framer-motion';

export default function FixturesBody() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
          mass: 1,
          duration: 0.5,
        },
      }}
    >
      Fixtures
    </motion.div>
  );
}
