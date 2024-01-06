import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import AuthorCard from "./AuthorCard";
import Author1 from "../../../../assets/images/author-1.jpg";
import Author2 from "../../../../assets/images/author-2.jpg";
import Author3 from "../../../../assets/images/author-3.jpg";
import Author4 from "../../../../assets/images/author-4.jpg";
import Fade from "react-reveal/Fade";

const Authors = () => {
  return (
    <Section>
      <Container>
        <Fade>
          <Fade duration={300}>
            <h2 className="heading-2 text-center">List of Authors</h2>
          </Fade>
          <div className="flex space-x-[32px] mt-[48px]">
            <div className="flex-1">
              <Fade duration={600}>
                <AuthorCard
                  img={Author1}
                  name="Floyd Miles"
                  title="Content Writer @Company"
                />
              </Fade>
            </div>
            <div className="flex-1">
              <Fade duration={900}>
                <AuthorCard
                  img={Author2}
                  name="Dianne Russell"
                  title="Content Writer @Company"
                />
              </Fade>
            </div>
            <div className="flex-1">
              <Fade duration={1200}>
                <AuthorCard
                  img={Author3}
                  name="Jenny Wilson"
                  title="Content Writer @Company"
                />
              </Fade>
            </div>

            <div className="flex-1">
              <Fade duration={1500}>
                <AuthorCard
                  img={Author4}
                  name="Leslie Alexander"
                  title="Content Writer @Company"
                />
              </Fade>
            </div>
          </div>
        </Fade>
      </Container>
    </Section>
  );
};

export default Authors;
