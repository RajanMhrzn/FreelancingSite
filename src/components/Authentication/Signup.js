import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db, app } from "../../firebase";
import { BsFacebook, BsTwitter, BsPersonCircle } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";

export const Signup = () => {
  const [fileUrl, setFileUrl] = useState();
  const history = useHistory();
  const [formData, setFormData] = useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];

    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };
  const HandleChange = async (e) => {
    console.log(e.target.name + ":" + e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, address, phone, password } = formData;
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Address: ", address);
    console.log("Phone: ", phone);
    console.log("Password: ", password);
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;

    if (!name || !fileUrl || !email || !password || !address || !phone) {
      return;
    }
    await db
      .collection("users")
      .doc(user.uid)
      .set({
        uid: user.uid,
        name: name,
        address: address,
        phone: phone,
        image: fileUrl,
        email: email,
        password: password,
        isVerified: "true",
      })
      .then(history.push("/dashboard"))
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };
  return (
    <>
      <form className="register-main">
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
                  Register Form Application
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
                    <BsPersonCircle className="text-gray-400 m-2" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      onChange={HandleChange.bind(this)}
                    />
                  </div>

                  <div className="bg-gray-100 w-64 p2 flex items-center mb-3">
                    <HiOutlineMail className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      onChange={HandleChange.bind(this)}
                    />
                  </div>

                  <div className="bg-gray-100 w-64 p2 flex items-center mb-3">
                    <HiOutlineMail className="text-gray-400 m-2" />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      onChange={HandleChange.bind(this)}
                    />
                  </div>

                  <div className="bg-gray-100 w-64 p2 flex items-center mb-3">
                    <HiOutlineMail className="text-gray-400 m-2" />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      onChange={HandleChange.bind(this)}
                    />
                  </div>

                  <div className="bg-gray-100 w-64 p2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      onChange={HandleChange.bind(this)}
                    />
                  </div>

                  <div className="bg-gray-100 w-64 p2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="file"
                      name="file"
                      placeholder="Attach File"
                      onChange={onFileChange}
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>

                  <div className=" justify-between w-64 mb-5">
                    <p className="mb-10">
                      By creating an account you agree to our
                      <span className="text-blue-500">
                        {" "}
                        terms and conditions.
                      </span>
                    </p>
                    <Link
                      onClick={handleSubmit.bind(this)}
                      to="/login"
                      className="border-2 px-5 py-2 rounded-2xl font-semibold bg-green-500 text-white hover:text-black  inline-block"
                    >
                      Create Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-2/5 bg-green-500 rounded-r-lg text-white py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hello,</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">Already have an account?</p>
              <Link
                to="/login"
                className="border-2 px-5 py-2 rounded-2xl font-semibold hover:bg-white hover:text-black  inline-block"
              >
                Login
              </Link>
            </div>
          </div>
        </main>
      </form>
    </>
  );
};
