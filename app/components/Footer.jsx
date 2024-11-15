import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#71A894]">
        <Container>
          <div className=" flex justify-between items-center pt-[40px] pb-10">
            <h2 className="text-[32px] text-white font-semibold">
              Open Enterprise
            </h2>
            <ul className="flex gap-[40px]">
              <li className="text-[18px] font-medium text-white">
                Why Open Enterprise
              </li>
              <li className="text-[18px] font-medium text-white">Features</li>
              <li className="text-[18px] font-medium text-white">Contribute</li>
              <li className="text-[18px] font-semibold text-white">
                Request early access
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
