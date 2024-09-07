import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Bar from "../Bar";

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 text-justify text-black pb-10">
      <p className="mt-10 text-3xl font-play text-yellow-600 text-center">
        ZeeVista Business Advisors
        <Bar w={"w-[280px]"} />
      </p>
      <div className="mt-12 md:flex-row flex-col flex font-play max-w-screen-lg gap-10 mx-auto text-sm leading-relaxed">
        <div className="md:w-1/2  md:pl-0 px-8 md:border-r border-yellow-600 pr-5">
          <p>
            {" "}
            ZeeVista Business Advisors offers streamlined company formation
            services in Dubai, helping businesses establish in Mainland,
            Freezone, and Offshore jurisdictions. Their expert team ensures a
            smooth setup process, handling licenses and regulatory compliance
            while optimizing growth opportunities. ZeeVista provides tailored
            solutions to meet the unique needs of each business.
          </p>
          <p className="mt-5">
            Beyond company formation, ZeeVista offers essential services like
            legal support, PRO services, VAT and corporate tax compliance,
            accounting, and visa assistance, including the UAE Golden Visa. They
            also provide office rental, Ejari services, and digital solutions
            such as web development and social media marketing.
          </p>
          <div className="w-full flex items-center justify-center mt-10">
            <span className="md:mr-10">
              <Button
                onClick={() => {
                  navigate("/business-setup/overview");
                }}
                text="Know More"
              />
            </span>
          </div>
        </div>
        <div className="md:w-1/2 md:px-0 px-8 md:pl-5">
          <p>
            ZeeVista Business Advisors specializes in providing high-quality
            second citizenship and residency programs, with a strong reputation
            as one of the top Canada immigration consultants in Dubai,
            particularly for Europe and the Caribbean. Backed by a team of
            certified experts, ZeeVista upholds professionalism and ethical
            conduct, guiding clients through a seamless process for acquiring
            citizenship by investment.
          </p>
          <p className="mt-5">
            With expertise in both Caribbean and European citizenship programs,
            ZeeVista offers clients access to global opportunities such as
            visa-free travel and an enhanced lifestyle. Additionally, their team
            in Dubai is dedicated to assisting those seeking Canada work visas,
            ensuring a smooth and efficient application process.
          </p>
          <div className="w-full flex items-center justify-center mt-10">
            <span className="md:mr-10">
              <Button
                onClick={() => {
                  navigate("/immigration");
                }}
                text="Know More"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
