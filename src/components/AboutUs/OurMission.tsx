import Motion from "../Motion";
import Bar from "../Bar";


const OurMission = () => {

  return (
    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="our-mission bg-white z-10 px-8 md:px-32 pb-32 md:pt-5"
    >
      <h2 className="text-center font-play text-2xl font-medium text-yellow-600">About us</h2>
      <Bar w={"w-[90px]"} />
      <p className="mt-6">
        <strong className="text-yellow-600 text-lg">ZeeVista Advisors</strong>  is a UAE Based Immigration Law Firm, providing immigration & Visa Services such as (Business Visit Visa, Tourist Visit Visa, Student Visa, Permanent Residency, Temporary Residency) and also offering Caribbean Citizenship “2nd Passport” by investment opportunities for our Local & International clients. At ZeeVista Advisors, we are your trusted partners in navigating the complex world of immigration, visa services, and securing a second passport for a brighter future. With a relentless commitment to excellence and a passion for helping individuals and families achieve their dreams of global mobility, we have emerged as a leading name in the industry.
      </p>
      <div className="mt-8">
        <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">Our Mission</h2>
        <Bar w={"w-[110px]"} />
        <p className="mt-4 text-lg">
          Our mission is to empower you with the freedom to explore new horizons, seize international opportunities, and enhance your quality of life through seamless immigration and citizenship solutions. We understand that every journey is unique, and we are dedicated to tailoring our services to your specific needs.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">Why Choose ZeeVista Advisors?</h2>
        <Bar w={"w-[280px]"} />
        <strong className="text-yellow-600">Expertise:</strong> Our team of experienced immigration and visa professionals is well-versed in the intricacies of global immigration laws and regulations. We stay updated with the latest changes to ensure your application stands the best chance of success.
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
      <div className="mt-8">
        <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">Our Services</h2>
        <Bar w={"w-[100px]"} />
        <p>
          <strong className="text-yellow-600">Immigration Services:</strong> We assist you in securing visas and permits for study, work, family reunification, and more. Our team handles the paperwork, ensuring a smooth application process.
            <br />  
            <br />
          <strong className="text-yellow-600">Citizenship "2nd Passport" Services:</strong> We specialize in helping you obtain a second passport through legitimate citizenship-by-investment programs, opening doors to new opportunities and freedom.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">Your journey begins here</h2>
        <Bar w={"w-[220px]"} />
        <p>
        Whether you're looking to explore new career prospects, reunite with loved ones, or safeguard your family's future with a second passport, ZeeVista Advisors is here to guide you every step of the way. Your journey to a brighter, more prosperous future starts with us.

            <br />
            Join the ranks of our satisfied clients who have successfully achieved their immigration and citizenship goals. Discover what's possible with ZeeVista Advisors today.  
      </p>
      </div>
    </Motion>
  );
};

export default OurMission;
