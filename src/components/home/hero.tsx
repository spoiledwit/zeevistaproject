'use client'

import Button from "../../components/Button"
import img1 from "../../../assets/europe_im_cover.webp";
import img2 from "../../../assets/newzealand.webp";

import Carousel from "../../components/carousel/simple";
const images = [img1, img2];

export default function Hero() {

  return (
    <div className="w-full h-screen">
      <Carousel options={{ loop: true }}>
      <div className="flex relative w-full h-screen bg-yellow-500">
  <img
    src={images[0]}
    className="w-full h-full object-cover"
    alt="Your Image Description"
  />

  <section className="flex justify-end pb-[55%] md:pb-[7%] flex-col gap-12 w-full h-full bg-gradient-to-bl from-transparent to-black/80 from-40% absolute z-10 px-4 md:px-32">
    <h1 className="md:text-5xl text-3xl mt-20 font-bold tracking-tight  text-white max-w-2xl">
      Unlock Your Global Journey with Expert Visa Guidance
    </h1>
    <p className="md:text-xl text-white tracking-tight leading-7 max-w-3xl">
      Embark on your global adventure with ease through ZeeVista. Our seasoned visa consultants are your trusted allies in navigating the complexities of visa applications. Whether you aspire to study, work, reunite, or explore abroad, we provide tailored solutions, expert insights, and unwavering support. With ZeeVista, your international aspirations become achievable realities.
    </p>
    <Button text="Get Started" onClick={() => {}} />
  </section>
</div>


<div className="flex relative w-full h-screen bg-yellow-500">
  <img
    src={images[1]}
    className="w-full h-full object-cover"
    alt="Your Image Description"
  />

  <section className="flex justify-end pb-[55%] md:pb-[7%] flex-col gap-12 w-full h-full bg-gradient-to-bl from-transparent to-black/80 from-40% absolute z-10 px-4 md:px-32">
    <h1 className="md:text-5xl text-3xl font-bold tracking-tight  text-white max-w-2xl">
      Unlock Your Global Journey with Expert Visa Guidance
    </h1>
    <p className="md:text-xl text-white tracking-tight leading-7 max-w-3xl">
      Embark on your global adventure with ease through ZeeVista. Our seasoned visa consultants are your trusted allies in navigating the complexities of visa applications. Whether you aspire to study, work, reunite, or explore abroad, we provide tailored solutions, expert insights, and unwavering support. With ZeeVista, your international aspirations become achievable realities.
    </p>
    <Button text="Get Started" onClick={() => {}} />
  </section>
</div>

      </Carousel> 
    </div>
  );
}
