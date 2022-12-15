import React, { useState } from "react";
import { useRef } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./singlePageSlick.css";

const images = [
  "https://n.nordstrommedia.com/id/sr3/4664a52d-25f1-443e-9c97-38183c9e0c46.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "https://n.nordstrommedia.com/id/sr3/210cce63-9329-44a7-b20f-0972124a2bf4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "https://n.nordstrommedia.com/id/sr3/f9e7daa1-0d69-4d1e-b3bd-13926a2c4172.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "https://n.nordstrommedia.com/id/sr3/b3a628fd-12e0-456b-8c7b-a51d8ada1d6d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "https://n.nordstrommedia.com/id/sr3/efb9e8ab-4789-44e0-8f8b-6f6b16f6e9cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
];

const Singlepage = () => {
  const [img, setImg] = useState(images[0]);

  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };

  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="container">

      <div className="left">
        <div className="left_1">
          {images.map((image, i) => (
            <div
              className={i === 0 ? "img_wrap active" : "img_wrap"}
              key={i}
              onMouseOver={() => hoverHandler(image, i)}
              ref={addRefs}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>

        <div className="left_2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: img,
                width: "50%"
              },
              largeImage: {
                src: img,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: '80%',
                height: '60%'
              }
            }}
          />
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
}

export default Singlepage