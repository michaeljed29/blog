import React from "react";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <Layout>
      <section className="py-[128px]">
        <Container className="max-w-[768px]">
          <Fade>
            <div>
              <span className="capital-3 text-center block font-black">
                Contact us
              </span>
              <h1 className="heading-1 text-center mt-[12px] mb-[12px]">
                Let's Start a Conversation
              </h1>
              <p className="body-1  text-center text-mediumGray m-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
            </div>
          </Fade>
          <Fade delay={300}>
            <Card />
          </Fade>
          <Fade delay={600}>
            <Form />
          </Fade>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
