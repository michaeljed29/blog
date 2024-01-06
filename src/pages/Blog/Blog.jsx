import React from "react";
import Layout from "../../components/Layout/Layout";
import FeaturedPost from "./components/FeaturedPost/FeaturedPost";
import AllPost from "./components/AllPost/AllPost";
import Categories from "./components/Categories/Categories";
import Join from "../../components/Join/Join";

const Blog = () => {
  return (
    <Layout>
      <FeaturedPost />
      <AllPost />
      <Categories />
      <Join />
    </Layout>
  );
};

export default Blog;
