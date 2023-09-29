import { useState, useEffect } from "react"
import Input from "../components/input/index";
import { createContact } from "../../lib/utils";
import Hero from "../components/Contact/Hero";
import { toast } from "react-hot-toast";

interface Props {
  setProgress: (progress: number) => void;
}

const Contact = ({ setProgress }: Props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [education, setEducation] = useState("");
  const [nationality, setNationality] = useState("");
  const [text, setText] = useState("");


  useEffect(() => {
    // window.scrollTo(0, 0);
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }
    , 300);
  }, [])

  const sendMessage = async () => {
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
  }

  return (
    <div className="min-h-screen pb-32 bg-white relative">
      <Hero />
      <div className="flex md:flex-row flex-col w-full pt-10  md:justify-between px-8 md:px-20">
        <div className="md:mb-0 ">
        <h2 className="md:text-[60px] text-[35px] leading-10 md:leading-[65px] font-serif font-medium">Get a free<br /> <span className="font-medium text-[40px] md:text-[70px] italic border-b-yellow-600 border-b-[5px]">assessment</span><span className="text-yellow-600">.</span> </h2>
          <div className="mt-14 max-w-[400px] flex flex-col gap-4">
            <Input value={name} label="Name" type="text" onChange={(e) => { setName(e.target.value) }} />
            <Input label="Email" value={email} type="text" onChange={(e) => { setEmail(e.target.value) }} />
            <Input label="Phone" value={phone} type="text" onChange={(e) => { setPhone(e.target.value) }} />
            <Input label="Job Title" value={jobTitle} type="text" onChange={(e) => { setJobTitle(e.target.value) }} />
            <Input label="Education" value={education} type="text" onChange={(e) => { setEducation(e.target.value) }} />
            <Input label="Nationality" value={nationality} type="text" onChange={(e) => { setNationality(e.target.value) }} />
            <Input label="Ask us antything..." value={text} type="text" onChange={(e) => { setText(e.target.value) }} />

            <button
              onClick={sendMessage}
              className="mt-4 max-w-[150px] min-w-[128px] text-white bg-neutral-800 hover:bg-neutral-700 h-10 transition-all"
            >
              Send
            </button>
          </div>
          <div>
          </div>
        </div>
        <iframe className=" md:w-[50vw] w-[75vw] mt-10 md:mt-40 shadow-2xl border hover:border-black rounded-3xl " 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9188.621571131165!2d55.262344946395025!3d25.18092631951039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69cdf5cf9a7f%3A0xaa17e79f93b66aef!2sAl%20A&#39;amal%20St%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1695645937665!5m2!1sen!2s"
        width="600" height="450" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Contact;