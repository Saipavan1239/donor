import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./Contact";

const Sponser = () => {
  const imageList = [
    "https://give.do/blog/wp-content/uploads/2021/12/Disability-NGO.jpg",
    "https://www.soschildrensvillages.in/wp-content/themes/SosIndia/images/sn-c-care-intro-img.jpg",
     "https://www.helplocal.in/assets/image/causes/differently-abled2.jpg",
     "https://www.helplocal.in/assets/image/causes/differently-abled.jpg",
  ];

  return (
    <div>
      <h1 className="text-center">Donate to our cause💹</h1>
      <Carousel>
        {imageList.map((imageSrc, index) => (
          <Carousel.Item key={index}>
            <Image
              className="carousel-image"
              src={imageSrc}
              style={{ width: "100vw", height: "70vh", objectFit: "cover" }}
              fluid
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Sponser;
