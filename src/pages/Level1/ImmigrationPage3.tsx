import { useEffect } from "react";
import img from "../../../assets/london.webp"
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import data from "../../../content/data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import portugal2 from "../../../assets/polandCover.webp";

import uk from "../../../assets/ukcover.jpg";
import sydney from "../../../assets/sydney.webp";
import canada from "../../../assets/canada_im_cover.webp";

interface Props {
    setProgress: (progress: number) => void;
}

const ImmigrationPage3: React.FC<Props> = ({
    setProgress
}) => {

    const navigate = useNavigate();

    const { country } = useParams();
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
            name: "United Kingdom",
            href: "/immigration/uk",
            image: uk,
            plans: data["uk"].plans.values
        },
        {
            name: "Canada",
            href: "/immigration/canada",
            image: canada,
            plans: data["canada"].plans.values
        },
        {
            name: "Australia",
            href: "/immigration/australia",
            image: sydney,
            plans: []
        },
        {
            name: "Portugal",
            href: "/immigration/portugal",
            image: portugal2,
            plans: data["portugal"].plans.values
        }
    ]

    const getCountryContent = (country: any) => {
        switch (country) {
            case 'uk':
                return (
                    "Why you should do business in United Kingdom\n\n" +
                    "By far the biggest benefit of doing business in the UK is how easy and straightforward it is. According to the World Bank, the UK has one of the highest “ease of doing business scores” out of most countries across the world.\n" +
                    "This is because of how easy it is to enter the market. There are fewer costs and restrictions on starting a new enterprise in the UK when compared to other developed countries in Europe and the rest of the world. There is also a much higher availability of commercial opportunities across different market sectors due to the UK’s strong industry and manufacturing background and its current position as a global tech hub.\n" +
                    "The UK also has a strong business infrastructure and huge improvements in key areas including energy, transportation, and telecommunications are currently being made."
                );
            case 'portugal':
                return (
                    "Portugal top section\n\n" +
                    "Portugal is rapidly becoming one of Europe's most popular relocation destinations. This little Atlantic country has a lot to offer, from beautiful areas like the Algarve, Silver Coast, and Madeira to substantial tax breaks for remote workers and online business owners. Furthermore, Portugal boasts one of the lowest costs of living in Western Europe.\n" +
                    "Those who migrate to Portugal for the long term can apply for Portuguese citizenship after only five years, making it one of the shortest processes in the European Union. Dual citizenship may provide you with a slew of advantages, including enhanced travel flexibility, better tax planning opportunities, improved quality of life, and access to a haven."
                );
            case 'canada':
                return (
                    "For Canada PR TOP section\n\n" +
                    "Canada is ranked as the second best country in the world to live and work.\n" +
                    "It is one of the top destinations for overall sustainability, cultural influence, economic influence, entrepreneurship, and primarily for the quality of life.\n" +
                    "Once you get a PR, you have the right to move to any territory or province in Canada. You don’t have to stick with an employer, job, or even a province."
                );
            case 'australia':
                return (
                    "Australia top section\n\n" +
                    "Australia has always been a popular choice for individuals who desire to migrate to another country. The country has favorable factors such as a thriving economy which means there are more jobs in Australia. Australia promises a better quality of life and a multicultural society where there is peace and harmony. Australia offers a permanent residency or PR visa to immigrants. The Australia PR visa has a validity of five years. You can move into Australia with your family with a PR visa. You can apply for citizenship after living in Australia for four years with an Australia"
                );
            default:
                return "We are here to help you migrate to your dream country";
        }
    };

    return (
        <div className="w-full min-h-screen">
            <div className="relative h-screen w-full flex px-32 items-center"
                style={{
                    backgroundImage: country === undefined ? `url(${img})` : `url(${countries.filter(c => c.href.split('/')[2] === country)[0].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                <div className="flex flex-col w-full h-full justify-center mt-20 z-10">
                    <h1
                        className="text-white mt-10 font-play capitalize text-3xl md:text-5xl mb-4 leading-snug"
                    >
                        Migrate to &nbsp;
                        {country === undefined ? "dream country" : country}

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
            <div className="bg-white flex-col min-h-screen flex justify-center px-32 pb-20 w-ful">
                <h2 className=" font-play mb-10 text-yellow-600 mt-10 text-center text-2xl">
                    Select from the following countries to know more
                </h2>

                <div className="grid md:grid-cols-4 grid-cols-1 w-full gap-4">
                    {!country && countries.map((c, i) => (
                        <div
                            className="relative mx-auto bg-cover w-[310px] md:w-[280px] h-[500px] bg-center"
                            style={{ backgroundImage: `url(${c.image})` }}
                            key={i}
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center"
                            >
                                <div className="relative w-[490px] items-center flex-col flex  justify-center h-[462px] border m-5">
                                    <h2 className="text-white mx-2 text-center text-2xl md:text-2xl mb-14 font-play">
                                        {c.name === "Immigration" ? "Immigration Services" : c.name}
                                    </h2>
                                    <div
                                        className="flex flex-col w-full px-5 gap-2"
                                    >
                                        {c.plans.map((p, i) => (
                                            <Link
                                                className="flex text-white underline flex-col"
                                                key={i}
                                                to={p.href}
                                            >
                                                {p.name}
                                            </Link>
                                        ))}

                                    </div>
                                    <Link
                                        to={c.href}
                                        className="text-white hover:border-yellow-500 mb-[-30px] md:mb-0 md:text-md text-xs font-open font-medium text-center md:w-[130px] w-[100px] md:hover:w-[100px] transition-all duration-300 py-3 px-6 rounded-full border border-opacity-5 absolute bottom-10 glass">
                                        More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:gris-cols-4 grid-cols-1 w-full gap-4">
                {country && countries.map((c, i) => (
                        c.href.split('/')[2] === country && (
                            <div
                                key={i}
                                className="flex flex-wrap gap-4"
                            >
                                {c.plans.map((p, i) => (
                                    <div
                                        className="relative bg-cover  w-[310px] md:w-[280px] h-[500px]  bg-center"
                                        style={{ backgroundImage: `url(${c.image})` }}
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

export default ImmigrationPage3;