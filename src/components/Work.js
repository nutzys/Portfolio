import React from "react";

const Work = ({ img, title }) => {
  return (
    <main className="m-5">
      <section className="relative">
        <img
          src={img}
          className="h-72 w-72 max-md:w-52 max-md:h-52 relative z-10 rounded-lg object-cover object-center"
        />
        <div className="border-4 border-orange-600 w-72 h-72 absolute top-5 left-5 rounded-lg max-md:w-52 max-md:h-52 max-md:top-2 max-md:left-2"></div>
        <h1 className="text-lg text-gray-400 mt-8 text-center">{title}</h1>
      </section>
    </main>
  );
};

export default Work;
