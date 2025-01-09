import { Carousel } from "@material-tailwind/react";
import { pic1, pic2 } from "./Images/index.js";

export default function Slider() {
  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <div className="w-full md:w-[90%] lg:w-[90%] h-auto">
        <Carousel
          loop
          autoplay
          autoplayDelay={2500}
          className="rounded-xl h-[300px] md:h-[400px]"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={pic1}
            alt="image 1"
            className="w-full h-full object-contain rounded-lg"
          />
          <img
            src={pic2}
            alt="image 2"
            className="w-full h-full object-contain rounded-lg"
          />
        </Carousel>
      </div>
    </div>
  );
}
