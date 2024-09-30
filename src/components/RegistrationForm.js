import React, { useState } from "react";
import "./form.css";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const sumbit = (e) => {
    e.preventDefault();
    alert(
      `username: ${formData.username}, email: ${formData.email}, password: ${formData.password}`
    );
  };
  return (
    <div className="formDiv">
      <form onSubmit={sumbit} className="form">
        <div>
          <label>
            username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={onChange}
              placeholder="Westarda"
            ></input>
          </label>
          <label>
            email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="useruser@gmail.com"
            ></input>
          </label>
          <label>
            password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="Aa4@*"
            ></input>
          </label>
          <button type="submit" className="submitBtn">
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
