import React from "react";
import banner from "../assets/banner.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container my-5 alt">
      <div className="row">
        <div className="col-12 col-lg-6 mb-5">
          <img src={banner} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <h2>Bizimle İletişime Geçin !!</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>İsim</Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Mesajınız">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3">
                <Button as={Col} className="btn-gonder" md="12" type="submit">
                  Gönder
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
