import React from "react";
import Container from "../../../../components/Container/Container";
import Post from "../Post/Post";
import TwoWoman from "../../../../assets/images/two-woman.jpg";
import PhotoOfPeople from "../../../../assets/images/photo-of-people.jpg";
import PhotoOfWoman from "../../../../assets/images/photo-of-woman.jpg";
import TwoPeople from "../../../../assets/images/two-people.jpg";
import Fade from "react-reveal/Fade";

const AllPost = () => {
  return (
    <section className="pt-[64px]">
      <Container>
        <Fade>
          <h1 className="heading-1">All posts</h1>
        </Fade>
        <div className="h-[1px] bg-mediumGray/[0.32] mt-[32px] mb-[64px]"></div>
        <div className="all-post">
          <Fade>
            <Post
              imgSrc={TwoWoman}
              label="Startup"
              title="Design tips for designers that cover everything you need"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident."
            />
          </Fade>
          <Fade>
            <Post
              imgSrc={PhotoOfPeople}
              label="Business"
              title="How to build rapport with your web design clients"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident."
            />
          </Fade>
          <Fade>
            <Post
              imgSrc={PhotoOfWoman}
              label="Startup"
              title="Logo design trends to avoid in 2022"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident."
            />
          </Fade>
          <Fade>
            <Post
              imgSrc={TwoPeople}
              label="Technology"
              title="8 Figma design systems you can download for free today"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident."
            />
          </Fade>

          <Fade>
            <Post
              imgSrc={TwoWoman}
              label="Economy"
              title="Font sizes in UI design: The complete guide to follow"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident."
            />
          </Fade>
        </div>
        <div className="flex items-center justify-center">
          <span className="mr-[17px] heading-4 text-mediumGray cursor-pointer">
            {"< Prev"}
          </span>
          <span className="heading-3 cursor-pointer">{"Next >"}</span>
        </div>
      </Container>
    </section>
  );
};

export default AllPost;
