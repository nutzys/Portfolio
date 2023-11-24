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
            Hello! I'm a 20 year old IT student from Latvia. Started my journey
            back in 2019 when I joined technical school to get Programming
            Technician qualification. Then started to take programming seriously
            and became TOP 4 in the class. Our class was being mentored by CEO
            of Draugiem Group - Agris Tamanis. Ever since I started, I enjoyed
            the process of self-teaching. Been doing Udemy courses for a long
            time now and understood that I can quickly adapt to new languages.
            Been invited to best practice spots in Latvia to gain experience in
            programming. I've tried game development, IoT, Web
            Design/Development, Mobile Design/Development. Now when I joined
            University I'm the best in the class and I help others to learn the
            basics since I don't have to go to most of the lecures because of my
            knowledge level.
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
