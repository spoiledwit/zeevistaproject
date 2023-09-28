import About from "../components/home/about";
import Countries from "../components/home/countries";
import Hero from "../components/home/hero";
import Testimonials from "../navs/testimonails";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordian/Accordian";
import Contact from "../components/home/Contact";
import Introduction from "../components/home/Introduction";

interface Props {
  setProgress: (progress: number) => void;
}

export default function Home({ setProgress }: Props) {

  
  const [color, setColor] = useState("white");
  useEffect(() => {

  }, [color]);

  useEffect(()=>{
    window.scrollTo(0,0);
    // adding a progress bar with delay of 0.5s
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }
    , 300);
  }, [])

  return (
    <div className={`md:pb-40 bg-[${color}] overflow-hidden pb-10 w-full flex flex-col h-max`}>
      <Hero />
      <Introduction />
      <Countries setColor={setColor} />
      <About />
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
