import Bar from "../Bar";
import { accountingCards } from "@/constants";

const Accounting = () => {
  return (
    <div className="w-full md:mb-12 md:pt-0 items-center flex mt-10 flex-col md:px-20 px-8">
      <span className="mx-auto">
        <h2 className="text-yellow-600 text-3xl mt-4 md:mt-10 font-serif">
          Accounting Software & CRM
        </h2>
        <Bar w={"w-[120px]"} />
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {accountingCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-10"
          >
            <img
              className="h-28 object-contain"
              src={card.imageURL}
              alt={card.title}
            />
            <h2 className="text-xl font-bold text-gray-800 text-center mt-5">
              {card.title}
            </h2>
            <p className="mt-2 text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounting;
