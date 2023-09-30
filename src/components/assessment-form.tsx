import { useState } from "react";
import Input from "./input";
import toast from "react-hot-toast";
import { createContact } from "../../lib/utils";
import Button from "./Button";

export type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  education: string;
  nationality: string;
  visaType: string;
};

const AssessmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [education, setEducation] = useState("");
  const [nationality, setNationality] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await createContact(
      name,
      email,
      phone,
      jobTitle,
      education,
      nationality,
      text
    );
    if (res.success) {
      toast.success("Message Submitted successfully!");
      setPhone("");
      setNationality("");
      setPhone("");
      setEmail("");
      setText("");
      setEducation("");
      setName("");
      setJobTitle("");
    }
    else {
      toast.error("Please try again later!")
    }

  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
      <Input label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Input
        label="Email Address"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input value={jobTitle} label="Job Title" onChange={(e) => setJobTitle(e.target.value)} />
      <Input
        label="Nationality"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
      />
      <Input
        label="Education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <Input
        label="Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        text="Submit"
        onClick={() => { handleSubmit }}
      />
    </form>
  );
};

export default AssessmentForm;
