import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import clock from "../images/clock.JPG";
import macbook from "../images/macbook.JPG";
import oculus from "../images/oculus.JPG";

const Timeline = () => {
  return (
    <main className="min-h-screen mt-10">
      <section className="my-20 relative flex justify-center items-center">
        <h1 className="text-center text-6xl text-orange-600 font-montserrat font-semibold relative z-10">
          My Journey
        </h1>
        <h1 className="absolute text-8xl whitespace-nowrap font-montserrat font-semibold tracking-widest text-zinc-900 max-md:hidden block">
          My Journey
        </h1>
      </section>
      <VerticalTimeline lineColor="#ea580c">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2019 September"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title font-montserrat">
            Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Cesis
          </h4>
          <p className="font-montserrat">
            Joined Vidzeme Technical And Design School for Programming
            Technician qualification
          </p>
          <section className="flex bg-red-50 gap-5"></section>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2020"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title font-montserrat">
            Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Cesis
          </h4>
          <p className="font-montserrat">
            Started to take programming seriously and being mentored by Agris
            Tamanis (CEO of Draugiem Group)
          </p>
          <p className="text-orange-600 font-montserrat">
            HTML, CSS, PHP, MYSQL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2020 December"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <img
            src={clock}
            className="h-52 w-full object-cover object-center rounded-md mb-4"
          />
          <h3 className="vertical-timeline-element-title font-montserrat">
            Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Cesis
          </h4>
          <p className="font-montserrat">
            Placed TOP 3 in programming from class and won a prize
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2021 February"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <img
            src={macbook}
            className="h-52 w-full object-cover object-center rounded-md mb-4"
          />
          <h3 className="vertical-timeline-element-title font-montserrat">
            Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Cesis
          </h4>
          <p className="font-montserrat">
            Placed TOP 1 in programming from class and won a Macbook Air
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2021 May"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <img
            src={oculus}
            className="h-52 w-full object-cover object-center rounded-md mb-4"
          />
          <h3 className="vertical-timeline-element-title font-montserrat">
            Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Cesis
          </h4>
          <p className="font-montserrat">
            Placed TOP 1 in programming from class and won a Oculus Quest 2
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2022 March - 2022 April"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title font-montserrat">
            Practice
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Riga
          </h4>
          <p className="font-montserrat">Invited to join Mapon for practice.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2022 August - 2022 September"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title font-montserrat">
            Practice
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Valmiera
          </h4>
          <p className="font-montserrat">Bootcamp at Accenture on .NET</p>
          <p className="text-orange-600 font-montserrat">C#</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2023 January - 2023 April, May - June"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title font-montserrat">
            Practice
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Riga
          </h4>
          <p className="font-montserrat">
            Won a spot to join Vendon for practice. Joined Vendon
          </p>
          <p className="text-orange-600 font-montserrat">
            React.js, TypeScript
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2023 April"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title font-montserrat">
            Practice
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Portugal, Montijo/Lisbon
          </h4>
          <p className="font-montserrat">Practice in Portugal at ChipStorm</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2023 June"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title font-montserrat">
            Graduate
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Cesis
          </h4>
          <p className="font-montserrat">
            Graduated Technical School with Programming Technician Qualification
          </p>
          <p className="text-orange-600 font-montserrat">
            Laravel, TailwindCSS (Both Self-taught)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#3f3f46",
            color: "#9ca3af",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #3f3f46" }}
          date="2023 September"
          iconStyle={{ background: "#ea580c", color: "#fff" }}
          icon={<AcademicCapIcon />}
        >
          <h3 className="vertical-timeline-element-title font-montserrat">
            Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-montserrat">
            Latvia, Valmiera
          </h4>
          <p className="font-montserrat">
            Joined Vidzeme University of Applied Sciences for IT Degree
          </p>
          <p className="text-orange-600 font-montserrat">
            Java (From lectures), React-Native, Node.js (Both Self-taught)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </main>
  );
};

export default Timeline;
