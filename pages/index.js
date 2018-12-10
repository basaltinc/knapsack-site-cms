import React from 'react';
import Page from '../layouts/Page';
import Hero from '../slices/Hero';
import FeaturesGrid from '../slices/FeaturesGrid';
import WhatIsBedrock from '../slices/WhatIsBedrock';
import Testimonials from '../slices/Testimonials';
import Contact from '../slices/Contact';
import GettingStarted from '../slices/GettingStarted';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestRelease: [],
      ready: true
    };
  }

  // componentDidMount() {
  //   window
  //     .fetch('https://api.github.com/repos/basaltinc/bedrock/releases')
  //     .then(res => res.json())
  //     .then(releases => {
  //       this.setState({
  //         latestRelease: releases[0],
  //         ready: true,
  //       });
  //     });
  // }

  render() {
    if (!this.state.ready) {
      return <p>Loading...</p>;
    }
    return (
      <Page>
        <Hero />
        <WhatIsBedrock />
        <FeaturesGrid />
        <GettingStarted />
        <Testimonials />
        <Contact />
      </Page>
    );
  }
}

export default Home;
