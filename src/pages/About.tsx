import Hero from "../components/AboutUs/Hero";
import OurMission from "../components/AboutUs/OurMission";
import { useEffect } from "react";
import Message from "../components/AboutUs/Message";
import {
  Helmet
} from "react-helmet"

interface Props {
  setProgress: (progress: number) => void;
}

export default function About({ setProgress }: Props) {
  useEffect(()=>{
    window.scrollTo(0,0)
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }
    , 300);
  }, [])

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>About Us | ZeeVista Immigration Advisors</title>
        <meta name="description" content="About Us" />
      </Helmet>
      <Hero />
      <Message />
      <br />
      <OurMission />
     </div>
  );
}
