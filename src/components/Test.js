import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

const images = [
  "https://via.placeholder.com/400x400?text=Image+1",
  "https://via.placeholder.com/400x400?text=Image+2",
  "https://via.placeholder.com/400x400?text=Image+3",
  "https://via.placeholder.com/400x400?text=Image+4",
  "https://via.placeholder.com/400x400?text=Image+5",
];

const Carousel = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={{ height: "400px", overflow: "hidden" }}>
      <Scrollama onStepEnter={onStepEnter}>
        {images.map((image, index) => (
          <Step data={index} key={`step-${index}`}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default Carousel;
