import About from "../components/home/about";
import Countries from "../components/home/countries";
import Hero from "../components/home/hero";
import Testimonials from "../navs/testimonails";
import Clients from "../components/home/Clients";

export default function Home() {
  return (
    <div className="md:pb-40 overflow-hidden pb-10 w-full flex flex-col h-max">
      <Hero />

      <Countries />

      <About />

<div className="md:block hidden">
<Clients />
</div>
  
      <br />
      <br />
      <br />
      <Testimonials />
    </div>
  );
}
