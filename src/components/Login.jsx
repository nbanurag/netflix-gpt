import React, { useState } from "react";
import { validateLoginValues } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Header } from "./Header";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { netflixBg } from "../utils/constants";

export const Login = () => {
  const [isSigninFrom, setSigninForm] = useState(true);
  const [fields, setFileds] = useState({});
  const [errorMsg, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = fields;
    const error = validateLoginValues(email, password, !isSigninFrom, name);

    setError(error);
    if (error) return;
    if (isSigninFrom) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage + errorCode);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABStlS0MPUGcy6Ovyeia-3ddnnXNb2Lri4P4H4QCFuR_yaGs0umyqHUDOZcOBKF8MFUGHX07txAW70z7wq_S9AKGQ_MixrLQ.png?r=a4b",
          }).then(() => {
            const { displayName, email, uid, photoURL } = auth.currentUser;

            dispatch(
              addUser({
                uid,
                email,
                displayName,
                photoURL,
              })
            );
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="max-h-screen !w-screen"
          src={netflixBg}
          alt="logo"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className=" absolute bg-black/80 w-1/4 p-12 top-40 mx-auto right-0 left-0 text-white flex flex-col gap-4"
      >
        <div className="text-3xl font-bold mb-2">
          {isSigninFrom ? "Sign in" : "Sign up"}
        </div>
        {!isSigninFrom && (
          <input
            className="bg-transparent rounded"
            placeholder="Full Name"
            onChange={(e) =>
              setFileds((state) => ({ ...state, name: e.target.value }))
            }
            type="text"
          />
        )}
        <input
          className="bg-transparent rounded"
          onChange={(e) =>
            setFileds((state) => ({ ...state, email: e.target.value }))
          }
          placeholder="Email"
          type="text"
        />
        <input
          className="bg-transparent rounded"
          onChange={(e) =>
            setFileds((state) => ({ ...state, password: e.target.value }))
          }
          placeholder="Password"
          type="password"
        />
        <p className="text-red-500">{errorMsg}</p>
        <button className="!bg-red-600 !rounded-[3px]">sign in</button>
        <div>
          {isSigninFrom ? (
            <>
              New to Netflix?{" "}
              <span
                role="presentation"
                onClick={() => setSigninForm(!isSigninFrom)}
              >
                Sign up now.
              </span>
            </>
          ) : (
            <>
              Already Registered?{" "}
              <span
                role="presentation"
                onClick={() => setSigninForm(!isSigninFrom)}
              >
                Sign In now.
              </span>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
