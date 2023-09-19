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
    <div className="w-full px-4 md:px-16 lg:px-48 xl:px-60 flex flex-col md:flex-row gap-12 md:gap-16">
      <section className="md:w-7/12 flex flex-col gap-8 items-center md:items-start">
        <h3 className=" md:-translate-x-10 text-center md:text-start text-lg text-primary-gold uppercase tracking-wide">
          {slogan}
        </h3>
        <section
          className=" prose leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </section>
      <div className="md:w-5/12 h-min shadow-2xl shadow-black/10 bg-primary-blue rounded-xl px-4 py-8">
        <h2 className="text-yellow-600 font-semibold font-serif text-xl md:text-2xl text-center tracking-wider">
          Apply For Free Assessment
        </h2>
        <AssessmentForm />
      </div>
    </div>
  );
};

export default DiscoverImmigrationOptions;
