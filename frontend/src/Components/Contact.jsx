import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaDollarSign } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateAmount = (amount) => {
    return !isNaN(amount) && Number(amount) > 0;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!email || !amount) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validateAmount(amount)) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:8000/donate", {
        email: email,
        amount: amount,
      });

      if (response.status === 200) {
        toast.success("Donation submitted successfully!");
      } else {
        toast.error("Failed to submit donation. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
      toast.error("Failed to submit donation. Please try again later.");
    }

    setIsSubmitting(false);

    // Clear form fields
    setEmail("");
    setAmount("");
  };

  return (
    <div>
      <h1 className="text-center mb-4">Initiate the Donation Process 💹</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="p-4 rounded-lg shadow">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="m-2" style={{ fontSize: "20px" }}>
                    <FaEnvelope size={25} className="mb-1" /> Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAmount">
                  <Form.Label className="m-2" style={{ fontSize: "20px" }}>
                    <FaDollarSign size={25} className="mb-1" /> Donation Amount
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount to donate"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="mt-3 d-flex justify-content-center">
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Donate"}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ContactForm;
