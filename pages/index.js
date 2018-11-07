import React from 'react';
import Page from '../layouts/Page';
import Hero from '../slices/Hero';
import FeaturesGrid from '../slices/FeaturesGrid';
import WhatIsBedrock from '../slices/WhatIsBedrock';
import Testimonials from '../slices/Testimonials';
import Contact from '../slices/Contact';
import GettingStarted from '../slices/GettingStarted';

const Home = () => (
  <Page>
    <Hero />
    <WhatIsBedrock />
    <FeaturesGrid />
    <GettingStarted />
    <Testimonials />
    <Contact />
  </Page>
);

export default Home;
