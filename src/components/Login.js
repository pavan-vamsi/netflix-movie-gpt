import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    //Validating the form data
    const msg = checkValidData(email.current.value, password.current.value);
    setErrMsg(msg);

    //Sign In / Sign Up after the msg is true or Valid
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="top-0 left-0 w-screen h-screen object-cover z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_small.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 rounded-lg absolute p-12 bg-black z-10 my-36 mx-auto right-0 left-0 text-white bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        {!isSignIn && (
          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="font-bold text-lg py-2 text-red-700">{errMsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 my-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now."
            : "Already Registered, Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
