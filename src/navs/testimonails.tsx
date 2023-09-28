import Carousel from "../components/carousel/simple";
import Bar from "../components/Bar";
import globe from "../../assets/globe.jpg"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Saad",
      content:
        "ZeeVista Advisors guided me through my immigration journey with unparalleled expertise. Their comprehensive understanding of visa regulations was invaluable, ensuring that I faced no hurdles. Today, I am living and working in my dream country, and it wouldn't have been possible without ZeeVista Advisors's exceptional service.",
      image: globe,
    },
    {
      name: "Fatima Al-Khaleej",
      content:
        "ZeeVista Advisors has been a beacon of professionalism and guidance throughout my visa application process. Their attention to detail and timely responses eliminated any stress I had. They took care of everything from start to finish, making the experience seamless. I can't recommend them enough.",
      image: globe
    },
    {
      name: "Yusuf Al-Qasim",
      content:
        "Navigating the complex web of visa applications can be daunting, but ZeeVista Advisors' team made it look effortless. Their in-depth consultations and meticulous planning helped me secure a visa to study at a prestigious university abroad. I am beyond grateful for their exceptional support and expertise.",
      image: globe
    },
  ];
  

  return (
    <div className=" flex flex-col justify-center">
      <h2 className=" text-yellow-600 text-center md:text-left self-center text-3xl md:px-0 px-8 md:text-3xl font-play">
        What our clients say
        <Bar w={"w-[200px]"} />
      </h2>

      <div className=" w-full relative mt-4 md:px-0 px-8 md:mt-4 self-center">
        <Carousel options={{ loop: true }}>
          {testimonials.map((t, i) => (
            <div key={i} className=" flex flex-col items-center">
              <p className=" text-gray-500 leading-loose text-center text-lg max-w-3xl">
              <strong className="text-yellow-600 text-lg mr-1">"</strong>{t.content} <strong className="text-yellow-600 text-lg">"</strong>
              </p>

              <h3 className="mt-10 font-serif text-yellow-600 text-lg md:mt-6 ">{t.name}</h3>
              <div className=" w-12 h-12 mt-3 rounded-full bg-gray-200">
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
