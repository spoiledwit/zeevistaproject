import Hero from "@/components/BusinessSetup/hero";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { businessSetup } from "@/constants";
import Services from "@/components/home/services";
import Authorities from "@/components/home/authorities";
import Freezone from "@/components/home/freezone";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  setProgress: (progress: number) => void;
}
const BusinessSetup = ({ setProgress }: Props) => {
  const { id } = useParams();
  const data = businessSetup.find((item) => item.id === id);
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
  const [currentStep, setCurrentStep] = useState<number>(1);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [id]);

  return (
    <div className="flex flex-col gap-20 mb-40">
      <Hero
        title={data?.title || ""}
        description={data?.description || ""}
        imageURL={data?.imageURL || ""}
      />
      {id == "company-formation-mainland" && <Authorities />}
      {id == "company-formation-freezone" && <Freezone />}
      <div className="w-full px-4 md:px-16 lg:px-24 flex flex-col md:flex-row gap-5">
        <section className="md:w-[55%] flex flex-col gap-8 items-center md:items-start">
          <h3 className=" md:-translate-x-10 text-xl text-center md:text-start text-yellow-600 font-play md:text-3xl uppercase tracking-wide">
            {data?.slogan}
          </h3>
          <section
            className=" prose leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: data?.content || "",
            }}
          />
        </section>
        <div className="w-full md:w-[45%] sticky top-20 h-fit">
          <h1 className="text-yellow-600 text-lg md:text-2xl font-play font-medium mb-5 text-center">
            Calculate Your License Registration Cost
          </h1>
          <div className="w-full flex flex-col md:flex-row justify-center shadow">
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
                      className={`rounded-full shrink-0 w-8 h-8 flex items-center justify-center border ${
                        index + 1 === currentStep
                          ? "border-yellow-600"
                          : "border-white"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p
                      className={`${
                        index + 1 === currentStep ? "font-semibold" : ""
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
      {/* <h1 className="text-center text-2xl md:text-3xl font-semibold font-play text-yellow-600 mt-20  px-4 md:px-16 xl:px-32">
        Explore our Business Setup Services
      </h1>
      <div className="w-full px-4 md:px-16 xl:px-32 flex flex-wrap">
        {businessSetup.map((card) => (
          <Link
            to={`/business-setup/${card.id}`}
            key={card.id}
            className="w-full md:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-white shadow-lg rounded-xl p-4 h-full border">
              <h2 className="text-yellow-600 mb-5 text-center font-semibold font-play text-xl md:text-2xl tracking-wider">
                {card.title}
              </h2>
              <p className="text-center">{card.slogan}</p>
            </div>
          </Link>
        ))}
      </div> */}
      <Services setColor={() => {}} />
    </div>
  );
};

export default BusinessSetup;
