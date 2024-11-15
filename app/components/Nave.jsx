"use client"
import React from "react";
import Container from "./Container";

const Nave = ({ poppinsClassname }) => {
  return (
    <div className={poppinsClassname}>
      <Container>
        <div className="flex justify-between items-center pt-[40px]">
          <h2 className="text-[32px] text-black font-semibold">
            Open Enterprise
          </h2>
          <ul className="flex gap-[40px]">
            <li className="text-[18px] font-medium text-black">
              Why Open Enterprise
            </li>
            <li className="text-[18px] font-medium text-black">Features</li>
            <li className="text-[18px] font-medium text-black">Contribute</li>
            <li className="text-[18px] font-semibold text-[#71A894]">
              Request early access
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Nave;
