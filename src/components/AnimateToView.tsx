import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimateToView(props: any) {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {props.children}
    </motion.div>
  );
}

// variants={{
//   visible: { opacity: 1, y: 0 },
//   hidden: { opacity: 0, y: 48 },
// }}
// transition={{ duration: 1 }}
