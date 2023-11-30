import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Contacts = () => {
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
        `${import.meta.env.VITE_SERVER_URL}/contact/all`,
        {
          email,
          password,
        }
      );
      const { data } = res;
      console.log(data);
      setContacts(data);
    } catch (error) {
      toast.error("Error fetching contacts");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-4/5 p-10 bg-white">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="text-3xl font-semibold mb-6">Manage Queries</h1>
          <div className="flex gap-2  flex-wrap">
            {contacts.map((contact, i) => (
              <div
                key={i}
                className="bg-gray-100 w-fit p-6 text-sm gap-4 flex flex-col rounded-xl"
              >
                <p>Name: {contact.name}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Job Title: {contact.jobTitle}</p>
                <p> Nationality: {contact.nationality}</p>
                <p>Education: {contact.education}</p>
                <p>Message: {contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
