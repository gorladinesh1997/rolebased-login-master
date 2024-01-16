import React, { useState } from "react";
import TextInput from "../../Components/TextInput";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e, prop) => {
    const { value } = e.target;
    setFormData({ ...formData, [prop]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem('auth', true);
    navigate("/");
  };
  return (
    <div className="bg-slate-400 flex justify-center items-center h-[100vh]">
      <form
        className="sm:w-1/2 w-full p-5
         bg-white border 
         border-gray-200 
         rounded-lg shadow 
         dark:bg-gray-800 
         dark:border-gray-700"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold">LOGIN TO APPLICATION</h1>
        <TextInput
          placeHolder="email"
          onChange={(e) => handleChange(e, "email")}
          value={formData.email}
          name={"email"}
          label="email"
        />
        <TextInput
          placeHolder="password"
          onChange={(e) => handleChange(e, "password")}
          value={formData.password}
          name={"password"}
          label="password"
        />

        <button className="text-white bg-blue-700  w-full
         hover:bg-blue-800 
         focus:ring-4 focus:ring-blue-300 
         font-medium rounded-lg 
         text-sm px-5 py-2.5 me-2 mb-2 mt-2
         dark:bg-blue-600 
         dark:hover:bg-blue-700 
         focus:outline-none 
         dark:focus:ring-blue-800" type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
