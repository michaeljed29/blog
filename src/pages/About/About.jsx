import React from "react";
import Layout from "../../components/Layout/Layout";
import Join from "../../components/Join/Join";
import Overview from "./components/Overview/Overview";
import Info from "./components/Info/Info";
import Authors from "./components/Authors/Authors";

const About = () => {
  return (
    <Layout>
      <Overview />
      <Info />
      <Authors />
      <Join />
    </Layout>
  );
};

export default About;
