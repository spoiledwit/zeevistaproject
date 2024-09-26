import { useEffect } from "react";
import img from "../../../assets/london.webp";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import data from "../../../content/data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import portugal2 from "../../../assets/polandCover.webp";
import uk from "../../../assets/uk-visa.webp";
import sydney from "../../../assets/sydney.webp";
import canada from "../../../assets/canada.jpeg";
import portugal from "../../../assets/portugal.jpeg";
import { Helmet } from "react-helmet";
import AssessmentForm from "@/components/assessment-form";

interface Props {
  setProgress: (progress: number) => void;
}

const ImmigrationPage3: React.FC<Props> = ({ setProgress }) => {
  const navigate = useNavigate();

  const { country } = useParams();
  useEffect(() => {
    setProgress(70);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setProgress(100);
    }, 700);
  }, [country]);

  const countries = [
    {
      name: "United Kingdom",
      href: "/immigration/uk",
      image: uk,
      plans: data["uk"].plans.values,
    },
    {
      name: "Canada",
      href: "/immigration/canada",
      image: canada,
      plans: data["canada"].plans.values,
    },
    {
      name: "Australia",
      href: "/immigration/australia",
      image: sydney,
      plans: data["australia"].plans.values,
    },
    {
      name: "Portugal",
      href: "/immigration/portugal",
      image: portugal,
      plans: data["portugal"].plans.values,
    },
  ];

  const getCountryTitle = (country: any) => {
    switch (country) {
      case "uk":
        return "UK Visa From Dubai ZeeVista Advisors";
      case "portugal":
        return "Portugal Work Visa from Dubai: ZeeVista Business Consultants";
      case "canada":
        return "Canada Immigration from the UAE: Your Bridge to the Great";
      case "australia":
        return "Australia Immigration Consultancy in Dubai: ZeeVista";
      default:
        return "ZeeVista Advisors: Your Bridge to UK Opportunities";
    }
  };

  const getCountryDescription = (country: any) => {
    switch (country) {
      case "uk":
        return "UK Immigration Consultants in Dubai:  ZeeVista Advisors  in Dubai simplify your journey. Get expert guidance & settle smoothly.";
      case "portugal":
        return "Explore the range of Portugal visas from visit to work and business, offering a blend of natural beauty, career opportunities, and vibrant lifestyle. Find your pathway to the Portuguese dream!";
      case "canada":
        return "UK Immigration to Dubai accept diversity and take advantage of opportunities. Get advice from an expert on immigration at ZeeVista.";
      case "australia":
        return "Start your Australia immigration journey with ease with ZeeVista, Best Australia immigration consultancy in Dubai. Expert guidance for all visa procedures.";
      default:
        return "Migration, often guided by skilled immigration consultants, brings a multitude of benefits including personal growth, better economic prospects, and an improved standard of living. The immigration process itself can be navigated more efficiently with the aid of qualified immigration services, resulting in a smoother social and cultural integration into the new country.";
    }
  };

  const getCountryContent = (country: any) => {
    switch (country) {
      case "uk":
        return "The UK's history, culture, and economy attract people from Dubai. Whether you want to start a business, work, or start over, the UK immigration process may seem overwhelming. This is where ZeeVista Advisors (Best Uk Immigration Consultancy in Dubai), your trusted Dubai-based partner for UK immigration, steps in.";
      case "portugal":
        return "Portugal has beautiful nature and lively cities with charm and character. Lisbon, the capital city, is a bustling metropolis that seamlessly blends traditional architecture with modern amenities. The streets are narrow and have colorful buildings, cafes, and markets, creating a lively and captivating atmosphere. Portugal also needs skilled professionals in technology, finance, and healthcare. The country's focus on innovation and entrepreneurship has created many start-ups and tech hubs. This offers great chances for people who want to succeed in these industries.        ";
      case "canada":
        return "Canada is proud of its diversity of culture. It is a wonderful destination for those looking to learn about diverse cultural practices. There are many different ethnic groups that make up the populace. This means that there is a wide range of diverse cultures, traditions and cuisines to try. Canada has a proud and diversity in culture. It is an ideal destination for those looking to explore diverse cultural traditions. People of many different ethnic backgrounds form the majority of people. This means that there is a wide range of diverse cultures, traditions and cuisines to savor.";
      case "australia":
        return "Ever considered moving from the captivating cities of Dubai to the diverse landscapes of Australia? This is a decision many individuals are making. Australia boasts superior healthcare, outstanding educational opportunities, a robust economy, a hospitable culture, an agreeable climate, captivating landscapes, and much more. This is where an Australia immigration consultant in Dubai comes to your assistance. In this article, we will walk you through the entire process of Australia migration from Dubai.";
      default:
        return "Migration, often guided by skilled immigration consultants, brings a multitude of benefits including personal growth, better economic prospects, and an improved standard of living. The immigration process itself can be navigated more efficiently with the aid of qualified immigration services, resulting in a smoother social and cultural integration into the new country.";
    }
  };

  const getCountryContent2 = (country: any) => {
    switch (country) {
      case "uk":
        return (
          <span>
            <h2
              dir="ltr"
              className="font-bold text-3xl"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <a
                href="https://www.zeevistaadvisors.com/about-us"
                style={{ textDecoration: "none" }}
              >
                ZeeVista
              </a>{" "}
              Advisors: Your Bridge to UK Opportunities
            </h2>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              ZeeVista Advisors is a leading&nbsp; immigration consultancy firm
              in Dubai , specializing in UK visa applications &nbsp;and
              relocation services. Our team has 8 years of experience in UK
              immigration . We understand the complex laws and procedures. We
              are adept at managing evolving regulations and providing precise
              guidance to our customers.
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              Our expertise extends to various areas of&nbsp; UK immigration
              from Dubai , including visa applications, job visas, bringing
              relatives together, citizenship applications, and appeals. We have
              assisted numerous individuals, families, and businesses in
              achieving their immigration objectives. Our guidance has made the
              legal process more efficient and expedited.
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              We are experts in UK immigration and have a skilled team. People
              and businesses trust us for immigration assistance. Our goal is to
              provide excellent service and achieve successful outcomes for our
              clients. We strive to make their immigration process simple and
              free from stress.
            </p>
            <h2
              dir="ltr"
              className="font-bold text-3xl"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              Why Choose ZeeVista Advisors for Your UK Immigration from Dubai
              Journey?
            </h2>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Expertise and Experience
              </span>
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : Our team in the UK knows the latest visa rules and
                requirements. We keep up with policy changes and adapt our
                approach to your situation, increasing your chances of success.
                That's Why we have best&nbsp;
              </span>
              uk immigration consultancy in dubai
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Personalized Service
              </span>
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : We believe in a client-centric approach, providing
                personalized attention and guidance throughout the process. We
                understand your unique aspirations and goals, crafting a
                customized immigration strategy that aligns with your needs.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Streamlined Process
              </span>
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : We handle all the paperwork and documentation, ensuring
                accuracy and completeness. We take the stress out of the
                process, allowing you to focus on your relocation preparations.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Constant Support
              </span>
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : We are available to answer your questions and address your
                concerns every step of the way. We will continue to assist you
                after we approve your visa. Our goal is to assist you in
                smoothly adjusting to your new life in the UK.
              </span>
            </p>
            <h2 dir="ltr" className="font-bold text-3xl mb-5">
              A Spectrum of UK Visa Options for You
            </h2>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "-12pt 0pt 6pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                The UK offers a diverse range of visa options for individuals
                from Dubai, catering to various needs and aspirations.&nbsp;
              </span>
              ZeeVista Advisors is the top UK immigration consultancy in Dubai
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                . They can assist in finding the right visa for you.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 6pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Investor Visa
              </span>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : For entrepreneurs and investors seeking to establish or invest
                in a business in the UK.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 6pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Skilled Worker Visa
              </span>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : For skilled professionals with job offers from UK sponsors.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 6pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                General Visa
              </span>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : For skilled workers with exceptional talent or skills in
                specific fields.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 6pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Start-up Visa
              </span>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : For entrepreneurs with innovative business ideas seeking to
                establish a business in the UK.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 6pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Family Visa
              </span>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : For individuals wishing to join family members already
                residing in the UK.
              </span>
            </p>
            <h2 className="font-bold text-3xl mb-5" dir="ltr">
              ZeeVista Advisors: Beyond Visa Applications
            </h2>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Our services extend beyond securing your visa. We provide
                comprehensive relocation support, including:
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                We can help you find housing in the UK, whether you need a
                temporary rental or a permanent home.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Settlement support
              </span>
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                : We assist with opening bank accounts, registering with local
                authorities, and navigating the UK's tax system.
              </span>
            </p>
            <h2 dir="ltr" className="font-bold text-3xl mb-5">
              UK Work Permit Visa From Dubai
            </h2>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              The UK work permit visa from Dubai
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                &nbsp;is a popular choice for skilled professionals looking for
                jobs in the UK. ZeeVista Advisors in Dubai helps with UK visa
                applications and provides expert assistance throughout the
                process.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Ready to start your journey?
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "0pt 0pt 18pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Contact ZeeVista Advisors today for a free consultation and let
                us guide you on your&nbsp;
              </span>
              journey to the UK
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                . If you looking for best&nbsp;
              </span>
              UK Immigration Consultants in Dubai
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                ! We are confident that with our expertise and personalized
                support, you can turn your&nbsp;
              </span>
              UK immigration from Dubai
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                &nbsp;dream into a reality.
              </span>
            </p>
            <p
              dir="ltr"
              style={{
                lineHeight: "1.7999999999999998",
                backgroundColor: "#ffffff",
                marginTop: "0pt",
                marginBottom: "0pt",
                padding: "-6pt 0pt 0pt 0pt",
              }}
            >
              <span
                style={{
                  fontSize: "12pt",
                  fontFamily: "Arial,sans-serif",
                  color: "#191b23",
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap",
                }}
              >
                Visit our website or call us to schedule your consultation.
              </span>
            </p>
          </span>
        );
      case "portugal":
        return (
          <span className="space-y-5">
            <h2 className="font-bold text-3xl">
              Your Guide to Obtaining a Portugal Work Visa from Dubai
            </h2>
            <p>
              Begin by researching the visa that matches your goals. Remember,
              preparing well is important for achieving your Portuguese dream.
              Portugal is a stunning country that boasts a plethora of golden
              beaches and vibrant cities.
            </p>
            <p>
              The country has beautiful coastlines with long beaches and clear
              waters. These beaches are known for their clean sand and blue
              water. They are ideal for beach lovers and water sports
              enthusiasts.
            </p>
            <p>
              Portugal has beautiful nature and lively cities with charm and
              character. Lisbon, the capital city, is a bustling metropolis that
              seamlessly blends traditional architecture with modern amenities.
              The streets are narrow and have colorful buildings, cafes, and
              markets, creating a lively and captivating atmosphere.
            </p>
            <p>
              Portugal's cities are a captivating blend of historic allure and
              modern dynamism. Nestled along the Iberian Peninsula's western
              coast, they're not just visually stunning with their winding
              cobbled streets, colorful azulejo tiles, and sun-drenched squares,
              but also vibrant hubs brimming with exciting opportunities for
              skilled professionals and entrepreneurs.
            </p>
            <p>
              Portugal also needs skilled professionals in technology, finance,
              and healthcare. The country's focus on innovation and
              entrepreneurship has created many start-ups and tech hubs. This
              offers great chances for people who want to succeed in these
              industries.
            </p>
            <p>
              Portugal is like a magnet for entrepreneurs, thanks to its cool
              business vibes. With low corporate taxes and a super supportive
              start-up scene, it's no wonder folks are flocking there to
              kick-start their businesses. Plus, the government is all in for
              entrepreneurship and foreign investment. So yeah, Portugal is
              pretty much the perfect spot to get your business off the ground
            </p>
            <h2 className="font-bold text-2xl">Visas for Every Dream:</h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Portugal Visit Visa Consultant in Dubai:</strong> For a
                taste of Portugal's allure, the Schengen visa grants a 90 days
                stay within 180 days. Perfect for soaking up the sights,
                savoring the gastronomy, and exploring the rich cultural
                tapestry.
              </li>
              <li>
                <strong>Portugal Work Visa from Dubai:</strong> Skilled
                professionals can leverage Portugal's booming tech, tourism, and
                renewable energy sectors. The highly skilled visa caters to
                specialists with relevant achievements and experience. For
                non-EU citizens, securing a job offer from a Portuguese company
                is crucial.
              </li>
              <li>
                <strong> Portugal Business Visa from Dubai:</strong>
                Entrepreneurs and investors can tap into Portugal's favorable
                business environment and attractive tax benefits. The D7 visa
                needs proof of stable income, while the Golden Visa gives
                residency for investing in property or creating jobs.
              </li>
              <li>
                The National Visa of Portugal, commonly known as the D Visa, is
                a specific category of visa intended for non-European Union
                citizens. Portugal, a captivating tapestry of golden coastlines,
                medieval castles, and vibrant cities, beckons travelers with its
                sun-kissed charm and rich heritage. But beyond the tourist
                facade lies the allure of extended stays and even permanent
                residency.
              </li>
            </ul>
            <h2 className="font-bold text-2xl">
              Navigating the Portugal Work Permit Process:
            </h2>
            <p>
              The path to your Portuguese adventure might seem daunting, but
              fret not! Portugal's SEF (SEF) offers comprehensive online
              resources and streamlined application procedures. Familiarizing
              yourself with the specific requirements for your chosen visa is
              crucial. Partnering with experienced immigration consultants can
              ease the complexities and ensure a smooth journey.
            </p>
            <h2 className="font-bold text-2xl">Portugal Work Permit Perks:</h2>
            <p>
              Portugal work permit visa from Dubai isn't just a gateway to
              professional opportunities; it unlocks a treasure trove of
              benefits. If you have a work permit, you can benefit from
              Portugal's excellent healthcare system. Additionally, you will
              have the freedom to travel within the Schengen Zone. This will
              greatly enhance your experience of living in Europe.
            </p>
            <h2 className="font-bold text-2xl">Portuguese Life:</h2>
            <p>
              As you settle into your Portuguese life, embrace the warmth of the
              local community. Dive into the vibrant festivals, sip on vinho
              verde in charming cafes, and explore the breathtaking landscapes.
              From surfing the Algarve's waves to delving into Lisbon's historic
              Alfama district, Portugal offers endless possibilities for leisure
              and cultural immersion.
            </p>
            <h2 className="font-bold text-2xl">Ready to Embrace Portugal?</h2>
            <p>
              If you're experienced, starting a business, or looking for a sunny
              place, Portugal is waiting for you. Begin by finding the right
              visa and remember that being prepared is important for achieving
              your Portuguese dream. Contact Now Portuguese embassy in Dubai
              ZeeVista Advisors and Portugal Work Permit from Dubai
            </p>
            <p>
              So, are you ready to trade in your routine for the rhythm of
              Portugal? Let the Iberian adventure begin!
            </p>
          </span>
        );
      case "canada":
        return (
          <span className="space-y-5">
            <h2 className="font-bold text-3xl">
              Top Immigration Consultants in Dubai: Powering Your Canadian
              Immigration Dream
            </h2>
            <p>
              Canada is a very attractive Country. Let's look at the main
              factors that have brought it to high on the list:
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                Canada is welcoming and diverse, allowing immigrants to feel
                welcome. Celebrate diversity, celebrate the past and create
                connections within an environment that is inclusive.
              </li>
              <li>
                A strong commitment to sustainability. : Canada values
                environmental protection. It is actively fighting the effects of
                climate change while promoting sustainable methods of living.
                Living within the natural world and contribute to a cleaner
                future for the generations to be.
              </li>
              <li>
                PR can lead the way to Canadian citizenship. Canadian
                citizenship grants citizens the rights of citizens. These
                include the right to vote and running for office and travel to
                60+ countries without visa.
              </li>
              <li>
                Contact ZeeVista Best Canada Immigration Consultants in Dubai
              </li>
            </ul>
            <h2 className="font-bold text-3xl">
              Work Visa Consultants in Dubai: Start Your Job Adventure in Canada
            </h2>
            <p>
              If you're planning to be employed in Canada and require assistance
              with immigration, visa experts in Dubai can help. They are experts
              on Canadian immigration and will guide you through the process of
              obtaining a work visa.
            </p>
            <p>
              ZeeVista Advisors is the best Canada work permit consultants in
              Dubai is one of the consulting firms that provides valuable
              assistance.Work visa specialists have a thorough understanding of
              the laws and procedures associated with Canadian immigration. They
              assist in selecting the right immigration program for you and
              guide you through the application process.
            </p>
            <p>
              Consultants for canada work visa from dubai can offer expert
              advice on Express Entry PNPs, Express Entry and The Atlantic
              Immigration Pilot. If you're looking to learn more the details
              about these visas, they are able to assist you.
            </p>
            <p>
              Getting a Canadian visa can be scary, but a reliable guide can
              make it easier. Contact ZeeVista Advisors in Dubai for help with
              your Canadian dream. They are the most experienced canada work
              visa consultants in dubai and can assist and guide you with
              professional guidance.
            </p>
            <p>
              Getting a Canadian visa can be scary, but a reliable guide can
              make it easier. Contact ZeeVista Advisors in Dubai for help with
              your Canadian dream. They are the most experienced canada work
              visa consultants in dubai and can assist and guide you with
              professional guidance.
            </p>
            <p>
              They aid in locating the right immigration program and help
              applicants through the process. Find work in Canada quickly and
              easily using the work Permit Visa! No matter if you're an
              experienced, skilled or just recently graduated, Canada welcomes
              your abilities and goals.
            </p>
            <p>
              An Work Permit Visa allows you to legally work in Canada with a
              specific employer or work. It offers you the opportunity to
              investigate various fields like agriculture, technology,
              healthcare and research.
            </p>
            <h2 className="font-bold text-3xl">
              Canada Migration Agency in Dubai: Your Trusted Partner for a
              Brighter Future
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                Express Entry offers a program that prioritizes professional
                with a high level of expertise. It looks at factors like
                education level, age as well as language proficiency and the
                amount of work experience. Every province tailors provincial
                nominee Programs (PNPs) according to satisfy the specific
                requirements of their province. They seek immigrants who have
                the experience and skills that are in line with their economic
                objectives.
              </li>
              <li>
                Atlantic Immigration Pilot Atlantic Immigration Pilot program
                assists skilled workers from four Atlantic provinces to become
                permanent residents. It focuses on professions that face labour
                shortages. To migrate to Canada, contact ZeeVista.
              </li>
            </ul>
            <h2 className="font-bold text-3xl">
              Participate on Your Canadian Adventure Today
            </h2>
            <p>
              Canada welcomes you with welcoming arms, with the future is full
              of possibilities. Contact{" "}
              <Link to="/about-us" className="text-blue-500">
                ZeeVista Advisors
              </Link>
              , Canadian immigration consultants in Dubai, to start making your
              Canadian dream come true. With their assistance and guidance you
              will be able to start your life in the country of your dreams with
              only an official passport.
            </p>
          </span>
        );

      case "australia":
        return (
          <span className="space-y-5">
            <h2 className="font-bold text-3xl">
              Why australia work visa from Dubai ?
            </h2>
            <p>
              <strong> Why Australia?: </strong>
              Australia is a great place to live, with plenty of good jobs,
              especially in IT, healthcare, teaching, and engineering. Its
              living conditions are some of the best in the world. Plus, people
              from many different cultures live in Australia, and they all get
              along well. So, it's a really good place to consider moving to.
            </p>
            <h2 className="font-bold text-3xl">
              Viable Visa Options for Australia Migration from Dubai
            </h2>
            <p>
              Australia offers a variety of visa options for potential
              immigrants:
            </p>
            <ul className="space-y-3 list-decimal  pl-5">
              <li>
                <strong>Skilled Migration Visas: </strong>
                Suitable for those with in-demand skills and proficiency in
                English, especially those under 45. With the assistance of an
                Australia work permit consultant in Dubai, one can explore visa
                options such as subclass 189, subclass 190, and subclass 491.
              </li>
              <li>
                <strong>Australia Business and Investment Visas: </strong>
                Ideal for individuals aiming to invest or initiate a business in
                Australia. With an Australia business visa in Dubai, such as
                subclass 188 or 132, you can turn this dream into reality.
              </li>
              <li>
                <strong>Australia Student Visa: </strong>
                If you want to study in Australia, which is known for its great
                schools, you can apply for a Student Visa (subclass 500). It's a
                popular choice for students from all over the world.
              </li>
              <li>
                <strong>Australia Family Visa: </strong>
                If you have family already residing in Australia, you can obtain
                a Family Visa like Partner visa (subclass 309/100) or Parent
                visa (subclass 143).
              </li>
              <li>
                <strong>Australia Tourist Visa: </strong>
                Secure a Visitor Visa (subclass 600) for up to 12-month stays.
                Ideal for tourism and family visits, but working is not allowed.
                Check official guidelines based on your country.
              </li>
            </ul>
            <h2 className="font-bold text-3xl">Detailed Immigration Process</h2>
            <p>
              The process of immigrating to Australia from Dubai can be
              intricate due to the extensive procedures and specific visa
              categories. Here's how it generally works:
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Selecting the Right Visa Type: </strong>
                Identifying the most suitable visa category that aligns with
                your circumstances and ambitions.
              </li>
              <li>
                <strong>Filing an EOI: </strong>
                To express your interest in a visa, simply submit an Expression
                of Interest (EOI) through the SkillSelect online system. Make
                sure to mention your preferred visa category and provide all
                necessary information.
              </li>
              <li>
                <strong> Invitation Stage: </strong>
                If your profile does well and scores highly in Australia's
                points-based immigration system, you'll get an invite to apply
                for your visa.
              </li>
              <li>
                <strong>Compilation and Submission of Documents: </strong>
                This consists of detailed personal and professional information,
                along with health and character evaluations. The need for such
                documentation varies according to the chosen visa category.
              </li>
              <li>
                <strong>Visa Application: </strong>
                After receiving an invitation, you must promptly submit your
                visa application within a 60-day window.
              </li>
              <li>
                <strong>Receiving Your Visa: </strong>
                After a thorough evaluation and approval of your application,
                you will receive your visa. This marks the beginning of your
                exciting preparation to relocate to Australia.
              </li>
            </ul>
            <p>
              The Australian immigration process is designed to ensure only
              qualified individuals get the green light. It could get
              overwhelming. However, employing the services of an Australia
              immigration consultant in Dubai can simplify this process.
              Australia work visa in Dubai or Australia visit visa consultant in
              Dubai are experts who can guide and support you throughout this
              process.
            </p>
            <p>
              In conclusion, relocating to a new country is a profound decision
              that requires diligent planning and execution. Yet, with the
              extensive opportunities Australia puts at your disposal, the
              benefits do indeed outweigh the obstacles. So, embark on your
              immigration journey today because your Australian dream is only
              steps away.
            </p>
            <h2 className="font-bold text-3xl">
              More Services at ZeeVista Advisors
            </h2>
            <p>ZeeVista Advisors also provides these immigrations:</p>
            <ul className="space-y-3 list-decimal  pl-5 text-blue-500">
              <li>
                <Link to="/immigration/uk">UK Immigration</Link>
              </li>
              <li>
                <Link to="/immigration/canada">Canada Immigration</Link>
              </li>
              <li>
                <Link to="/immigration/portugal">Portugal Immigration</Link>
              </li>
            </ul>
          </span>
        );
    }
  };
  return (
    <div className="w-full min-h-screen">
      <Helmet>
        <title>{getCountryTitle(country)}</title>
        <meta name="description" content={getCountryDescription(country)} />
      </Helmet>
      <div
        className="relative h-screen w-full flex px-8 md:px-32 items-center"
        style={{
          backgroundImage:
            country === undefined || country === "uk"
              ? `url(${img})`
              : country === "portugal"
              ? `url(${portugal2})`
              : `url(${
                  countries.filter((c) => c.href.split("/")[2] === country)[0]
                    .image
                })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="flex flex-col w-full h-full justify-center mt-20 z-10">
          <h1 className="text-white mt-10 font-play capitalize text-3xl md:text-5xl mb-4 leading-snug">
            {getCountryTitle(country)}
            <br />
          </h1>
          <span className="text-white text-justify mb-12">
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
      <div className="bg-white flex-col min-h-screen flex justify-center px-8 md:px-16 lg:px-24 pb-32 w-ful">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="my-20 md:w-2/3">{getCountryContent2(country)}</div>
          <div className="sticky top-20 md:my-20 md:w-1/3 h-min shadow-lg rounded-xl px-4 py-8  border">
            <h2 className="text-yellow-600 mb-5 text-center font-semibold font-play text-xl md:text-2xl tracking-wider">
              Apply For Free Assessment
            </h2>
            <AssessmentForm />
          </div>
        </div>
        <h2 className=" font-play mb-10 text-yellow-600 mt-10 text-center text-3xl">
          Select from the following countries to know more
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 w-full gap-4">
          {!country &&
            countries.map((c, i) => (
              <div
                className="relative mx-auto bg-cover w-[310px] md:w-[280px] h-[500px] bg-center"
                style={{ backgroundImage: `url(${c.image})` }}
                key={i}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" />
                <div className=" w-full h-full flex items-center justify-center">
                  <div className="relative w-[490px] items-center flex-col flex  justify-center h-[462px] border m-5">
                    <h2 className="text-white mx-2 text-center text-3xl md:text-3xl mb-6 mt-20 font-play">
                      {c.name === "Immigration"
                        ? "Immigration Services"
                        : c.name}
                    </h2>
                    <div className="flex h-full  flex-col w-full px-5 gap-4">
                      {c.plans.map((p, i) => (
                        <Link
                          className="flex text-white text-center hover:text-gray-200 underline flex-col"
                          key={i}
                          to={p.href}
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to={c.href}
                      className="text-white hover:border-yellow-500 md:mb-0 md:text-md text-xs font-open font-medium text-center md:w-[130px] w-[100px] md:hover:w-[100px] transition-all duration-300 py-3 px-6 rounded-full border border-opacity-5 absolute bottom-10 glass"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="grid md:gris-cols-4 grid-cols-1 w-full gap-4">
          {country &&
            countries.map(
              (c, i) =>
                c.href.split("/")[2] === country && (
                  <div key={i} className="flex flex-wrap gap-4">
                    {c.plans.map((p, i) => (
                      <div
                        className="relative bg-cover flex items-center justify-center w-[310px] md:w-[280px] h-[500px]  bg-center"
                        style={{ backgroundImage: `url(${p.image})` }}
                        key={i}
                      >
                        <div className="w-[90%] z-20 h-[94%] border border-white absolute" />
                        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-50" />
                        <div className="absolute top-0 z-20 left-0 w-full h-full flex items-center justify-center">
                          <Link
                            className="flex flex-col text-center font-play mb-20 text-3xl items-center text-white p-5"
                            to={p.href}
                          >
                            {p.name}
                          </Link>
                          <Link
                            to={p.href}
                            className="text-white whitespace-nowrap hover:border-yellow-500 md:mb-0 md:text-md text-xs font-open font-medium text-center md:w-[130px] w-[100px] md:hover:w-[100px] transition-all duration-300 py-3 px-6 rounded-full border border-opacity-5 absolute bottom-10 glass"
                          >
                            More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default ImmigrationPage3;
