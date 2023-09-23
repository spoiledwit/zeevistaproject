import Carousel from "../components/carousel/simple";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Saad",
      content:
        "ZeeVista Advisors guided me through my immigration journey with unparalleled expertise. Their comprehensive understanding of visa regulations was invaluable, ensuring that I faced no hurdles. Today, I am living and working in my dream country, and it wouldn't have been possible without ZeeVista Advisors's exceptional service.",
      image: "https://loremflickr.com/640/480/nature",
    },
    {
      name: "Fatima Al-Khaleej",
      content:
        "ZeeVista Advisors has been a beacon of professionalism and guidance throughout my visa application process. Their attention to detail and timely responses eliminated any stress I had. They took care of everything from start to finish, making the experience seamless. I can't recommend them enough.",
      image: "https://loremflickr.com/640/480/nature",
    },
    {
      name: "Yusuf Al-Qasim",
      content:
        "Navigating the complex web of visa applications can be daunting, but ZeeVista Advisors' team made it look effortless. Their in-depth consultations and meticulous planning helped me secure a visa to study at a prestigious university abroad. I am beyond grateful for their exceptional support and expertise.",
      image: "https://loremflickr.com/640/480/nature",
    },
  ];
  

  return (
    <div className=" flex flex-col justify-center">
      <h2 className=" text-yellow-600 text-center md:text-left self-center text-3xl md:px-0 px-8 md:text-4xl font-play">
        Hear From Our Clients
      </h2>

      <div className=" w-full relative mt-10 md:px-0 px-8 md:mt-20 self-center">
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
