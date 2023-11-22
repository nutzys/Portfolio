import React from "react";
import image from "../images/IMG_1800.JPG";
import Button from "./Button";

const Hero = () => {
  return (
    <main className="flex min-h-screen items-center">
      <section className="flex flex-col w-1/2">
        <h1 className="text-6xl text-gray-600 font-[800]">I'm a</h1>
        <span className="t text-8xl text-gray-100 leading-[90px] font-archivo">
          JUNIOR FULLSTACK DEVELOPER<span className="text-orange-600">.</span>
        </span>
        <div className="mt-5">
          <Button title="CONTACT ME" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
