import React, { useRef } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  let errorElement;
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  // user
  if (user) {
    navigate("/home");
  }

  // error
  if (error) {
    errorElement = error.message;
  }

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // getting the value
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(email, password);
    console.log(name);
  };
  return (
    <div className="register-form">
      <h3 style={{ textAlign: "center" }}>Welcome to Register 🤗</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <input type="submit" value="Register" />
      </form>
      <p className="check-text">
        Already have an Account ?
        <Link
          to="/login"
          className="text-danger pe-auto"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <h3 className="text-danger">{errorElement}</h3>
    </div>
  );
};

export default Register;
