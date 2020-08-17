import React, { useState } from "react";
import sliderImg1 from "../../../images/main-carousel-img1.jpg";
import sliderImg2 from "../../../images/main-carousel-img2.jpg";
import sliderImg3 from "../../../images/main-carousel-img3.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./carousel.css";

const items = [
  {
    src: sliderImg1,
    caption: "Your Perfect Accommodation",
    altText:
      "Jasmine hotel offers comfortable accommodation with a wide variety of rooms, additional services, and amenities available to all our guests. We offer the highest level of hospitality and great customer service.",
    id: 1,
  },
  {
    src: sliderImg2,
    caption: "150+ Rooms to Choose From",
    altText:
      "Our hotel has a wide variety of greatly furnished and fully equipped rooms for every guest. Whether you are travelling on busiess or with family, we have what you need to enjoy your stay.",
    id: 2,
  },
  {
    src: sliderImg3,
    caption: "Diverse Facilities",
    altText:
      " At our hotel, you can always feel comfortable in your room, having the right surroundings to relax and reload as it is utmost important. We offer a wide variety of hotel facilities including what you require.",
    id: 3,
  },
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img
          src={item.src}
          className="img-fluid carousel-Image"
          alt={item.altText}
        />
        <CarouselCaption
          className="carousel-Image-Text"
          captionHeader={item.caption}
          captionText={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Slider;
