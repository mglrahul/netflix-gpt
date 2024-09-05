import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
  } from "firebase/auth";
import Header from "./Header";
import { formValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationMessage, setValidationMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignInForm = () => {
    console.log(
      "handleSignInForm",
      emailRef.current.value,
      passwordRef.current.value
    );
    let message = null;

    if (isSignInForm) {
      message = formValidation(
        null,
        emailRef.current.value,
        passwordRef.current.value,
        "signIn"
      );
    } else {
      message = formValidation(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value,
        "signUp"
      );
    }

    console.log("handleSignInForm-message:", message);
    setValidationMessage(message);

    if (!isSignInForm) {
      // signup form
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef?.current?.value, photoURL: "https://avatars.githubusercontent.com/u/7267407?v=4"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
                addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                })
            );
            console.log("signin", user);
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            console.log("profile pic update error", error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("signup", errorCode + " - " + errorMessage);
          setValidationMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // signup api
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signin", user);
          navigate("/browse");
          
          // ...
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;
          console.log("signin error", error, errorCode, errorMessage);
          setValidationMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            className="p-4 my-4 w-full bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Email Address"
        />
        <input
          ref={passwordRef}
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Password"
        />
        <p className="font-bold text-red-700 text-2xl">{validationMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSignInForm}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to netflix? sign up now."
            : "Already registered? sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
