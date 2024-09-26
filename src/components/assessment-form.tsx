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
  nationality: string;
  service: string;
  visaType: string;
};

const AssessmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [nationality, setNationality] = useState("");
  const [education, setEducation] = useState("");
  const [service, setService] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await createContact(
      name,
      email,
      phone,
      jobTitle,
      nationality,
      service,
      education,
      text
    );
    console.log(res);
    if (res.success) {
      toast.success("Message Submitted successfully!");
      setPhone("");
      setNationality("");
      setPhone("");
      setEmail("");
      setText("");
      setName("");
      setJobTitle("");
      setEducation("");
      setService("");
    } else {
      toast.error("Please try again later!");
    }
  };

  return (
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
        value={jobTitle}
        label="Current Job Title"
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <Input
        label="Education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <Input
        label="Nationality"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
      />
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="border-b-[2px] border-black/30  rounded-none shadow-none py-2 appearance-none text-gray-600 text-sm outline-none focus:border-yellow-600 ring-0 focus:delay-[99999] peer"
      >
        <option value="">Select a service</option>
        <option value="Business Setup Services">Business Setup Services</option>
        <option value="Global immigration Services">
          Global Immigration Services
        </option>
        <option value="PRO Services">PRO Services</option>
        <option value="Banking Services">Banking Services</option>
        <option value="UAE Golden Visa Services">
          UAE Golden Visa Services
        </option>
        <option value="I Need UAE Residence Visa only">
          I Need UAE Residence Visa only
        </option>
        <option value="UAE visit Visa">UAE visit Visa</option>
        <option value="Other Services">Other Services</option>
        <option value="Tax & Accounting Services">
          Tax & Accounting Services
        </option>
        <option value="Social media Marketing Services">
          Social Media Marketing Services
        </option>
        <option value="Website Development">Website Development</option>
      </select>
      <Input
        label="Write Your Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button text="Submit" onClick={() => handleSubmit} />
    </form>
  );
};

export default AssessmentForm;
