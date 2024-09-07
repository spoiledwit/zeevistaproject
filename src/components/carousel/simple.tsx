"use client";

import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  children: JSX.Element[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { children, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 10000, playOnInit: true, stopOnInteraction: false }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children.map((ele, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              {ele}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
