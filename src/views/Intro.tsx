import React from "react";
import { ReactComponent as Personal } from "../globals/personal.svg";
import styled from "@emotion/styled";

const Intro = () => {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="content">
          <Personal title="Bruno Sala" />
          <p className="title">Daniel Bruno Sala</p>
          <p className="subtitle">Full Stack Software Engineer</p>
          <p>
            Hello! My name is Daniel Bruno Sala, I'm a self-starting Full Stack
            Software Engineer based out of Chicago, IL.
          </p>
          <p>
            I've worked with a diverse array of clients from various countries
            on projects that range from simple website development to
            enterprise-scale application engineering. My goal is to deliver high
            quality, bold products to my clients all while having a bit of fun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
