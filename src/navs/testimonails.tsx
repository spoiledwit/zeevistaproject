import Carousel from "../components/carousel/simple";
import { VscQuote } from "react-icons/vsc";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Hassan Al-Mansoori",
      content:
        "I couldn't have asked for a better visa consultancy agency than Zee Vista. Their expertise and attention to detail made my visa application process smooth and hassle-free. I'm now pursuing my dreams abroad, thanks to their guidance.",
      image: "https://loremflickr.com/640/480/nature",
    },
    {
      name: "Li Wei",
      content:
        "I highly recommend Zee Vista to anyone seeking visa assistance. Their knowledgeable team provided me with step-by-step guidance and kept me informed throughout the entire process. Thanks to them, I'm now enjoying my new life overseas!",
      image: "https://loremflickr.com/640/480/nature",
    },
    {
      name: "Sofia Rodriguez",
      content:
        "I was initially overwhelmed by the visa application process, but Zee Vista made it seem effortless. Their professionalism and commitment to customer satisfaction are unmatched. I'm grateful for their support in securing my visa.",
      image: "https://loremflickr.com/640/480/nature",
    },
    {
      name: "Muhammad Khan",
      content:
        "I can't express how grateful I am to Zee Vista for helping me obtain my student visa. Their counselors are not only experts in immigration but also friendly and approachable. They genuinely care about their clients' success.",
      image: "https://loremflickr.com/640/480/nature",
    },
    {
      name: "Carlos M.",
      content:
        "Choosing Zee Vista was the best decision I made for my family's immigration. Their team went above and beyond to ensure all our documents were in order, and they provided valuable insights into our visa options. Thanks to them, we now have a brighter future in a new country.",
      image: "https://loremflickr.com/640/480/nature",
    },
  ];

  return (
    <div className=" flex flex-col justify-center">
      <h2 className=" text-yellow-600 text-center md:text-left self-center text-3xl md:px-0 px-8 md:text-4xl font-serif">
        Hear From Our Clients
      </h2>

      <div className=" w-full max-w-3xl relative mt-10 md:px-0 px-8 md:mt-20 self-center">
        <VscQuote size={40} className="absolute r icon-l" />

        <Carousel options={{ loop: true }}>
          {testimonials.map((t, i) => (
            <div key={i} className=" flex flex-col items-center">
              <p className=" text-gray-500 text-xl leading-loose text-center max-w-3xl">
                {t.content}
              </p>

              <h3 className="mt-10 text-2xl font-serif text-yellow-600 md:text-4xl md:mt-12 ">{t.name}</h3>
              <div className=" w-20 h-20 mt-6 rounded-full bg-gray-200">
                <img
                  className=" rounded-full h-full aspect-square object-cover"
                  src={t.image}
                  alt={t.name}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
