"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CostCalculator = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Step state
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
  const [loading, setLoading] = useState<boolean>(false);

  // Validation error state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

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

  // Validation function for each step
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

  const handleSubmit = async () => {
    if (validateStep()) {
      setLoading(true);
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
        onClose();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-4xl relative flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Sidebar Steps */}
            <div className="w-full md:w-1/3 bg-[#071e3c] text-white py-8 px-6">
              {/* Mobile: Show only the current step */}
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

              {/* Desktop: Show all steps */}
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

            {/* Form Section */}
            <div className="w-full md:w-2/3 bg-white py-8 px-6 flex-grow">
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
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CostCalculator;
