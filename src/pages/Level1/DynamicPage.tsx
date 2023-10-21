import { useEffect } from "react";
import img from "../../../assets/london.webp"
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import data from "../../../content/data";
import { Link } from "react-router-dom";
import student from "../../../assets/student.jpg";
import visas from "../../../assets/visit_visas.jpeg";
import passport from "../../../assets/crb_passports.jpg";
import { Helmet } from "react-helmet";

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
            image: student,
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
                    "Visit visas, such as family visit visas, open the doors to explore new countries, experience diverse cultures, and create unforgettable memories. With the assistance of visit visa consultants, these visas are typically easy to obtain, allowing for short-term stays to visit family, tour landmarks, or even attend educational events with a student visa. Each country has its unique attractions and visit visa policies, often outlined by their immigration services, enabling tourists to plan their adventures and discover the world at their own pace."
                );
            case 'student-visas':
                return (
                    "Student visas, often secured through specialized visa consultants, are the key for ambitious individuals to access renowned educational institutions globally. These visas not only offer a pathway to quality education but also give students the unique opportunity to immerse themselves in new cultural experiences, hone their language skills, and build an expansive global network. Countries with robust educational systems particularly attract a wide array of international students, creating a diverse and enriching learning environment that contributes to both personal and professional growth."
                );
            case 'caribbean':
                return (
                    "Second citizenship is gaining traction among high-net-worth individuals, particularly through options like Caribbean citizenship investment. This route offers a myriad of advantages, such as the freedom to travel using a Caribbean passport and improved access to quality education and healthcare. For individuals hailing from politically or economically unstable countries, a second citizenship can serve as a safety net, offering much-needed stability. Furthermore, owning a Caribbean island passport can unlock unique business and investment opportunities."
                    );
        }
    };

    return (
        <div className="w-full  min-h-screen">
            <Helmet>
                <title>ZeeVista Immigration Advisors</title>
                <meta name="description" content="About Us" />
            </Helmet>
            <div className="relative h-screen w-full flex px-8 md:px-32 items-center"
                style={{
                    backgroundImage: country === undefined ? `url(${img})` : `url(${countries.filter(c => c.name === country)[0].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="flex flex-col w-full h-full justify-center mt-20 z-10">
                    <h1
                        className="text-white mt-10 font-play capitalize text-3xl md:text-5xl mb-4 leading-snug"
                    >
                        Explore {country && country.replace("-", " ")}
                        {country === "caribbean" && " Citizenship"}

                        <br />
                    </h1>
                    <span
                        className="text-white text-xl text-justify mb-12"
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
            <div className="items-center flex-col min-h-screen flex justify-center px-8 md:px-32 pb-32 w-ful">
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
                                        className="relative flex items-center justify-center bg-cover w-[320px] md:w-[280px] h-[500px]  bg-center"
                                        style={{ backgroundImage: `url(${p.image})` }}
                                        key={i}
                                    >
                                        <div className="w-[90%] h-[94%] z-10 border border-white" />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
                                        <div
                                            className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center"
                                        >
                                            <span className="flex flex-col mx-5">

                                                <Link
                                                    className="flex flex-col text-center font-play  text-2xl items-center text-white p-5"
                                                    to={p.href}
                                                >
                                                    {p.name}
                                                </Link>
                                                <p className="text-white  text-center">
                                                    {p.subtitle}
                                                </p>

                                            </span>
                                            <Link
                                                to={p.href}
                                                className="text-white whitespace-nowrap hover:border-yellow-500 md:text-md text-xs font-open font-medium text-center md:w-[130px] w-[100px] md:hover:w-[100px] transition-all duration-300 py-3 px-6 rounded-full border border-opacity-5 absolute bottom-10 glass">
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