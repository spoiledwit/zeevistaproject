import { useState, useEffect } from "react";
import Input from "../components/input/index";
import { createContact } from "../../lib/utils";
import Hero from "../components/Contact/Hero";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

interface Props {
  setProgress: (progress: number) => void;
}

const Contact = ({ setProgress }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [nationality, setNationality] = useState("");
  const [service, setService] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, []);

  const sendMessage = async () => {
    const res = await createContact(
      name,
      email,
      phone,
      jobTitle,
      nationality,
      service,
      text
    );
    if (res.success) {
      toast.success("Message Submitted successfully!");
      setPhone("");
      setNationality("");
      setPhone("");
      setEmail("");
      setText("");
      setName("");
      setJobTitle("");
      setService("");
    } else {
      toast.error("Please try again later!");
    }
  };

  return (
    <div className="min-h-screen pb-32 bg-white relative">
      <Helmet>
        <title>Contact Us | ZeeVista Business Advisors</title>
        <meta name="description" content="About Us" />
      </Helmet>
      <Hero />
      <div className="flex md:flex-row flex-col w-full pt-10 md:justify-between px-8 md:px-20">
        <div className="md:mb-0">
          <h2 className="md:text-[60px] text-[35px] leading-10 md:leading-[65px] font-serif font-medium">
            Get a Free
            <br />
            <span className="font-medium text-[40px] md:text-[70px] italic border-b-yellow-600 border-b-[5px]">
              Quote
            </span>
            <span className="text-yellow-600">.</span>
          </h2>
          <div className="mt-14 max-w-[400px] flex flex-col gap-4">
            <Input
              value={name}
              label="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Phone"
              value={phone}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              label="Job Title"
              value={jobTitle}
              type="text"
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <Input
              label="Nationality"
              value={nationality}
              type="text"
              onChange={(e) => setNationality(e.target.value)}
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="border-b-[2px] border-black/30  rounded-none shadow-none py-2 appearance-none text-gray-600 text-sm outline-none focus:border-yellow-600 ring-0 focus:delay-[99999] peer"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Business Setup Services">
         Business Setup Services
        </option>
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
              <option value="UAE visit Visa">UAE Visit Visa</option>
              <option value="Other Services">Other Services</option>
              <option value="Tax & Accounting Services">
                Tax & Accounting Services
              </option>
              <option value="Social Media Marketing Services">
                Social Media Marketing Services
              </option>
              <option value="Website Development">Website Development</option>
            </select>
            <Input
              label="Ask us anything..."
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
            />

            <button
              onClick={sendMessage}
              className="mt-4 max-w-[150px] min-w-[128px] text-white bg-neutral-800 hover:bg-neutral-700 h-10 transition-all"
            >
              Send
            </button>
          </div>
          <div></div>
        </div>
        <iframe
          className="md:w-[50vw] w-[85vw] mt-10 md:mt-40 shadow-2xl border hover:border-black rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.735670147676!2d55.263824374836155!3d25.178401677723095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69cb98cd9041%3A0xe6be587070e7a89d!2sDAMAC%20Executive%20Bay!5e0!3m2!1sen!2s!4v1696005211967!5m2!1sen!2s"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
