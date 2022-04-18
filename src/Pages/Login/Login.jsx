import { Button } from "react-bootstrap";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import SocialLogin from './../SocialLogin/SocialLogin';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    let errorElement;

  const emailRef = useRef("");
  const passRef = useRef("");

  // navigate
  const navigate = useNavigate();

  //   let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate("/home");
    //   (from, { replace: true });
  }

  //error
  if(error){
      errorElement = error.message;
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // getting email and pass value
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInWithEmailAndPassword(email, pass);
  };

  //navigate to register
  const navigateRegister = () => {
    navigate("/register"); //
  };
  return (
    <div className=" container w-25 mx-auto my-4">
      <h2 className="mb-4 text-danger">Please Login !!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="my-3">
          New to Khabar Dokan  ? 
           <Link
            to="/register"
            className="text-danger pe"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
      </Form>
      <p className="text-danger">{errorElement}</p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
