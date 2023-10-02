import Strategy from "../../../assets/strategy.png";
import mission from "../../../assets/mission.png";
import vision from "../../../assets/business.png";
import Motion from "../Motion";
import Bar from "../Bar";

type Virtue = {
  icon: string;
  label: string;
  text: string;
};

const VirtueTile = ({ virtue }: { virtue: Virtue }) => {
  return (
    <div className=" w-full flex flex-col items-center gap-4 mt-12">
      <div className=" w-20 h-20 relative ">
        <img src={virtue.icon} alt="" />
      </div>
      <h3 className=" text-xl text-yellow-600 font-serif tracking-tight">{virtue.label}</h3>
      <p className="text-center max-w-[800px] text-white leading-relaxed">
        {virtue.text}
      </p>
    </div>
  );
};

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
     </Motion>
  );
};

export default OurMission;
