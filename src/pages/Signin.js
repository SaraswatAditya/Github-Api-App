import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from "reactstrap";


import { auth } from "../Config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then(res => {
    console.log(res);
    toast("login Success");
    context.setUser({ email: res.user.email, uid: res.user.uid });
    })
  .catch((error) => {
    console.log(error);
    toast(error.message, {
      type: "error"
    });
  });

};

  const handleSubmit = e => {
    e.preventDefault();
    handleSignin();
  };

  if (context.user?.uid) {
    return <Navigate to="/" />;
  }
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">Signin here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign in
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
