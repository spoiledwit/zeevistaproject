import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AssessmentForm from "../assessment-form";

const Contact = () => {
  const controls = useAnimation();


  const controlsForm = useAnimation();
  const { ref: refForm, inView: inViewForm } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref, inView } = useInView({
    triggerOnce: false, // Keep tracking the element's position
    threshold: 0.1, // Adjust the threshold to your needs
  });

  if (inView) {
    controls.start("visible");
  }

  if (inViewForm) {
    controlsForm.start("visible");
  }

  return (
    <motion.div
      className="w-full md:px-20 px-8 items-center flex flex-col gap-8 md:gap-20 max-w-[1500px] lg:gap-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={ref}
      transition={{ duration: 1 }}
    >
      <div className="md:mt-10 flex md:flex-row flex-col justify-between w-full">
        <motion.div
          ref={refForm}
          animate={controlsForm}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          transition={{ duration: 1 }}
          className="border border-white md:text-xl rounded-xl bg-gray-50 lg:w-[700px] flex flex-col justify-center items-start md:px-12 px-6 py-7 md:py-10"
        >
          <div className="flex">
            <motion.p
              className=" text-black ml-3 mb-4 font-play font-medium"
              animate={{ scale: 1.2 }}
              transition={{ duration: 1 }}
            >
              Contact Us
            </motion.p>
          </div>
          <AssessmentForm />
        </motion.div>
        <iframe 
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.735670147676!2d55.263824374836155!3d25.178401677723095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69cb98cd9041%3A0xe6be587070e7a89d!2sDAMAC%20Executive%20Bay!5e0!3m2!1sen!2s!4v1696005211967!5m2!1sen!2s"
       className="md:w-[530px] mt-6 md:mt-0 rounded-xl border hover:border-black" height="530" loading="lazy"></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
