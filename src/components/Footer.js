import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Footer = () => {
  return (
    <main className="h-fit px-20 py-10 flex flex-col items-center space-y-5">
      <h1 className="text-2xl text-center font-montserrat text-gray-600">
        Ulvis Dulbergs
      </h1>
      <section>
        <p className="text-gray-600 font-montserrat">
          ulvis.dulbergs@gmail.com
        </p>
      </section>
      <section className="flex space-x-10">
        <a href="https://www.youtube.com/@UlvisD">
          <FontAwesomeIcon
            icon={faYoutube}
            size="xl"
            className="h hover:text-red-700"
          />
        </a>
        <a href="https://twitter.com/UDulbergs">
          <FontAwesomeIcon
            icon={faXTwitter}
            size="xl"
            className="h hover:text-gray-400"
          />
        </a>
        <a href="https://github.com/nutzys">
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            className="h hover:text-gray-400"
          />
        </a>
        <a href="https://www.linkedin.com/in/ulvis-dulbergs-443056185/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xl"
            className="h hover:text-blue-500"
          />
        </a>
      </section>
    </main>
  );
};

export default Footer;
