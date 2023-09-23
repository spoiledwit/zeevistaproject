import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimateToView(props: any) {
  const { ref, inView } = useInView({
    threshold: 0.4,
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