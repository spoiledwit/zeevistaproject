import AssessmentForm from "../assessment-form";

const DiscoverImmigrationOptions = ({
  slogan,
  html,
}: {
  slogan: string;
  title: string;
  html: string;
}) => {

  return (
    <div className=" w-full px-4 md:px-16 xl:px-32 flex flex-col md:flex-row ">
      <section className="md:w-[70%] flex flex-col gap-8 items-center md:items-start">
        <h3 className=" md:-translate-x-10 text-xl text-center md:text-start text-yellow-600 font-play md:text-3xl uppercase tracking-wide">
          {slogan}
        </h3>
        <section
          className=" prose leading-relaxed text-justify"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </section>
      
      <div className="md:w-[35%] h-min shadow-lg rounded-xl px-4 py-8  border">
        <h2 className="text-yellow-600 mb-5 text-center font-semibold font-play text-xl md:text-2xl tracking-wider">
          Apply For Free Assessment
        </h2>
        <AssessmentForm />
      </div>
    </div>
  );
};

export default DiscoverImmigrationOptions;
