import React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import PostsSection from "./components/PostsSection/PostsSection";
import Info from "./components/Info/Info";
import Category from "./components/Category/Category";
import History from "./components/History/History";
import Authors from "./components/Authors/Authors";
import Featured from "./components/Featured/Featured";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "../../components/Join/Join";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PostsSection />
      <Info />
      <Category />
      <History />
      <Authors />
      <Featured />
      <Testimonials />
      <Join />
    </Layout>
  );
};

export default Home;
