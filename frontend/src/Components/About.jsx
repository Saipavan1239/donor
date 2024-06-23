import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaHandsHelping, FaHeart, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src="https://subhiksha.org/wp-content/uploads/2024/01/logo.png" rounded fluid />
        </Col>
        <Col md={6}>
          <h2 className="m-2 text-cetner">About Our NGO</h2>
          <p>
          Subhiksha Voluntary Organization is a registered non government organization founded on 8th October 2009 by a group of trained and qualified professional Social workers to help and support differently abled children of all ages and disabilities including Autism, Mental Retardation, Cerebral Palsy, Hearing Impaired and multiple disabilities.

          Subhiksha is presently running Special School (Day Care Centre) for children with Autism, Attention Deficit (Hyperactivity) Disorder, Down Syndrome, Mental Retardation, Hearing Impaired etc. Special Education is provided to the children who are mentally and developmentally challenged
          </p>
          <p>
            We believe in the power of collective effort and strive to bring
            positive change to society. Join us in our journey to make a
            difference.
          </p>
          <h4>Our Impact</h4>
          <ul className="list-unstyled">
            <li>
              <FaHandsHelping /> Helped over 5,000 families
            </li>
            <li>
              <FaHeart /> Provided healthcare to 3,000 individuals
            </li>
            <li>
              <FaUsers /> Educated 2,000 children
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
