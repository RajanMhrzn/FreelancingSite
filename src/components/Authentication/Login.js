import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
import { Loading } from "../Pages/Loading";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading] = useAuthState(auth);

  const history = useHistory();
  useEffect(() => {
    if (loading) {
      <Loading />;
    }
  }, [user, loading]);
  const signInWithEmailAndPassword = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password).then((response) => {
      // this works fine because response.message is a string
    });

    return history.push("/browse-talents");
  };
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 rounded-l-lg">
          <div className="text-left font-bold">
            <Link to="/">
              <span className="text-green-500">Free</span>lancer
            </Link>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Log in to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2 p-3 ">
              <Link to="/facebook.com">
                <BsFacebook className="text-lg mx-2" />
              </Link>

              <Link to="/facebook.com">
                <BsTwitter className="text-lg mx-2 " />
              </Link>
            </div>
            <p className="text-gray-400">Or use yor email address</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p2 flex items-center mb-3">
                <HiOutlineMail className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>

              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <Link
                  to="/reset-password"
                  className="text-xs hover:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </div>
              <Link
                to="/browse-talents"
                onClick={() => signInWithEmailAndPassword(email, password)}
                className="border-2 border-green-500 px-5 py-2 rounded-2xl font-semibold hover:bg-green-500 hover:text-white  inline-block"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>

        <div className="w-2/5 bg-green-500 rounded-r-lg text-white py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello,</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Fill in personal information and satrt your journey with us.
          </p>
          <Link
            to="/Signup"
            className="border-2 px-5 py-2 rounded-2xl font-semibold hover:bg-white hover:text-black  inline-block"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};
