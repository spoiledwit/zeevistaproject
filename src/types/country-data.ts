import { PlanData } from ".";

type CountryData = {
  name: string;
  hero: {
    title: string;
    description: string;
    imageURL: string;
  };
  description: {
    title: string;
    html: string;
    slogan: string;
  };
  plans: {
    title: string;
    description: string;
    values: PlanData[];
  };
};

export default CountryData;
