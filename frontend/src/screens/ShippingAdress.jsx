import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

export default function ShippingAdress() {
  const [fullName, setFullName] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Adress</title>
      </Helmet>
      <h1 className="my-3">Shipping Adress</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="bm-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="bm-3" controlId="adress">
          <Form.Label>adress</Form.Label>
          <Form.Control
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="bm-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="bm-3" controlId="postalcode">
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="bm-3" controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
      </Form>
      <div className="mb-3">
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </div>
    </div>
  );
}
