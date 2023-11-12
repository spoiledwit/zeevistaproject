import Bar from "../Bar";

const Message = () => {
    return (
      <div className="flex w-full items-center justify-center bg-gray-100">
      <div className="p-6  flex max-w-[1300px] items-center justify-center text-gray-900 w-full">
        <div className="md:w-[50vw]">
            
        <h2 className="text-2xl font-medium font-play text-yellow-600 mb-4 text-center">A Message from Our CEO</h2>
        <Bar w={"w-[210px]"} />
        <p className="mb-2 font-semibold mt-6 md:mt-0">Greetings,</p>
        <p className="mb-2 text-justify">
          Welcome to ZeeVista Advisors, your trusted partner on the journey to global mobility and new horizons. 
          I'm honored to have this opportunity to share our vision, mission, and commitment with you.
        </p>
        <p className="mb-2 text-justify">
          At ZeeVista Advisors, our driving force is the belief that everyone should have the chance to explore the 
          world, pursue their dreams, and secure a brighter future for themselves and their families. We understand 
          that the decision to immigrate or obtain a second passport is a significant one, filled with hopes and aspirations. 
          It's a journey that can be both exhilarating and daunting.
        </p>
        <p className="mb-2 text-justify">
          Our team, composed of dedicated experts in immigration and citizenship services, is here to guide you through 
          this transformative experience. We're not just in the business of processing paperwork; we're in the business 
          of fulfilling dreams.
        </p>
        <p className="mb-2 text-justify">
          What sets us apart is our unwavering commitment to excellence, integrity, and personalized service. We pride 
          ourselves on staying at the forefront of global immigration and citizenship trends, ensuring that your journey 
          is as smooth and successful as possible. We believe in transparency, honesty, and the highest ethical standards. 
          Your trust is paramount to us.
        </p>
        <p className="mb-2 text-justify">
          Our passion for what we do and our understanding of the life-changing impact of our services drive us to go 
          above and beyond for our clients. We're not just helping you cross borders; we're opening doors to new 
          opportunities, safeguarding your future, and enhancing your quality of life.
        </p>
        <p className="mb-2 text-justify">
          I invite you to explore our website, learn more about our services, and get in touch with us. Let us be the 
          bridge to your dreams of global mobility, international education, career advancement, family reunification, 
          or the security of a second passport.
        </p>
        <p className="mb-2 text-justify">
          Thank you for considering ZeeVista Advisors as your partner in this remarkable journey. We look forward to 
          helping you achieve your goals and welcome you into our family of satisfied clients who have realized their 
          dreams with us.
        </p>
        <p className="mb-2 text-justify">
          Here's to new beginnings and limitless possibilities.
        </p>
        <p className="mt-4">
          Warm regards,
        </p>
        <p className="font-bold text-justify">
          Muhammad<br />
          CEO, ZeeVista Immigration Advisors
        </p>
      </div>
      </div>
      </div>
    )
  }
  
  export default Message;  