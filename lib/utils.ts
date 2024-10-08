import axios from "axios";

export const totTitleCase = (s: string): string =>
  s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase());

export const createContact = async (
  name: string,
  email: string,
  phone: string,
  jobTitle: string,
  nationality: string,
  service: string,
  education: string,
  text: string
) => {
  const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/contact`, {
    name,
    email,
    phone,
    jobTitle,
    nationality,
    service,
    education,
    text,
  });
  return res.data;
};
