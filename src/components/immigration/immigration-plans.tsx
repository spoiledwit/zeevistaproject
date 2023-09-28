import { CountryData, PlanData } from "../../types";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const PlanCard = ({
  countryName,
  plan,
}: {
  countryName: string;
  plan: PlanData;
}) => {
  const pathname = useLocation().pathname;
  return (
    <Link
      to={plan.href}
      className={`hover:scale-105 relative transition duration-300 ease-in-out overflow-hidden rounded-2xl`}
    >
      <div className="w-full object-cover relative h-[280px] bg-primary-blue rounded-lg overflow-hidden">
        <img
        //@ts-ignore
          src={plan.image}
          alt="Plan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 w-full h-full ${
            pathname ===
            `/immigration/${countryName.toLocaleLowerCase()}/${plan.id}`
              ? "bg-black"
              : "bg-black"
          } opacity-50`}
        ></div>
        <div className="absolute inset-0 px-3 py-5 justify-between w-full h-full flex flex-col bottom-0 gap-4">
          <h4
            className={`text-lg text-white uppercase  ${
              pathname ===
              `/immigration/${countryName.toLocaleLowerCase()}/${plan.id}`
                ? "text-primary-gold"
                : "text-white"
            }`}
          >
            {plan.name}
          </h4>
          <p className="text-white text-xs">{plan.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

const ImmigrationPlans = ({ countryData }: { countryData: CountryData }) => {
  return (
    <section className="w-full px-8 md:px-32 flex flex-col items-center md:items-start gap-2">
      <h3 className="font-play text-yellow-600 text-2xl uppercase tracking-wide">
        {countryData.name}
      </h3>
      <div className=" w-full gap-8 md:gap-0 flex flex-col md:flex-row text-center md:text-start items-center justify-between">
        <p className="md:w-1/2 text-gray-900 tracking-wide">
          {countryData.plans.description}
        </p>
      </div>
      <div className="w-full mt-3 grid grid-cols-2 md:grid-cols-5 md:gap-8 gap-4">
        {countryData.plans.values.map((p, i) => (
          <PlanCard key={i} plan={p} countryName={countryData.name} />
        ))}
      </div>
    </section>
  );
};

export default ImmigrationPlans;
