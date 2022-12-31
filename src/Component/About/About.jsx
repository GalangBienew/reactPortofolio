import React from "react";
import Container from "react-bootstrap/Container";
import "../About/About.scss";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { BsTelephoneForwardFill } from "react-icons/bs";
import Footer from "../Footer/Footer";
// ini bukan halaman About,halaman tersebut saya berikan dengan nama HeaderAbout
const Aboutus = () => {
  return (
    <>
      <Container fluid>
        <div className="AboutHeader animate__animated animate__backInUp">
          <div className="fontHeader">
            <h4>Muhammad Galang miftah Riziq</h4>
            <span className="font">
              and Now i'am learning web development(frontend) and web design
            </span>
          </div>
          <div className="image">
            <Image
              rounded={"40px"}
              src="https://th.bing.com/th/id/OIP.DrQ9r0UM3pZwCrGXo-8d6QHaEI?w=334&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt=""
              width={"250px"}
            />
            <Button variant="primary">
              <BsTelephoneForwardFill />
              Let's Make Friends
            </Button>
            <br />
            <h6>let's guys learn together</h6>
          </div>
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default Aboutus;
