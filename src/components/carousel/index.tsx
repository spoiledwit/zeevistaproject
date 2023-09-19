"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";

type PropType = {
  thumbs: JSX.Element[];
  children: JSX.Element[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { thumbs, children, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla self-center w-full">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {children.map((ele, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__img">{ele}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs px-20">
        <div className="embla-thumbs__container" ref={emblaThumbsRef}>
          {thumbs.map((ele, index) => {
            return (
              <div
              key={index}
                className={"embla-thumbs__slide".concat(
                  index === selectedIndex
                    ? " embla-thumbs__slide--selected"
                    : ""
                )}
              >
                <button
                  onClick={() => onThumbClick(index)}
                  className="embla-thumbs__slide__button"
                  type="button"
                >
                  <div className=" embla-thumbs__slide__img">{ele}</div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
