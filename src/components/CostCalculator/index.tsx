"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Define the steps as an array of objects with proper types
interface Step {
  id: number;
  title: string;
  inputType: string;
  placeholder: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Business Activity",
    inputType: "text",
    placeholder: "Select a business activity",
  },
  {
    id: 2,
    title: "Jurisdiction",
    inputType: "text",
    placeholder: "Select Jurisdiction",
  },
  {
    id: 3,
    title: "Owners",
    inputType: "number",
    placeholder: "Enter number of owners",
  },
  { id: 4, title: "Visa", inputType: "text", placeholder: "Visa requirements" },
  {
    id: 5,
    title: "Office Space",
    inputType: "text",
    placeholder: "Enter office space requirements",
  },
  {
    id: 6,
    title: "Business Name",
    inputType: "text",
    placeholder: "Enter business name",
  },
  {
    id: 7,
    title: "Contact Details",
    inputType: "text",
    placeholder: "Enter contact details",
  },
];

// Define form data type
interface FormData {
  businessActivity: string;
  jurisdiction: string;
  owners: string;
  visa: string;
  officeSpace: string;
  businessName: string;
  contactDetails: string;
}

const initialFormData: FormData = {
  businessActivity: "",
  jurisdiction: "",
  owners: "",
  visa: "",
  officeSpace: "",
  businessName: "",
  contactDetails: "",
};

const CostCalculator = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // State for tracking the current step and form data
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // State for managing validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Reset form data and step when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0); // Reset to first step
      setFormData(initialFormData); // Clear form data
      setErrors({}); // Clear any errors
    }
  }, [isOpen]);

  const handleNext = () => {
    // Validate current step before proceeding
    const currentField = steps[currentStep].title
      .replace(" ", "")
      .toLowerCase();

    if (!formData[currentField as keyof FormData]) {
      // If the field is empty, set an error message
      setErrors({
        ...errors,
        [currentField]: `${steps[currentStep].title} is required`,
      });
    } else {
      // If valid, clear the error and go to the next step
      setErrors({ ...errors, [currentField]: "" });
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Validate the last step
    const currentField = steps[currentStep].title
      .replace(" ", "")
      .toLowerCase();
    if (!formData[currentField as keyof FormData]) {
      setErrors({
        ...errors,
        [currentField]: `${steps[currentStep].title} is required`,
      });
    } else {
      // Ensure all fields are filled before submitting
      const emptyFields = Object.keys(formData).filter(
        (key) => formData[key as keyof FormData] === ""
      );

      if (emptyFields.length === 0) {
        // On submit, print the form data to the console
        console.log("Form Data Submitted: ", formData);
        onClose(); // Close the modal
      } else {
        // Show error messages for the missing fields
        const newErrors: { [key: string]: string } = {};
        emptyFields.forEach((field) => {
          newErrors[field] = `${field.replace(
            /([a-z])([A-Z])/g,
            "$1 $2"
          )} is required`;
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear the error as the user types
    setErrors({ ...errors, [name]: "" });
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
            className="bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-4xl relative flex overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={onClose}
            >
              <X size={24} />
            </button>

            {/* Sidebar Steps */}
            <div className="w-1/3 bg-[#071e3c] text-white py-8 px-6 space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-4 ${
                    index === currentStep
                      ? "text-yellow-600"
                      : "text-white opacity-75"
                  }`}
                >
                  <div
                    className={`rounded-full w-8 h-8 flex items-center justify-center border ${
                      index === currentStep
                        ? "border-yellow-600"
                        : "border-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p
                      className={`text-lg ${
                        index === currentStep ? "font-bold" : ""
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Section */}
            <div className="w-2/3 bg-white py-8 px-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {steps[currentStep].title}
                </h2>
                <input
                  type={steps[currentStep].inputType}
                  name={steps[currentStep].title.replace(" ", "").toLowerCase()}
                  value={
                    formData[
                      steps[currentStep].title
                        .replace(" ", "")
                        .toLowerCase() as keyof FormData
                    ] || ""
                  }
                  onChange={handleChange}
                  placeholder={steps[currentStep].placeholder}
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:border-yellow-600"
                />
                {/* Display validation error if any */}
                {errors[
                  steps[currentStep].title.replace(" ", "").toLowerCase()
                ] && (
                  <p className="text-red-500 text-sm mt-2">
                    {
                      errors[
                        steps[currentStep].title.replace(" ", "").toLowerCase()
                      ]
                    }
                  </p>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                {currentStep > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                  >
                    Previous
                  </button>
                )}

                {currentStep < steps.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Submit
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
