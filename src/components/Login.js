import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { formValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, LOGIN_BG_IMAGE } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationMessage, setValidationMessage] = useState(null);
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
            displayName: nameRef?.current?.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
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
            })
            .catch((error) => {
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
          className="h-screen object-cover md:w-screen md:h-screen"
          src={LOGIN_BG_IMAGE}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
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
