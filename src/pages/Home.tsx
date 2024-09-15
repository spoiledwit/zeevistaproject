import About from "../components/home/about";
import Countries from "../components/home/countries";
import Hero from "../components/home/hero";
import Testimonials from "../navs/testimonails";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordian/Accordian";
import Contact from "../components/home/Contact";
import Introduction from "../components/home/Introduction";
import { Helmet } from "react-helmet";
import Services from "@/components/home/services";
import Freezone from "@/components/home/freezone";
import Accounting from "@/components/home/accounting";

interface Props {
  setProgress: (progress: number) => void;
}

export default function Home({ setProgress }: Props) {
  const [color, setColor] = useState("white");
  useEffect(() => {}, [color]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // adding a progress bar with delay of 0.5s
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, []);

  return (
    <div
      className={`md:pb-40 bg-[${color}] overflow-hidden pb-10 items-center w-full flex flex-col h-max`}
    >
      <Helmet>
        <title>
          Welcome to ZeeVista: Your Trusted Business Partner in Dubai
        </title>
        <meta
          name="description"
          content="ZeeVista: Your trusted partner for hassle-free immigration to Dubai. Get visas, permits, and expert guidance for families, professionals, and students."
        />
      </Helmet>
      <Hero />
      <Introduction />
      <Services setColor={setColor} />
      <Countries setColor={setColor} />
      <Freezone />
      <Accounting />
      <About />
      {/* <Clients /> */}
      <Testimonials />
      <br className="md:block hidden" />
      <br />
      <br />
      <Accordion />
      <Contact />
    </div>
  );
}
