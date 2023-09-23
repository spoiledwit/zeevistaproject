import About from "../components/home/about";
import Countries from "../components/home/countries";
import Hero from "../components/home/hero";
import Testimonials from "../navs/testimonails";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordian/Accordian";
import Contact from "../components/home/Contact";

export default function Home() {

  const [color, setColor] = useState("white");
  useEffect(() => {

  }, [color]);

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <div className={`md:pb-40 bg-[${color}] overflow-hidden pb-10 w-full flex flex-col h-max`}>
      <Hero />
      <Countries setColor={setColor} />
      <About />
      <br />
      <br />
      <br />
      <Testimonials />
      <br />
      <br />
      <br />
      <br />
      
      <Accordion />
      <Contact />
    </div>
  );
}
