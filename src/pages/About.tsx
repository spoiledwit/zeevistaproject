import Hero from "../components/AboutUs/Hero";
import OurMission from "../components/AboutUs/OurMission";
import { useEffect } from "react";
import Message from "../components/AboutUs/Message";
import { Helmet } from "react-helmet";

interface Props {
  setProgress: (progress: number) => void;
}

export default function About({ setProgress }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, []);

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>ZeeVista Advisors: Immigration Consultants in Dubai</title>
        <meta
          name="description"
          content="Explore all that Dubai has to offer with ZeeVista. Our CEO welcomes you and is eager to assist your immigration journey - offering an efficient route towards fulfilling your Dubai dreams!"
        />
      </Helmet>
      <Hero />
      <Message />
      <br />
      <OurMission />
    </div>
  );
}
