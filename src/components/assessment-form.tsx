import { useState } from "react";
import Input from "./input";
import Select from "./select";
import toast from "react-hot-toast";
// import { createAssessment } from "@/lib/assessment";

export type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  education: string;
  country: string;
  visaType: string;
};

const AssessmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [education, setEducation] = useState("");
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const props = {
      name,
      email,
      jobTitle,
      education,
      country,
      phone,
      visaType,
    };
    // const success = await createAssessment(props);
    const success = true;

    if (success) {
      toast.success("Application Recieved!");
    } else {
      toast.error("Unable to submit application.");
    }
  };

  const countries = [
    { label: "Pakistan", value: "pakistan" },
    { label: "India", value: "india" },
    { label: "Bangladesh", value: "bangladesh" },
  ];

  const visaTypes = [
    { label: "Study Visa", value: "study-visa" },
    { label: "Work Visa", value: "work-visa" },
    {
      label: "Visit Visa",
      value: "visit-visa",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
      <Input label="Name" onChange={(e) => setName(e.target.value)} />
      <Input label="Phone" onChange={(e) => setPhone(e.target.value)} />
      <Input
        label="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input label="Job Title" onChange={(e) => setJobTitle(e.target.value)} />
      <Input label="Education" onChange={(e) => setEducation(e.target.value)} />
      <Select
        defaultLabel="Select a Country"
        onChange={(e) => setCountry(e.target.value)}
        options={countries}
      />
      <Select
        defaultLabel="Select a Visa Type"
        onChange={(e) => setVisaType(e.target.value)}
        options={visaTypes}
      />
      <button
        type="submit"
        className="mt-4 rounded-lg h-12 px-6 text-gray-500 hover:text-primary text-lg bg-transparent border-2 border-gray-500 hover:border-primary transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default AssessmentForm;
