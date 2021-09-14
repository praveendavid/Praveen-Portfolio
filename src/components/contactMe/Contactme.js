import React, { useRef, useState } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
const ContactMe = () => {
    const initialState = { from_name: '', email_id: '', message: '', to_name: 'praveen' };
    const [formValue, setFormValue] = useState(initialState);
    const formRef = useRef();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, ...{ [name]: value } });
    }

    const sendEmail = (e) => {
        emailjs.send('service_e300l05', 'template_38u6phl', formValue, 'user_7DibKxRvO8LTTX4sdVDa9').then(response => {
            toast.success('Email sent successfully');
            formRef.reset();
        });
    }
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Form ref={formRef} onSubmit={sendEmail}>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name="from_name" onChange={handleChange} placeholder="Enter your name" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email_id" onChange={handleChange} placeholder="Enter your email" />
                            <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" name="message" onChange={handleChange} placeholder="Enter your Message" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Form>
            </Container><br /><br /><br /><br /><br /><br /><br />
        </Container>
    )
}

export default ContactMe;