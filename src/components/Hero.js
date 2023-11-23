import React from "react";
import Button from "./Button";
import svg from "../images/undraw_programming_re_kg9v.svg";

const Hero = () => {
  return (
    <main className="flex min-h-screen items-center px-20 max-md:px-5">
      <section className="flex flex-col">
        <section className="flex max-md:flex-col justify-between items-center max-md:space-y-10">
          <section className="flex-1">
            <h1 className="text-6xl max-sm:text-4xl text-gray-600 font-[800]">
              I'm a
            </h1>
            <span className="text-7xl max-sm:text-5xl text-gray-100 leading-[90px] font-archivo">
              JUNIOR FULLSTACK DEVELOPER
              <span className="text-orange-600">.</span>
            </span>
            <div className="mt-5">
              <Button title="CONTACT ME" />
            </div>
          </section>
          <section className="flex-1">
            <img src={svg} />
          </section>
        </section>
      </section>
    </main>
  );
};

export default Hero;
