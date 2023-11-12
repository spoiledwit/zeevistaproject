import Motion from "../Motion";
import Bar from "../Bar";


const OurMission = () => {

  return (
    <div className="flex items-center w-full justify-center">

      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="our-mission bg-white max-w-[1500px] z-10 px-8 md:px-32 pb-32 md:pt-5"
      >
        <h1 className="text-center font-play text-2xl font-medium text-yellow-600">About us</h1>
        <Bar w={"w-[90px]"} />
        <p className="mt-6 text-justify">
        <strong className="text-yellow-600">ZeeVista Advisors</strong> is a UAE-based firm specializing in a myriad of immigration and visa services, including Business Visit Visa, Tourist Visit Visa, and Student Visa. We also offer Permanent and Temporary Residency options as well as Caribbean Citizenship '2nd Passport' by investment. As your trusted partners, we navigate the intricate worlds of immigration, visa consultancy services, and second passports. Committed to excellence, we aim to facilitate global mobility for individuals and families, solidifying our reputation as a leader in the industry.
        </p>
        <div className="mt-8">
          <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">Our Mission</h2>
          <Bar w={"w-[110px]"} />
          <p className="mt-4  text-justify">
          Our mission at ZeeVista Advisors is to empower you with the freedom to explore new horizons, seize international business and educational opportunities, and enhance your quality of life through seamless immigration services and second passport solutions. Specializing in services like Business Visit Visa, Tourist Visit Visa, and Student Visa, as well as Permanent and Temporary Residency, we understand that every immigration process is unique. We're committed to tailoring our visa consultancy services to meet your specific needs.
          </p>
        </div>
        <div className="mt-8 text-justify">
          <h2 className="text-yellow-600  text-2xl font-medium font-play text-center">Why Choose ZeeVista Advisors?</h2>
          <Bar w={"w-[280px]"} />
          <strong className="text-yellow-600 ">Expertise:</strong> Our team of experienced immigration and visa professionals is well-versed in the intricacies of global immigration laws and regulations. We stay updated with the latest changes to ensure your application stands the best chance of success.
          <br />
          <br />
          <strong className="text-yellow-600">Personalized Guidance:</strong> We believe in personalized, one-on-one guidance to understand your goals and aspirations fully. This approach allows us to recommend the most suitable immigration or citizenship options tailored to your individual circumstances.
          <br />
          <br />
          <strong className="text-yellow-600">Integrity</strong> At ZeeVista Advisors, we uphold the highest standards of integrity and ethics. We provide transparent advice and maintain your confidentiality throughout the process.
          <br />
          <br />
          <strong className="text-yellow-600">Global Network:</strong> With a global network of partners and resources, we can offer comprehensive services that cover a wide range of countries and citizenship-by-investment programs.
        </div>
        <div className="mt-8 text-justify">
          <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">Our Services</h2>
          <Bar w={"w-[100px]"} />
          <p>
            <strong className="text-yellow-600">Immigration Services:</strong> At ZeeVista Advisors, we assist you in securing various types of visas and permits, including Student Visa, Work Visa, and Family Reunification. Our skilled team manages the paperwork and navigates the visa consultancy services, ensuring a smooth application process for Permanent and Temporary Residency, among other services.
            <br />
            <br />
            <strong className="text-yellow-600">Citizenship "2nd Passport" Services:</strong> At ZeeVista Advisors, we specialize in helping you obtain a second passport through legitimate Caribbean Citizenship by investment programs. This service not only opens doors to new business and travel opportunities but also provides an added layer of security and freedom, aligning perfectly with our wider array of immigration and visa services.
          </p>
        </div>
        <div className="mt-8 text-justify">
          <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">Your journey begins here</h2>
          <Bar w={"w-[220px]"} />
          <p>
          Whether you're aiming for new career opportunities with a Work Visa, family reunification, or safeguarding your family's future with Caribbean Citizenship by investment, ZeeVista Advisors is your go-to for a range of immigration services and visa consultancy services. We guide you through every step, from Student Visa to Permanent Residency, ensuring a brighter, more prosperous future. Join the ranks of our satisfied clients who have successfully navigated the complexities of immigration and second passports. Discover what's possible with ZeeVista Advisors today.
           </p>
        </div>
      </Motion>
    </div>
  );
};

export default OurMission;
