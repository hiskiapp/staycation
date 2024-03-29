import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Category from "parts/Category";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Category data={landingPage.categories} />
        <Testimonial data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
