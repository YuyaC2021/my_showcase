"use client";

import Image from "next/image";

// Components
import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {
    console.log("button clicked");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline Your Car rental experience with our efortless booking
          process.
        </p>
        <CustomButton
          className_buton="bg-primary-blue text-white rounded-full mt-10"
          onClickHandler={handleScroll}
          title="Explore Cars"
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
