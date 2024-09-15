import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Input from "../input";
import Button from "../Button";

const Contact = () => {
  const controls = useAnimation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Individual field states
  const [businessActivity, setBusinessActivity] = useState<string>("");
  const [jurisdiction, setJurisdiction] = useState<string>("");
  const [owners, setOwners] = useState<string>("");
  const [visa, setVisa] = useState<string>("");
  const [officeSpace, setOfficeSpace] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  });
  const [loading2, setLoading2] = useState(false);

  // Validation error state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const resetForm = () => {
    setCurrentStep(1);
    setBusinessActivity("");
    setJurisdiction("");
    setOwners("");
    setVisa("");
    setOfficeSpace("");
    setBusinessName("");
    setContactDetails({
      name: "",
      email: "",
      phone: "",
      nationality: "",
      message: "",
    });
    setErrors({});
  };
  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1 && !businessActivity) {
      newErrors.businessActivity = "Business Activity is required";
    }
    if (currentStep === 2 && !jurisdiction) {
      newErrors.jurisdiction = "Jurisdiction is required";
    }
    if (currentStep === 3 && !owners) {
      newErrors.owners = "Ownership information is required";
    }
    if (currentStep === 4 && !visa) {
      newErrors.visa = "Visa information is required";
    }
    if (currentStep === 5 && !officeSpace) {
      newErrors.officeSpace = "Office space information is required";
    }
    if (currentStep === 6 && !businessName) {
      newErrors.businessName = "Business name is required";
    }
    if (currentStep === 7) {
      const { name, email, phone, nationality, message } = contactDetails;
      if (!name) newErrors.name = "Name is required";
      if (!email) newErrors.email = "Email is required";
      if (!phone) newErrors.phone = "Phone is required";
      if (!nationality) newErrors.nationality = "Nationality is required";
      if (!message) newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // If there are no errors, return true (valid step)
    return Object.keys(newErrors).length === 0;
  };

  // Navigation functions
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleCostCalulatorSubmit = async () => {
    if (validateStep()) {
      setLoading2(true);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/costCalculator`,
          {
            businessActivity,
            jurisdiction,
            owners,
            visa,
            officeSpace,
            businessName,
            contactDetails,
          }
        );
        toast.success(response.data.message || "Form submitted successfully");
        resetForm();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading2(false);
      }
    }
  };

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !email || !phone || !subject || !message) {
      toast.error("Please fill all the fields!");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/quote`, {
        name,
        email,
        phone,
        subject,
        message,
      });
      toast.success("Message Submitted successfully!");
      setPhone("");
      setEmail("");
      setMessage("");
      setName("");
      setSubject("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full md:px-20 px-8 items-center flex flex-col gap-8 md:gap-20 max-w-[1500px] lg:gap-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={ref}
      transition={{ duration: 1 }}
    >
      <div className="md:mt-10 flex md:flex-row flex-col justify-between w-full gap-10">
        <motion.div
          ref={refForm}
          animate={controlsForm}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          transition={{ duration: 1 }}
          className="border border-white md:text-xl rounded-xl bg-gray-50 md:w-1/2 w-full flex flex-col justify-center items-start md:px-12 px-6 py-7 md:py-10"
        >
          <div className="flex">
            <motion.p
              className=" text-black ml-3 mb-4 font-play font-medium"
              animate={{ scale: 1.2 }}
              transition={{ duration: 1 }}
            >
              Get a Quote
            </motion.p>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              value={subject}
              label="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-b-[2px] border-black/30  rounded-none shadow-none py-2 appearance-none text-gray-600 text-sm outline-none focus:border-yellow-600 ring-0 focus:delay-[99999] peer"
              placeholder="Message"
            ></textarea>
            {loading ? (
              <Button text="Loading..." onClick={() => {}} />
            ) : (
              <Button text="Submit" onClick={() => handleSubmit} />
            )}
          </form>
        </motion.div>
        <div className="w-full md:w-1/2">
          <div className="w-full flex flex-col md:flex-row justify-center">
            <div className="w-full md:w-1/3 bg-[#071e3c] text-white py-8 px-6 space-y-6">
              <div className="md:hidden">
                <div className="flex items-center space-x-4 text-yellow-600">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center border border-yellow-600">
                    {currentStep}
                  </div>
                  <p className="text-lg font-bold">
                    {
                      [
                        "Business Activity",
                        "Jurisdiction",
                        "Owners",
                        "Visa",
                        "Office Space",
                        "Business Name",
                        "Contact Details",
                      ][currentStep - 1]
                    }
                  </p>
                </div>
              </div>
              <div className="hidden md:block space-y-6">
                {[
                  "Business Activity",
                  "Jurisdiction",
                  "Owners",
                  "Visa",
                  "Office Space",
                  "Business Name",
                  "Contact Details",
                ].map((title, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 ${
                      index + 1 === currentStep
                        ? "text-yellow-600"
                        : "text-white opacity-75"
                    }`}
                  >
                    <div
                      className={`rounded-full w-8 h-8 flex items-center justify-center border ${
                        index + 1 === currentStep
                          ? "border-yellow-600"
                          : "border-white"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p
                      className={`text-lg ${
                        index + 1 === currentStep ? "font-bold" : ""
                      }`}
                    >
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-white py-8 px-6">
              {currentStep === 1 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Business Activity
                  </h2>
                  <select
                    name="businessActivity"
                    value={businessActivity}
                    onChange={(e) => setBusinessActivity(e.target.value)}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg appearance-none"
                    aria-label="Business Activity"
                  >
                    <option value="">Select a business activity</option>
                    {[
                      "Advertising",
                      "Architecture",
                      "Business Consultancy",
                      "Design Services",
                      "E-Commerce",
                      "Event Management",
                      "Fashion Design Consultancy",
                      "Food & Beverage Trading",
                      "General Trading",
                      "Human Resources Consultancy",
                      "Interior Design",
                      "IT Consultancy",
                      "Lifestyle Consultancy",
                      "Management Consultancy",
                      "Marketing Services",
                      "Media Services",
                      "Online Education",
                      "Other",
                    ].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.businessActivity && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.businessActivity}
                    </p>
                  )}
                </>
              )}

              {currentStep === 2 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Jurisdiction
                  </h2>
                  {["Dubai Mainland", "Freezone", "Not Sure"].map((option) => (
                    <label key={option} className="block mt-2">
                      <input
                        type="radio"
                        name="jurisdiction"
                        value={option}
                        checked={jurisdiction === option}
                        onChange={(e) => setJurisdiction(e.target.value)}
                        className="mr-2"
                        aria-label={option}
                      />
                      {option}
                    </label>
                  ))}
                  {errors.jurisdiction && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.jurisdiction}
                    </p>
                  )}
                </>
              )}

              {currentStep === 3 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Owners
                  </h2>
                  {["Single", "Multiple", "Not Sure"].map((option) => (
                    <label key={option} className="block mt-2">
                      <input
                        type="radio"
                        name="owners"
                        value={option}
                        checked={owners === option}
                        onChange={(e) => setOwners(e.target.value)}
                        className="mr-2"
                        aria-label={option}
                      />
                      {option}
                    </label>
                  ))}
                  {errors.owners && (
                    <p className="text-red-500 text-sm mt-2">{errors.owners}</p>
                  )}
                </>
              )}

              {currentStep === 4 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Visa
                  </h2>
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="block mt-2">
                      <input
                        type="radio"
                        name="visa"
                        value={option}
                        checked={visa === option}
                        onChange={(e) => setVisa(e.target.value)}
                        className="mr-2"
                        aria-label={option}
                      />
                      {option}
                    </label>
                  ))}
                  {errors.visa && (
                    <p className="text-red-500 text-sm mt-2">{errors.visa}</p>
                  )}
                </>
              )}

              {currentStep === 5 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Office Space
                  </h2>
                  {["Yes", "No", "Not Sure"].map((option) => (
                    <label key={option} className="block mt-2">
                      <input
                        type="radio"
                        name="officeSpace"
                        value={option}
                        checked={officeSpace === option}
                        onChange={(e) => setOfficeSpace(e.target.value)}
                        className="mr-2"
                        aria-label={option}
                      />
                      {option}
                    </label>
                  ))}
                  {errors.officeSpace && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.officeSpace}
                    </p>
                  )}
                </>
              )}

              {currentStep === 6 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Business Name
                  </h2>
                  <input
                    type="text"
                    name="businessName"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter business name"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                    aria-label="Business Name"
                  />
                  {errors.businessName && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.businessName}
                    </p>
                  )}
                </>
              )}

              {currentStep === 7 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Contact Details
                  </h2>
                  <input
                    type="text"
                    name="name"
                    value={contactDetails.name}
                    onChange={(e) =>
                      setContactDetails((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Name"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                    aria-label="Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                  )}
                  <input
                    type="email"
                    name="email"
                    value={contactDetails.email}
                    onChange={(e) =>
                      setContactDetails((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="Email"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                    aria-label="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                  <input
                    type="text"
                    name="phone"
                    value={contactDetails.phone}
                    onChange={(e) =>
                      setContactDetails((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder="Phone"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                    aria-label="Phone"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                  )}
                  <input
                    type="text"
                    name="nationality"
                    value={contactDetails.nationality}
                    onChange={(e) =>
                      setContactDetails((prev) => ({
                        ...prev,
                        nationality: e.target.value,
                      }))
                    }
                    placeholder="Nationality"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                    aria-label="Nationality"
                  />
                  {errors.nationality && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.nationality}
                    </p>
                  )}
                  <textarea
                    name="message"
                    value={contactDetails.message}
                    onChange={(e) =>
                      setContactDetails((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Message"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                    aria-label="Message"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-5">
                {currentStep > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                  >
                    Previous
                  </button>
                )}

                {currentStep < 7 ? (
                  <button
                    onClick={handleNext}
                    className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleCostCalulatorSubmit}
                    disabled={loading2}
                    className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    {loading2 ? "Submitting..." : "Submit"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
