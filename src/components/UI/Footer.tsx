import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className=" bg-footer text-hoverText">
      <Container>
        <div className="flex items-center justify-around h-56 ">
          <div className="">
            <p className="text-xl text-hoverText">Nasa</p>
            <a
              className=" text-text hover:underline"
              href="https://www.nasa.gov/"
            >
              nasa.gov
            </a>
          </div>
          <div className="">
            <p className="text-xl text-hoverText">Nasa API</p>
            <a
              className=" text-text hover:underline"
              href="https://api.nasa.gov/"
            >
              nasa.gov
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
