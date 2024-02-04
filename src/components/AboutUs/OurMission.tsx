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
        <h1 className="text-center font-play text-2xl font-medium text-yellow-600">
          About us
        </h1>
        <Bar w={"w-[90px]"} />
        <p className="mt-6 text-justify">
          <strong className="text-yellow-600">ZeeVista Advisors</strong> is a
          UAE-based firm specializing in a myriad of immigration and visa
          services, including Business Visit Visa, Tourist Visit Visa, and
          Student Visa. We also offer Permanent and Temporary Residency options
          as well as Caribbean Citizenship '2nd Passport' by investment. As your
          trusted partners, we navigate the intricate worlds of immigration,
          visa consultancy services, and second passports. Committed to
          excellence, we aim to facilitate global mobility for individuals and
          families, solidifying our reputation as a leader in the industry.
        </p>
        <div className="mt-8">
          <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">
            Our Mission
          </h2>
          <Bar w={"w-[110px]"} />
          <p className="mt-4  text-justify">
            Our mission at ZeeVista Advisors is to empower you with the freedom
            to explore new horizons, seize international business and
            educational opportunities, and enhance your quality of life through
            seamless immigration services and second passport solutions.
            Specializing in services like Business Visit Visa, Tourist Visit
            Visa, and Student Visa, as well as Permanent and Temporary
            Residency, we understand that every immigration process is unique.
            We're committed to tailoring our visa consultancy services to meet
            your specific needs.
          </p>
        </div>
        <div className="mt-8 text-justify">
          <h2 className="text-yellow-600  text-2xl font-medium font-play text-center">
            Why Choose ZeeVista Advisors?
          </h2>
          <Bar w={"w-[280px]"} />
          <p className="mb-2">
            Our team of immigration consultants in Dubai boasts experienced
            specialists in all forms of visas - investor visas, work permits,
            and family sponsorship. We remain informed on any ever-evolving
            immigration laws to provide accurate and up-to-date advice that
            helps guide our customers toward successful endeavours.
          </p>
          <strong className="text-yellow-600 ">Your Journey, Your Way:</strong>{" "}
          No two dreams are alike; that's why we tailor our services to suit the
          goals and circumstances that are specific to you. Consider us the
          architects of your Dubai adventure; meticulously crafting a tailored
          roadmap towards success.
          <br />
          <br />
          <strong className="text-yellow-600">
            Hassle-free, empowered and informed:
          </strong>{" "}
          We take pride in handling paperwork, complexity and challenges with
          meticulous care while keeping you informed at every turn. You'll feel
          empowered knowing your decisions are supported by our expertise.
          <br />
          <br />
          <strong className="text-yellow-600">
            Celebrating Your Success:
          </strong>{" "}
          At ZeeVista, success is more than numbers; it is the joy of watching
          dreams take flight. We celebrate each visa granted, family reuniting
          successfully in Dubai and individual flourishing within this exciting
          city - your success is our passion!
          <br />
          <br />
          <strong className="text-yellow-600">Partners not agencies:</strong> At
          our Dubai immigration agency, we go far beyond being just an agency;
          we become your trusted advocate, champion and guide as you realize
          your Dubai dream with confidence. We walk alongside you every step of
          the way until it becomes a reality!
          <p className="mt-2">
            Dubai awaits, so let ZeeVista be your guide, your bridge and key to
            opening up a future that surpasses even your wildest imagination.
            Reach out today for a free consultation and start building an
            extraordinary Dubai reality!
          </p>
        </div>
        <div className="mt-8 text-justify">
          <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">
            Our Services
          </h2>
          <Bar w={"w-[100px]"} />
          <p>
            <strong className="text-yellow-600">Immigration Services:</strong>{" "}
            At ZeeVista Advisors, we assist you in securing various types of
            visas and permits, including Student Visa, Work Visa, and Family
            Reunification. Our skilled team manages the paperwork and navigates
            the visa consultancy services, ensuring a smooth application process
            for Permanent and Temporary Residency, among other services.
            <br />
            <br />
            <strong className="text-yellow-600">
              Citizenship "2nd Passport" Services:
            </strong>{" "}
            At ZeeVista Advisors, we specialize in helping you obtain a second
            passport through legitimate Caribbean Citizenship by investment
            programs. This service not only opens doors to new business and
            travel opportunities but also provides an added layer of security
            and freedom, aligning perfectly with our wider array of immigration
            and visa services.
          </p>
        </div>
        <div className="mt-8 text-justify">
          <h2 className="text-yellow-600 text-2xl font-medium font-play text-center">
            Your journey begins here
          </h2>
          <Bar w={"w-[220px]"} />
          <p>
            Whether you're aiming for new career opportunities with a Work Visa,
            family reunification, or safeguarding your family's future with
            Caribbean Citizenship by investment, ZeeVista Advisors is your go-to
            for a range of immigration services and visa consultancy services.
            We guide you through every step, from Student Visa to Permanent
            Residency, ensuring a brighter, more prosperous future. Join the
            ranks of our satisfied clients who have successfully navigated the
            complexities of immigration and second passports. Discover what's
            possible with ZeeVista Advisors today.
          </p>
        </div>
      </Motion>
    </div>
  );
};

export default OurMission;
