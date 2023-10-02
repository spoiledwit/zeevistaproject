import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Bar from "../Bar";

const Introduction = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 text-justify text-black pb-10">
            <h2 className="mt-10 text-3xl font-play text-yellow-600 text-center">
                ZeeVista Immigration Advisors
                <Bar w={"w-[280px]"} />
            </h2>
            <div className="mt-12 md:flex-row flex-col flex font-play max-w-screen-lg gap-10 mx-auto text-sm leading-relaxed">
                <div className="md:w-1/2  md:pl-0 px-8 md:border-r border-yellow-600 pr-5">
                   ZeeVista Immigration Advisors specialize in high-quality second citizenship and residency programs. Our international team is founded on a legacy of professionalism and ethical conduct.
                </div>
                <div className="md:w-1/2 md:px-0 px-8 md:pl-5">
                    We guide clients through the seamless process of acquiring citizenship by investment, thereby opening doors to global opportunities and an enhanced lifestyle.
                </div>
            </div>
            <div className="mt-8 flex md:flex-row md:px-0 px-8 flex-col font-play max-w-screen-lg gap-10 mx-auto text-sm leading-relaxed">
                <div className="md:w-1/2 md:border-r border-yellow-600 pr-5">
                    Our services extend beyond documentation. We offer comprehensive support that ensures a smooth transition for our clients, from initial consultation to successful application.
                </div>
                <div className="md:w-1/2 md:pl-5">
                    Our commitment to excellence is backed by strict adherence to industry standards and regulations, guaranteeing a premium, confidential, and hassle-free experience.
                </div>
            </div>
            <div className="w-full flex items-center justify-center mt-10">
                <span
                    className="md:mr-10"
                >
                    <Button
                        onClick={() => {
                            navigate("/about-us")
                        }}
                        text="Know More"
                    />
                </span>
            </div>
        </div>
    );
};

export default Introduction;