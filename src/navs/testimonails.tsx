import Carousel from "../components/carousel/simple";
import Bar from "../components/Bar";
import { AiFillStar } from "react-icons/ai";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import m1 from "../../assets/people/m1.jpg";
import m2 from "../../assets/people/m2.jpg";
import m3 from "../../assets/people/m3.jpg";
import m4 from "../../assets/people/m4.jpg";
import m5 from "../../assets/people/m5.jpg";
import m6 from "../../assets/people/m6.jpg";
import m7 from "../../assets/people/m7.jpg";
import m8 from "../../assets/people/m8.jpg";
import m9 from "../../assets/people/m9.jpg";
import m10 from "../../assets/people/m10.jpg";
import f1 from "../../assets/people/f1.jpg";
import f2 from "../../assets/people/f2.jpg";
import f3 from "../../assets/people/f3.jpg";
import f4 from "../../assets/people/f4.jpg";
import f5 from "../../assets/people/f5.jpg";
import f6 from "../../assets/people/f6.jpg";
import f7 from "../../assets/people/f7.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed S",
      content:
        "ZeeVista made my dream of immigration to UK from Dubai come true with their professional team who guided me step-by-step. I am grateful for their exceptional service and support throughout this journey.",
      image: m1,
    },
    {
      name: "Maryam K",
      content:
        "ZeeVista was exceptionally helpful when I needed help getting a work permit for Canada from Dubai. Their team was professional and knowledgeable, and I am now happily settled in my new home.",
      image: f1,
    },
    {
      name: "Sania Iqbal",
      content:
        "The professionals at ZeeVista Advisors were remarkable in handling my immigration case. Their knowledge and diligence ensured a smooth process, making my dream of relocating a reality. I am eternally grateful for their exceptional service and support throughout this journey.",
      image: f2,
    },
    {
      name: "Rohit Mehra",
      content:
        "The expertise and professionalism displayed by ZeeVista Advisors were unmatched. They took the time to understand my case and provided tailored solutions, making the visa application a breeze. I highly recommend their services to anyone seeking a hassle-free immigration experience.",
      image: m2,
    },
    {
      name: "Fahad Hussain",
      content:
        "ZeeVista Advisors have been a pillar of support during my visa application. Their thorough understanding of the process and timely guidance made a significant difference. Today, I am thriving in a new country, all thanks to their exemplary services.",
      image: m3,
    },
    {
      name: "Ayesha Rahman",
      content:
        "Entrusting ZeeVista Advisors with my immigration process was the best decision. They showcased exceptional professionalism and attention to detail, ensuring a seamless journey towards achieving my goals. I can't thank them enough for their invaluable assistance.",
      image: f3,
    },
    {
      name: "Vikram Singh",
      content:
        "The journey of moving abroad seemed complex and daunting until I engaged with ZeeVista Advisors. Their proficient team simplified every step, providing clarity and confidence. I am now living my dream, and it's all thanks to their outstanding guidance.",
      image: m4,
    },
    {
      name: "Naveen Kumar",
      content:
        "ZeeVista Advisors were instrumental in making my overseas education dream come true. Their seasoned professionals provided impeccable service and guidance at every step, ensuring a smooth visa application process. I am wholeheartedly grateful for their support.",
      image: m5,
    },
    {
      name: "Mehak Ali",
      content:
        "The dedication and expertise of ZeeVista Advisors are truly commendable. They handled my case with utmost professionalism, making the daunting visa application process a straightforward experience. I highly recommend their services to anyone with immigration needs.",
      image: f4,
    },
    {
      name: "Amir Sohail",
      content:
        "My experience with ZeeVista Advisors has been nothing short of excellent. Their proficient team guided me meticulously through every step, ensuring a successful visa application. Their dedication and expertise are why I am happily settled abroad today.",
      image: m6,
    },
    {
      name: "Zara Iqbal",
      content:
        "ZeeVista Advisors provided exceptional support in helping me obtain the UAE Golden Visa. Their team was highly knowledgeable about the application process and ensured all my documents were in order. Thanks to their guidance, I now have the long-term residency I dreamed of.",
      image: f5,
    },
    {
      name: "Hassan Ali",
      content:
        "The PRO services provided by ZeeVista Advisors saved my business so much time. They handled everything from company registration to visa processing seamlessly. I highly recommend their professional and efficient services to any business in need of PRO support in Dubai.",
      image: m7,
    },
    {
      name: "Sara Khan",
      content:
        "Thanks to ZeeVista Advisors' Banking Services, I was able to open my business account in the UAE quickly and efficiently. Their expertise and connections with local banks made the entire process hassle-free. I would definitely recommend their banking solutions to anyone setting up in the UAE.",
      image: f6,
    },
    {
      name: "Manoj Desai",
      content:
        "ZeeVista Advisors helped me with my UAE Residence Visa, and I couldn’t be more satisfied. Their clear communication, professional approach, and timely updates made the entire process smooth. I’m now happily settled in Dubai thanks to their expert guidance.",
      image: m8,
    },
    {
      name: "Fatima Al Zahra",
      content:
        "I engaged ZeeVista Advisors for Social Media Marketing Services for my startup, and they exceeded my expectations. Their creative campaigns boosted my online presence significantly. If you are looking to grow your brand through social media, ZeeVista is the go-to team.",
      image: f7,
    },
    {
      name: "Imran Malik",
      content:
        "The website development team at ZeeVista Advisors did an incredible job creating my business website. It is modern, responsive, and perfectly aligned with my brand. They are thorough professionals who understand how to create a digital presence that delivers results.",
      image: m9,
    },
    {
      name: "Ravi P",
      content:
        "I highly recommend ZeeVista's Portugal immigration services in Dubai; their consultants are top experts, and they offer comprehensive visa services.",
      image: m10,
    },
  ];

  return (
    <div className=" flex items-center flex-col w-full  justify-center">
      <div className="flex flex-col w-full items-center mt-5 md:mt-0 mx-5">
        <h2 className=" text-yellow-600 text-center md:text-left self-center text-3xl md:px-0 px-8 md:text-3xl font-play">
          What our clients says
          <Bar w={"w-[160px]"} />
        </h2>
        <p className="max-w-[800px] text-center">
          Our clients rate us as their "firm of choice" and have described us as
          "one of the best immigration law firms in Dubai." We are proud of our
          reputation for obtaining the results our clients need to meet their
          life and business goals.
        </p>
        <div className="w-full flex items-center justify-center">
          <div className="flex max-w-[1000px] gap-10 py-10 md:flex-row items-center justify-center md:justify-between w-full">
            <div className="flex flex-col items-center">
              <VisibilitySensor
                partialVisibility
                offset={{ top: 10 }}
                delayedCall
              >
                {({ isVisible }: { isVisible: any }) => (
                  <h3 className="text-5xl font-bold text-yellow-600">
                    <CountUp end={isVisible ? 500 : 0} duration={3} />+
                  </h3>
                )}
              </VisibilitySensor>
              <p className="text-center font-play text-lg mt-2 ">
                Global Clients
              </p>
            </div>
            <div className="flex flex-col items-center">
              <VisibilitySensor
                partialVisibility
                offset={{ top: 10 }}
                delayedCall
              >
                {({ isVisible }: { isVisible: any }) => (
                  <h3 className="text-5xl font-bold text-yellow-600">
                    <CountUp end={isVisible ? 10 : 0} duration={3} />+
                  </h3>
                )}
              </VisibilitySensor>
              <p className="text-center text-lg mt-2 font-play">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col items-center">
              <VisibilitySensor
                partialVisibility
                offset={{ top: 10 }}
                delayedCall
              >
                {({ isVisible }: { isVisible: any }) => (
                  <h3 className="text-5xl font-bold text-yellow-600">
                    <CountUp end={isVisible ? 100 : 0} duration={3} />+
                  </h3>
                )}
              </VisibilitySensor>
              <p className="text-center text-lg mt-2 font-play">
                Team of Professionals
              </p>
            </div>
            <div className="flex flex-col items-center">
              <VisibilitySensor
                partialVisibility
                offset={{ top: 10 }}
                delayedCall
              >
                {({ isVisible }: { isVisible: any }) => (
                  <h3 className="text-5xl font-bold text-yellow-600">
                    <CountUp end={isVisible ? 15000 : 0} duration={3} />+
                  </h3>
                )}
              </VisibilitySensor>
              <p className="text-center text-lg mt-2 font-play">
                Professional Guidelines
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className=" text-yellow-600 text-center md:text-left self-center text-3xl md:px-0 px-8 md:text-3xl font-play">
          Testimonials
          <Bar w={"w-[160px]"} />
        </h2>
        <div className=" w-full relative mt-4 md:px-0 px-8 md:mt-4 self-center">
          <Carousel options={{ loop: true }}>
            {testimonials.map((t, i) => (
              <div key={i} className=" flex flex-col items-center">
                <p className=" text-gray-500 leading-loose text-center text-lg max-w-3xl">
                  <strong className="text-yellow-600 text-lg mr-1">"</strong>
                  {t.content}{" "}
                  <strong className="text-yellow-600 text-lg">"</strong>
                </p>

                <h3 className="mt-10 font-serif text-yellow-600 text-lg md:mt-6 ">
                  {t.name}
                </h3>
                <div className="flex my-2">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className=" text-yellow-600 text-lg" />
                  ))}
                </div>
                <div className=" w-12 h-12 rounded-full bg-gray-200">
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
    </div>
  );
}
