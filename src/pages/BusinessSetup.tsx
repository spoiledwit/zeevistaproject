import AssessmentForm from "@/components/assessment-form";
import Hero from "@/components/BusinessSetup/hero";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { businessSetup } from "@/constants";
import Services from "@/components/home/services";
interface Props {
  setProgress: (progress: number) => void;
}
const BusinessSetup = ({ setProgress }: Props) => {
  const { id } = useParams();
  const data = businessSetup.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [id]);

  return (
    <div className="flex flex-col gap-20 mb-40">
      <Hero
        title={data?.title || ""}
        description={data?.description || ""}
        imageURL={data?.imageURL || ""}
      />
      <div className="w-full px-4 md:px-16 xl:px-32 flex flex-col md:flex-row">
        <section className="md:w-[70%] flex flex-col gap-8 items-center md:items-start">
          <h3 className=" md:-translate-x-10 text-xl text-center md:text-start text-yellow-600 font-play md:text-3xl uppercase tracking-wide">
            {data?.slogan}
          </h3>
          <section
            className=" prose leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: data?.content || "",
            }}
          />
        </section>
        <div className="md:w-[35%] h-min shadow-lg rounded-xl px-4 py-8  border sticky top-10">
          <h2 className="text-yellow-600 mb-5 text-center font-semibold font-play text-xl md:text-2xl tracking-wider">
            Apply For Free Assessment
          </h2>
          <AssessmentForm />
        </div>
      </div>
      {/* <h1 className="text-center text-2xl md:text-3xl font-semibold font-play text-yellow-600 mt-20  px-4 md:px-16 xl:px-32">
        Explore our Business Setup Services
      </h1>
      <div className="w-full px-4 md:px-16 xl:px-32 flex flex-wrap">
        {businessSetup.map((card) => (
          <Link
            to={`/business-setup/${card.id}`}
            key={card.id}
            className="w-full md:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-white shadow-lg rounded-xl p-4 h-full border">
              <h2 className="text-yellow-600 mb-5 text-center font-semibold font-play text-xl md:text-2xl tracking-wider">
                {card.title}
              </h2>
              <p className="text-center">{card.slogan}</p>
            </div>
          </Link>
        ))}
      </div> */}
      <Services setColor={() => {}} />
    </div>
  );
};

export default BusinessSetup;
