import axios from "axios";

export const totTitleCase = (s: string): string =>
  s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase());


export const createContact = async (name: string, email:string, phone:string, jobTitle:string, education:string, country:string, text:string) => {
  const res = await axios.post("http://localhost:4000/contact", {
    name,
    email,
    phone,
    jobTitle,
    education,
    country,
    text
  });
  return res.data;
};