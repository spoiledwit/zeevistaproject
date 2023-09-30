import { useEffect } from "react";
import img from "../../../assets/london.webp"
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import data from "../../../content/data";
import { Link } from "react-router-dom";

import visas from "../../../assets/london.webp";
import passport from "../../../assets/map-passport.webp";

interface Props {
    setProgress: (progress: number) => void;
    country: string;
}

const DynamicPage: React.FC<Props> = ({
    setProgress,
    country
}) => {

    const navigate = useNavigate();

    useEffect(() => {
        setProgress(70);
        window.scrollTo(0, 0);
        setTimeout(() => {
            setProgress(100);
        }
            , 700);
    }, [country])


    const countries = [
        {
            name: "visit-visas",
            image: visas,
            plans: data["visit-visas"].plans.values
        },
        {
            name: "student-visas",
            image: visas,
            plans: data["student-visas"].plans.values
        },
        {
            name: "caribbean",
            image: passport,
            plans: data["caribbean"].plans.values
        },
    ]

    const getCountryContent = (country: any) => {
        switch (country) {
            case 'visit-visas':
                return (
                    "Visit visas open the doors to explore new countries, experience diverse cultures, and create unforgettable memories. They are typically easy to obtain for travelers, allowing for short-term stays to visit family, tour landmarks, or attend events. Each country has its unique attractions and visit visa policies, enabling tourists to plan their adventures and discover the world at their own pace."
                );
            case 'student-visas':
                return (
                    "Student visas are a gateway for aspiring individuals to pursue education in renowned institutions worldwide. They not only provide access to quality education but also a chance to experience a new culture, hone language skills, and build a global network. Countries with established educational systems attract students from across the globe, offering a diverse learning environment and opportunities for personal and professional growth."
                );
            case 'caribbean':
                return (
                    "Second citizenship has become a popular choice for high-net-worth individuals looking to invest their money in good opportunities. There are many benefits of second citizenship, including living and working in another country, travelling freely, and access to better education and healthcare.\n" +
                    "Second citizenship can also provide a sense of security and stability, especially for those from countries with political or economic instability. In addition, second citizenship can offer opportunities for investment and business growth."
                );
        }
    };

    return (
        <div className="w-full min-h-screen">
            <div className="relative h-screen w-full flex px-8 md:px-32 items-center"
                style={{
                    backgroundImage: country === undefined ? `url(${img})` : `url(${countries.filter(c => c.name === country)[0].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                <div className="flex flex-col w-full h-full justify-center mt-20 z-10">
                    <h1
                        className="text-white mt-10 font-play capitalize text-3xl md:text-5xl mb-4 leading-snug"
                    >
                        Explore {country && country.replace("-", " ")}
                        {country === "caribbean" && " Citizenship"}

                        <br />
                    </h1>
                    <span
                        className="text-white  mb-12"
                    >
                        {getCountryContent(country)}
                    </span>
                    <Button
                        onClick={() => {
                            navigate("/contact");
                        }}
                        text="Get Free Assessment"
                    />
                </div>
            </div>
            <div className="items-center flex-col min-h-screen flex justify-center px-8 md:px-32 pb-20 w-ful">
                <h2 className=" font-play  mb-10 text-yellow-600 mt-10 text-center text-2xl">
                    Select from the following countries to know more
                </h2>
                <div className="grid md:gris-cols-4 grid-cols-1 w-full gap-4">
                    {country && countries.map((c, i) => (
                        c.name === country && (
                            <div
                                key={i}
                                className="flex w-full items-center justify-center flex-wrap gap-4"
                            >
                                {c.plans.map((p, i) => (
                                    <div
                                        className="relative bg-cover w-[320px] md:w-[280px] h-[500px]  bg-center"
                                        style={{ backgroundImage: `url(${p.image})` }}
                                        key={i}
                                    >
                                        <div
                                            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center"
                                        >
                                            <Link
                                                className="flex flex-col text-center font-play mb-20 text-xl items-center text-white p-5"
                                                to={p.href}
                                            >
                                                {p.name}
                                            </Link>
                                            <Link
                                                to={p.href}
                                                className="text-white whitespace-nowrap hover:border-yellow-500 mb-[-30px] md:mb-0 md:text-md text-xs font-open font-medium text-center md:w-[130px] w-[100px] md:hover:w-[100px] transition-all duration-300 py-3 px-6 rounded-full border border-opacity-5 absolute bottom-10 glass">
                                                More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    ))}

                </div>
            </div>
        </div>
    )
}

export default DynamicPage;