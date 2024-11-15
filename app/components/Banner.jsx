import React from "react";
import Container from "./Container";
import Image from "next/image";
import bannerImage from "../assacts/bannerImage.png";
import bannerBg from "../assacts/bannerBg.png";

const Banner = ({ parisienneClassname, interClassname }) => {
  return (
    <div>
      <Container>
        <div className="flex items-center pt-[82px]">
          <div className="w-[50%]">
            <h2 className={`text-[64px] font-semibold ${parisienneClassname}`}>
              A new model for open collaboration
            </h2>
            <p className={`text-[24px] mt-[24px] ${interClassname}`}>
              Run an organization where members get rewarded for their
              contributions with fractional ownership.
            </p>
            <button className="w-[219px] h-[64px] bg-[#71A894] text-white rounded-lg mt-[40px]">
              Request early access
            </button>
          </div>
          <div className="w-[50%] relative">
            <Image className=" " src={bannerBg} alt="banner background" />
            <Image
              className=" absolute top-28"
              src={bannerImage}
              alt="banner image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
