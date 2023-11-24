import React from "react";
import firstRecent from "../images/recent1.png";
import calories from "../images/calories.png";
import cocktails from "../images/coktails.png";
import sticky from "../images/sticky.png";
import blogapp from "../images/blogapp.png";

const RecentWork = () => {
  return (
    <main className="min-h-screen mt-20 px-20 bg-zinc-900 max-md:px-4">
      <section className="py-20 relative flex justify-center items-center">
        <h1 className="text-center text-6xl text-orange-600 font-montserrat font-semibold relative z-10">
          Recent Work
        </h1>
        <h1 className="absolute text-8xl whitespace-nowrap font-montserrat font-semibold tracking-widest text-zinc-800 max-md:hidden block">
          Recent Work
        </h1>
      </section>
      <section className="flex flex-col space-y-10 py-10">
        <article className="flex bg-zinc-800 rounded-lg overflow-hidden max-md:flex-col">
          <div className="flex-1">
            <img src={firstRecent} />
          </div>
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-montserrat text-orange-600">
              Better Mornings App
            </h1>
            <p className="font-montserrat text-gray-300 leading-7 my-4">
              This is latest project that I did. Its a React-Native app, but on
              Figma. The app is not published so I can't show it as an app. It
              is supposed to be a app about better mornings where users can add
              breakfast ideas, join groups, make reminders and add a IoT device,
              that would be a lamp which the user can control from the app.
            </p>
            <h2 className="text-gray-700 font-montserrat text-lg">
              React-Native, Figma, Node.js, REST-API
            </h2>
          </div>
        </article>
        <article className="flex bg-zinc-800 rounded-lg overflow-hidden  max-md:flex-col">
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-montserrat text-orange-600">
              Cocktail API App
            </h1>
            <p className="font-montserrat text-gray-300 leading-7 my-4">
              While on practice in Portugal, I made 5 little projects to train
              my React.js skills and TypeScript. This is the first project with
              the use of a API. Learned to use a package called React-Query.
            </p>
            <h2 className="text-gray-700 font-montserrat text-lg">
              React.js, TypeScript, API
            </h2>
          </div>
          <div className="flex-1">
            <img src={cocktails} />
          </div>
        </article>
        <article className="flex bg-zinc-800 rounded-lg overflow-hidden  max-md:flex-col">
          <div className="flex-1">
            <img src={sticky} />
          </div>
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-montserrat text-orange-600">
              Sticky Notes App
            </h1>
            <p className="font-montserrat text-gray-300 leading-7 my-4">
              The second project that I did was about Sticky Notes. A fairly
              simple one, this time without API, just JS in general. Wanted to
              work more on responsive design which I struggled with.
            </p>
            <h2 className="text-gray-700 font-montserrat text-lg">React.js</h2>
          </div>
        </article>
        <article className="flex bg-zinc-800 rounded-lg overflow-hidden  max-md:flex-col">
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-montserrat text-orange-600">
              Calorie Counter App
            </h1>
            <p className="font-montserrat text-gray-300 leading-7 my-4">
              On this app, I wanted to make sure that understand the basics of
              React and how to use formulas to calculate results and display
              them.
            </p>
            <h2 className="text-gray-700 font-montserrat text-lg">
              React.js, TypeScript
            </h2>
          </div>
          <div className="flex-1">
            <img src={calories} />
          </div>
        </article>
        <article className="flex bg-zinc-800 rounded-lg overflow-hidden  max-md:flex-col">
          <div className="flex-1">
            <img src={blogapp} />
          </div>
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-montserrat text-orange-600">
              Blog App
            </h1>
            <p className="font-montserrat text-gray-300 leading-7 my-4">
              This project was made, to try out how to work with Bootstrap and
              understand how to upload images using Laravel. It is a blog app,
              where the user can add blog posts and add comments. All of that
              was made possible with Laravel in the backend. It had a user auth
              system too.
            </p>
            <h2 className="text-gray-700 font-montserrat text-lg">
              Laravel, Bootstrap, MySql
            </h2>
          </div>
        </article>
      </section>
    </main>
  );
};

export default RecentWork;
