import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector(store => store.user)
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        console.log("sign out error", error)
        navigate("/error")
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen px-5 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {loggedInUser && <div className="flex p-2 content-baseline">
        <img
          className="w-12 h-12"
          // src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          src={loggedInUser?.photoURL}
          alt="user icon"
        />
        <button className="font-bold text-white" onClick={handleSignOut}>
          {" "}
          (Sign out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
