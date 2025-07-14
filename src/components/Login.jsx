import React, { useState } from "react";

export const Login = () => {
  const [isSigninFrom, setSigninForm] = useState(true);
  return (
    <div>
      <div>
        <img
        className="max-h-screen !w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          alt="logo"
        />
      </div>
      <form className=" absolute bg-black/80 w-1/4 p-12 top-60 mx-auto right-0 left-0 text-white flex flex-col gap-4">
        <div className="text-3xl font-bold mb-2">
          {isSigninFrom ? "Sign in" : "Sign up"}
        </div>
        {!isSigninFrom && (
          <input
            className="bg-transparent rounded"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          className="bg-transparent rounded"
          placeholder="Username"
          type="text"
        />
        <input
          className="bg-transparent rounded"
          placeholder="Password"
          type="text"
        />
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
