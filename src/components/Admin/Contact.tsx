import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {

  type Contact = {
    name: string;
    email: string;
    phone: string;
    jobTitle: string;
    education: string;
    nationality: string;
    text: string;
  };

  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);


  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const email = "admin@zeevistaadvisors.com";
      const password = "zeevista@2023";
      const res = await axios.post(
        `https://zeevistaserver.vercel.app/contact/recent`,
        {
          email,
          password,
        }
      );
      const { data } = res;
      console.log(data)
      setContacts(data);
    } catch (error) {
      toast.error("Error fetching contacts");
    }
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-2 justify-evenly">
          {contacts.map((contact, i) => (
            <div key={i} className="bg-gray-100 w-fit p-6 text-sm gap-4 flex flex-col rounded-xl">
              <p>Name: {contact.name.length > 15 ? contact.name.slice(0, 15) + "..." : contact.name}</p>
              <p>Email: {contact.email.length > 15 ? contact.email.slice(0, 15) + "..." : contact.email}</p>
              ...
              <p>Message: {contact.text.length > 15 ? contact.text.slice(0, 15) + "..." : contact.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contact;
