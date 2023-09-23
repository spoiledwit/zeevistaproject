import Hero from "../components/AboutUs/Hero";
import OurMission from "../components/AboutUs/OurMission";
import StartProcess from "../components/AboutUs/StartProcess";
import StepsToApply from "../components/AboutUs/StepsToApply";
import { useEffect } from "react";

export default function AboutUs() {

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="flex flex-col">
      <Hero />
      <StartProcess />
      <OurMission />
      <StepsToApply />
    </div>
  );
}
