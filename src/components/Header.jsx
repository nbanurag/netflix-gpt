import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUserPhoto, removeUser } from "../store/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { userAvtr } from "../utils/constants";
import { getGptSearchMode, toggleGptSearchView } from "../store/gptSlice";

export const Header = () => {
  const userPhotoUrl = useSelector(getUserPhoto);
  const gptSearchMode = useSelector(getGptSearchMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        if (window.location.pathname === "/") navigate("/browse");
      } else {
        if (window.location.pathname !== "/") navigate("/");
      }
    });
    return () => unSubscribe();
  }, [navigate, dispatch]);

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full px-10 pt-4 flex justify-between">
      <img width="200" height="50" src={userAvtr} alt="logo" />
      {userPhotoUrl && (
        <div className="flex gap-2 text-2xl font-bold items-center text-white cursor-pointer">
          <button
            onClick={() => dispatch(toggleGptSearchView())}
            className="!bg-purple-500 !p-2 !px-4 mr-2 !text-[20px]"
          >
            {gptSearchMode ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-10 h-10 mt-2" src={userPhotoUrl} alt="logo" />
          <span onClick={handleSignout}>Sign Out</span>
        </div>
      )}
    </div>
  );
};
