const StartProcess = () => {
  return (
    <div className="w-full h-max  py-10 px-4 md:px-16 lg:px-48 xl:px-80 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
      <section className="md:w-[60%] flex flex-col gap-8 md:gap-12">
        <h3 className="font-serif font-medium text-yellow-600 text-center md:text-start md:-translate-x-10 text-lg text-primary-gold uppercase tracking-wide">
          WE MAKE A DIFFERENCE
        </h3>
        <div className=" flex flex-col w-full gap-4">
          <h2 className="text-center md:text-start capitalize text-2xl md:text-4xl font-medium tracking-wide">
            Welcome to <strong className="bg-yellow-600 text-white italic">ZeeVista</strong> Consultantancy
          </h2>
          <p className=" text-center md:text-start text-gray-700 text-sm tracking-wide">
            CentenniaImmigration Visa Services foundation was established with a
            small idea that was incepted in the minds of its promoters in the
            year 2018! We skilfully guide applicants for the immigration process
            to any country they aspire to settle down.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StartProcess;
