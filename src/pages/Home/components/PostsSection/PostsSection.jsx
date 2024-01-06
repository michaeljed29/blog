import React from "react";
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import AllPosts from "../AllPosts/AllPosts";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import Fade from "react-reveal/Fade";

const PostsSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex mt-[64px]">
          <Fade>
            <FeaturedPost />
          </Fade>
          <Fade delay={300}>
            <AllPosts />
          </Fade>
        </div>
      </Container>
    </Section>
  );
};

export default PostsSection;
