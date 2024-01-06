import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import AuthorCard from "../../../../components/AuthorCard/AuthorCard";
import Author1 from "../../../../assets/images/author-1.jpg";
import Author2 from "../../../../assets/images/author-2.jpg";
import Author3 from "../../../../assets/images/author-3.jpg";
import Author4 from "../../../../assets/images/author-4.jpg";
import Author5 from "../../../../assets/images/author-5.jpg";
import Author6 from "../../../../assets/images/author-6.jpg";
import Author7 from "../../../../assets/images/author-7.jpg";
import Author8 from "../../../../assets/images/author-8.jpg";
import Fade from "react-reveal/Fade";

const Authors = () => {
  return (
    <Section>
      <Container>
        <Fade>
          <h2 className="heading-2 text-center">List of Authors</h2>{" "}
        </Fade>
        <div className="columns-4 gap-[32px] mt-[48px]">
          <Fade delay={300}>
            <AuthorCard
              img={Author1}
              name="Floyd Miles"
              title="Content Writer @Company"
            />
          </Fade>

          <Fade delay={600}>
            <AuthorCard
              img={Author2}
              name="Dianne Russell"
              title="Content Writer @Company"
            />
          </Fade>

          <Fade delay={900}>
            <AuthorCard
              img={Author3}
              name="Jenny Wilson"
              title="Content Writer @Company"
            />
          </Fade>

          <Fade delay={1200}>
            <AuthorCard
              img={Author4}
              name="Leslie Alexander"
              title="Content Writer @Company"
            />
          </Fade>
        </div>

        <div className="columns-4 gap-[32px] mt-[32px]">
          <Fade delay={300}>
            <AuthorCard
              img={Author5}
              name="Guy Hawkins"
              title="Content Writer @Company"
            />
          </Fade>

          <Fade delay={600}>
            <AuthorCard
              img={Author6}
              name="Eleanor Pena"
              title="Content Writer @Company"
            />
          </Fade>

          <Fade delay={900}>
            <AuthorCard
              img={Author7}
              name="Robert Fox"
              title="Content Writer @Company"
            />
          </Fade>

          <Fade delay={1200}>
            <AuthorCard
              img={Author8}
              name="Jacob Jones"
              title="Content Writer @Company"
            />
          </Fade>
        </div>
      </Container>
    </Section>
  );
};

export default Authors;
