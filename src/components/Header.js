import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleSearchGPT } from "../utils/searchGptSlice";
import { updateLanguage } from "../utils/appLanguageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store.user);
  const enableSearchGPT = useSelector((store) => store.search.enableSearchGPT);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("sign out error", error);
        navigate("/error");
      });
  };

  const handleSearchGPT = () => {
    dispatch(toggleSearchGPT());
  };

  const handleAppLanguage = (e) => {
    console.log("lang", e.target.value);
    dispatch(updateLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between">
      <img className="w-40" src={LOGO} alt="logo" />
      {loggedInUser && (
        <div className="flex p-2 content-baseline">
          <select
            className="bg-gray-900 p-2 m-2 text-white rounded-lg"
            onChange={handleAppLanguage}
          >
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.label}
              </option>
            ))}
          </select>
          <button
            className="p-3 m-1 mx-2 bg-purple-700 text-white rounded-lg"
            onClick={handleSearchGPT}
          >
            {enableSearchGPT ? "Home" : "Search GPT"}
          </button>
          <img
            className="w-12 h-12"
            src={loggedInUser?.photoURL}
            alt="user icon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            {" "}
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
