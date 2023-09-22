import DiscoverImmigrationOptions from "../components/immigration/discover-options";
import Hero from "../components/immigration/hero";
import ImmigrationPlans from "../components/immigration/immigration-plans";
import { CountryData, PlanData } from "../types";
import immigrationData from "../../content/immigration-data.json";
import { useParams } from "react-router-dom";

// export async function getStaticPaths({ params }: Props) {
//   const [country, plan] = params.plan;
//   let title: string;
//   if (plan) {
//     title = `${totTitleCase(plan)} | ${totTitleCase(
//       country
//     )} | ZeeVista Immigration Advisor`;
//   } else {
//     title = `${totTitleCase(country)} | ZeeVista Immigration Advisor`;
//   }

//   return {
//     title,
//     description: `${plan} plan for ${country} by ZeeVista Immigration Advisor`,
//   };
// }

const ImmigrationPage = () => {
  // const [country, plan] = params.plan;

  const { country, plan } = useParams();

  //   @ts-ignore
  const countryData = immigrationData[country] as CountryData;
  let planData: PlanData | undefined = undefined;

  if (plan) {
    planData = countryData.plans.values.find((p) => p.id === plan) as PlanData;
  }

  const optionsData = {
    slogan: planData?.description.slogan || countryData.description.slogan,
    title: planData?.description.title || countryData.description.title,
    html: planData?.description.html || countryData.description.html,
  };

  return (
    <div className="flex flex-col gap-20 mb-40">
      <Hero {...countryData.hero} />
      <DiscoverImmigrationOptions {...optionsData} />
      {countryData.plans && <ImmigrationPlans countryData={countryData} />}
    </div>
  );
};

export default ImmigrationPage;
