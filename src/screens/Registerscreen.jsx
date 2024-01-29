import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import axios from "axios";
import Success from "../components/Success";

function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  // const [registrationStatus, setRegistrationStatus] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  async function register() {
    if (password == cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };

      try {
        setLoading(true);
        const result = await axios.post("/api/users/register", user).data;
        setLoading(false);
        setSuccess(true);

        setName("");
        setEmail("");
        setPassword("");
        setcpassword("");
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Passwords not matched");
    }
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {success && <Success message="Registration success" />}
          <div className="bs">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button className="btn btn-primary mt-3" onClick={register}>
              Register
            </button>

            {/*  */}

            {/* Display success message */}
            {/* {registrationStatus === "success" && ( */}
            {/* <div className="alert alert-success mt-3" role="alert"> */}
            {/* Registration successful! You can now login. */}
            {/* </div> */}
            {/* )} */}

            {/* Display failure message */}
            {/* {registrationStatus === "failure" && ( */}
            {/* <div className="alert alert-danger mt-3" role="alert"> */}
            {/* Registration failed. Please try again. */}
            {/* </div> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
