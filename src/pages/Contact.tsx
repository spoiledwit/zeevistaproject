import { useState, useEffect } from "react"
import Input from "../components/input/index";
// import axios from "axios";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sendMessage = async () => {
    // try {
    //   setSending(true);
    //   setError("");
    //   setSuccess(false);
    //   await axios.post(`${import.meta.env.VITE_BASE_URI}/contact`, {
    //     name,
    //     email,
    //     message
    //   });
    //   setEmail("");
    //   setName("");
    //   setMessage("");
    //   setSuccess(true);
    // } catch (error) {
    //   console.log(error);
    //   setError("Something went wrong. Please try again later.");
    // }
    // setSending(false);
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex md:flex-row flex-col w-full mt-10 md:mt-32 justify-between px-8 md:px-20">
        <div className="md:mb-0 mb-12">
        <h2 className="md:text-[60px] text-[35px] leading-10 md:leading-[65px] font-serif font-medium">Let&apos;s have a <br /> <span className="font-medium text-[40px] md:text-[70px] italic border-b-yellow-500 border-b-[5px]">conversation</span><span className="text-yellow-500">.</span> </h2>
          <div className="mt-14 max-w-[300px] flex flex-col gap-4">
            <Input label="Name" type="text" onChange={(e) => { setName(e.target.value) }} />
            <Input label="Email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
            <Input label="Ask us antything..." type="text" onChange={(e) => { setMessage(e.target.value) }} />
             {error && <p className="text-red-500 text-xs">{error}</p>}
            {success && <p className="text-yellow-500 text-xs">Message sent successfully.</p>}
            <button
              onClick={sendMessage}
              disabled
            //   disabled={sending || !name || !email || !message}
              className="mt-4 max-w-[150px] min-w-[128px] text-white bg-neutral-800 hover:bg-neutral-700 h-10 transition-all"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
          <div>
          </div>
        </div>
        <iframe className="md:w-[45vw] w-[72vw] mb-10 md:mb-0 shadow-2xl border hover:border-black rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27222.02519124525!2d74.31316775902928!3d31.475975999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190427303d1d9b%3A0x98af47ff5799036e!2zQXJmYSBJVCBUb3dlciDYp9ix2YHYuSDYotim24wg2bnbjCDZudin2YjYsQ!5e0!3m2!1sen!2s!4v1694498527890!5m2!1sen!2s" width="600" height="450" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Contact;