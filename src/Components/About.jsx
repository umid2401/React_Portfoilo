import React from 'react'
import "../Styles/About.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 80,
      cursorChar: "",
      strings: ["Frontend Developer "],

    });
  }, []);
  return (

    <div>
      <div className="container">
        <div className="aboutPage">
          <div className="aboutLeft">
            <img src="./img/perfil.png" alt="err" />
            <h2  >I'm <span ref={textRef}></span></h2>
          </div>
          <div className="aboutRight">
            <h2>About</h2><hr className='beautifulHr' />
            <p>Hello everyone. My name is Umid.
              Welcome to my website. I was born in 2001.
              I entered TATU in 2019. I like and am interested in programming.
              I'm working on developing different websites to fix bugs in different programs. In my spare time, I play sports and read books. I like to work hard on myself and criticize myself. Because the more
              I work on myself, the easier it is to solve problems. So you won't go wrong choosing me. Please contact me. I want to achieve many things with you in the future..
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
