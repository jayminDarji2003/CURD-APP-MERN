import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function getSingleUserData() {
    try {
      const user = await axios.get(
        `https://curd-app-backend.onrender.com/api/user/${id}`
      );
      setUserData(user?.data?.user);
      setName(user?.data?.user?.name);
      setFatherName(user?.data?.user?.fatherName);
      setEmail(user?.data?.user?.email);
      setPhone(user?.data?.user?.phoneNumber);
    } catch (error) {
      console.log("ERROR OCCURED WHILE FETCHING SINGLE USER DATA.");
    }
  }

  //console.log(userData);

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `https://curd-app-backend.onrender.com/api/updateUser/${id}`,
        {
          name,
          fatherName,
          email,
          phoneNumber: phone,
        }
      );

      console.log("DATA SUBMITTED");
      toast.success("User updated successfully");
      navigate("/");
    } catch (error) {
      console.log("ERROR WHILE SUBMITING THE DATA");
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div
        className="py-12 bg-white transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 text-xl text-center font-bold tracking-normal leading-tight mb-4">
              UPDATE USER
            </h1>

            <label
              htmlFor="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Dev"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label
              htmlFor="fname"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Father Name
            </label>
            <input
              type="text"
              id="fname"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Manish bhai"
              required
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />

            <label
              htmlFor="email"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Enter Email
            </label>
            <input
              type="email"
              id="email"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              htmlFor="phone"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="9987887811"
              required
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="flex items-center justify-center w-full">
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2  transition duration-150 ease-in-out hover:bg-teal-500 bg-teal-400 rounded text-white px-8 py-2 text-sm"
                onClick={handleSubmit}
              >
                Submit
              </button>

              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
