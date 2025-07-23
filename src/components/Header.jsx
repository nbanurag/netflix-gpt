import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUserPhoto, removeUser } from "../store/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const userPhotoUrl = useSelector(getUserPhoto);
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
    <div className="absolute bg-gradient-to-b from-black w-full px-10 pt-4 flex justify-between">
      <img
        width="200"
        height="50"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userPhotoUrl && (
        <div className="flex gap-2 text-2xl font-bold items-center text-white">
          <img className="w-10 h-10 mt-2" src={userPhotoUrl} alt="logo" />
          <span onClick={handleSignout}>Sign Out</span>
        </div>
      )}
    </div>
  );
};
