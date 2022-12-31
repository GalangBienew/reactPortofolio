import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import "../Contact/Contact.scss";
import emailjs from "@emailjs/browser";

export default function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kvkgpsm",
        "template_qwg69e8",
        form.current,
        "Ji-y1jrm8I3pm6c8k"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("messege send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <h4>i need comments from you guys</h4>
      <div className="form-last">
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group>
            <Form.Label>
              <h6>your full name:</h6>{" "}
            </Form.Label>
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Enter your full name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h6>Enter your email address:</h6>
            </Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter your your email address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h6>message</h6>
            </Form.Label>
            <Form.Control
              type="text"
              name="message"
              placeholder="Enter your age"
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

//  <form ref={form} onSubmit={sendEmail}>
//  <label>Name</label>
//  <input type="text" name="user_name" />
//  <label>Email</label>
//  <input type="email" name="user_email" />
//  <label>Message</label>
//  <textarea name="message" />
//  <input type="submit" value="Send" />
// </form>
