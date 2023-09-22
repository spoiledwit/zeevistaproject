import About from "../components/home/about";
import Countries from "../components/home/countries";
import Hero from "../components/home/hero";
import Testimonials from "../navs/testimonails";
import Clients from "../components/home/Clients";
import { useEffect, useState } from "react";

export default function Home() {

  const [color, setColor] = useState("white");
  useEffect(() => {

  }, [color]);

  return (
    <div className={`md:pb-40 bg-[${color}] overflow-hidden pb-10 w-full flex flex-col h-max`}>
      <Hero />
      <Countries setColor={setColor} />
      <About />
      <br />
      <br />
      <br />
      <Testimonials />
    </div>
  );
}
