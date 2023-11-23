import React from "react";
import image from "../images/IMG_1800.JPG";
import Info from "./Info";

const About = () => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-zinc-900 px-20 py-10 relative max-md:px-10">
      <section className="relative flex justify-center items-center my-5">
        <h1 className="text-center text-6xl text-orange-600 font-montserrat font-semibold relative z-10 max-md:mb-6">
          About Me
        </h1>
        <h1 className="absolute text-8xl whitespace-nowrap font-montserrat font-semibold tracking-widest text-zinc-800 max-md:hidden block">
          About Me
        </h1>
      </section>
      <section className="flex flex-1 max-lg:flex-col items-center lg:space-x-20">
        <aside className="relative flex-1">
          <img
            src={image}
            className="object-fit object-center relative z-10 my-10"
          />
          <div className="w-full h-full border-4 border-orange-600 absolute left-10 top-16 max-lg:hidden block"></div>
        </aside>
        <article className="flex-1 max-md:flex flex-col">
          <p className="text-gray-200 mb-4 text-2xl font-montserrat">
            My name is <span className="text-orange-600">Ulvis Dulbergs</span>
          </p>
          <p className="text-gray-400 leading-8 font-montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <section className="flex flex-wrap mt-10">
            <section className="flex-1 space-y-5">
              <Info label="Name" content="Ulvis" />
              <Info label="Phone" content="(+371) 20509744" />
            </section>
            <section className="flex-1 space-y-5">
              <Info label="Country" content="Latvia" />
              <Info label="E-Mail" content="ulvis.dulbergs@gmail.com" />
            </section>
          </section>
        </article>
      </section>
    </main>
  );
};

export default About;
