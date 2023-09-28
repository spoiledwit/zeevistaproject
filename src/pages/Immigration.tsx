import DiscoverImmigrationOptions from "../components/immigration/discover-options";
import Hero from "../components/immigration/hero";
import ImmigrationPlans from "../components/immigration/immigration-plans";
import { CountryData, PlanData } from "../types";
import immigrationData from "../../content/data.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const ImmigrationPage = ({setProgress}: any) => {

  const { country, plan } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }
      , 300);
      
  }, [country, plan])

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
