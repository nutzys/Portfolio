import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <main className="min-h-screen mt-20 px-20 max-md:px-5">
      <section className="relative flex justify-center items-center">
        <h1 className="text-center text-6xl text-orange-600 font-montserrat font-semibold relative z-10">
          Skills
        </h1>
        <h1 className="absolute text-9xl whitespace-nowrap font-montserrat font-semibold tracking-widest text-zinc-900 max-md:hidden block">
          Skills
        </h1>
      </section>
      <section className="mt-20 flex gap-x-10 max-md:flex-col max-md:space-y-10">
        <section className="flex-1">
          <h1 className="text-center my-7 text-2xl text-gray-300 font-montserrat">
            What Have I Learnt?
          </h1>
          <p className="font-montserrat leading-7 text-gray-500">
            Over the course of 4.5 years I mainly have taught myself. I've been
            doing Udemy courses and projects on my own. Never really got a good
            understanding with what language/framework should i should work
            because I wanted to try out everything. The main language which I
            started with was PHP. Learnt OOP and MVC there. But later on tried
            out IoT on C++, game development with C# on Unity, and now my main
            focus is Laravel and React.js. The table shows how strong I feel in
            each skill for a junior level developer.
          </p>
        </section>
        <section className="flex-1 flex flex-col bg-zinc-900 rounded-md p-7">
          <Skill level="100%" label="HTML" />
          <Skill level="70%" label="CSS" />
          <Skill level="70%" label="PHP" />
          <Skill level="80%" label="MYSQL" />
          <Skill level="50%" label="Laravel" />
          <Skill level="85%" label="React.js" />
          <Skill level="45%" label="Node.js" />
          <Skill level="85%" label="React-Native" />
          <Skill level="70%" label="Java" />
          <Skill level="70%" label="TailwindCSS" />
          <Skill level="70%" label="Figma" />
        </section>
      </section>
    </main>
  );
};

export default Skills;
