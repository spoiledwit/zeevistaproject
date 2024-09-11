import Marquee from "react-fast-marquee";
import img1 from "../../../assets/logos/1.jpg";
import img2 from "../../../assets/logos/2.png";
import img3 from "../../../assets/logos/3.png";
import img4 from "../../../assets/logos/4.png";
import img5 from "../../../assets/logos/5.png";
import img6 from "../../../assets/logos/6.png";
import img7 from "../../../assets/logos/7.png";
import Bar from "../Bar";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Clients = () => {
  return (
    <div className="w-full md:mb-12 md:pt-0 items-center flex mt-10 flex-col md:px-20 px-8">
      <span className="mx-auto">
        <h2 className="text-yellow-600 text-3xl mt-4 md:mt-10 font-serif">
          Our Clients
        </h2>
        <Bar w={"w-[120px]"} />
      </span>
      <Marquee className="mt-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="logo"
            className="h-20 md:h-32 w-auto mx-10"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;
