import React from "react";
import Work from "./Work";
import firstRecent from "../images/recent1.png";
import calories from "../images/calories.png";
import cocktails from "../images/cocktailsfirst.png";
import sticky from "../images/sticky.png";

const RecentWork = () => {
  return (
    <main className="min-h-screen mt-20 px-20 bg-zinc-900">
      <section className="py-20 relative flex justify-center items-center">
        <h1 className="text-center text-6xl text-orange-600 font-montserrat font-semibold relative z-10">
          Recent Work
        </h1>
        <h1 className="absolute text-8xl whitespace-nowrap font-montserrat font-semibold tracking-widest text-zinc-800 max-md:hidden block">
          Recent Work
        </h1>
      </section>
      <section className="grid max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center lg:flex lg:flex-wrap lg:justify-center">
        <Work title="React-Native Morning App" img={firstRecent} />
        <Work title="Cocktail Lookup App" img={cocktails} />
        <Work title="Calorie Counter App" img={calories} />
        <Work title="Sticky Notes App" img={sticky} />
      </section>
    </main>
  );
};

export default RecentWork;
