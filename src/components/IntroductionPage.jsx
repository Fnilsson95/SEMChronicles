import React from "react";
/* React wrapper for typewrite-style text animation */
/* Provides an animated typing functionality */
import Typewriter from "typewriter-effect";
import "../styles/IntroductionPage.css";

const Typer = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            /* Array of strings to type one by one */
            "Software Engineering Student",
            "University of Gothenburg",
            "Sweden",
          ],
          autoStart: true /* Automatically start the animation on mount */,
          loop: true /* Repeat/Loop the typing */,
          delay: 10 /* Delay (ms) between each character being typed */,
          deleteSpeed: 10 /* Speed (ms) for deleting characters */,
        }}
      />
    </div>
  );
};

export default Typer;
