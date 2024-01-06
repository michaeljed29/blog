import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import CategoryCard from "../../../../components/CategoryCard/CategoryCard";
import BuildingIcon from "../../../../assets/svg/Building.svg";
import RocketIcon from "../../../../assets/svg/Rocket.svg";
import GraphIcon from "../../../../assets/svg/Graph.svg";
import CyborgIcon from "../../../../assets/svg/Cyborg.svg";
import Fade from "react-reveal/Fade";

const Categories = () => {
  return (
    <Section>
      <Container>
        <Fade>
          <h2 className="heading-2">All Categories</h2>
        </Fade>
        <div className="flex mt-[48px] space-x-[32px]">
          <div className="flex-1">
            <Fade delay={300}>
              <CategoryCard
                imgSrc={BuildingIcon}
                title="Business"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </Fade>
          </div>

          <div className="flex-1">
            <Fade delay={600}>
              <CategoryCard
                imgSrc={RocketIcon}
                title="Startup"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </Fade>
          </div>

          <div className="flex-1">
            <Fade delay={900}>
              <CategoryCard
                imgSrc={GraphIcon}
                title="Economy"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </Fade>
          </div>

          <div className="flex-1">
            <Fade delay={1200}>
              <CategoryCard
                imgSrc={CyborgIcon}
                title="Technology"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </Fade>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
