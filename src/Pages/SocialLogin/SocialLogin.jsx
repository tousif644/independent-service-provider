import React from "react";
import google from "../../Images/Social-icons/google.png";
import github from "../../Images/Social-icons/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error : {error?.message}{error1?.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-warning d-block mx-auto my-3"
        >
          <img src={google} alt="" width={20} /> Google Log in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
