import {
  EmailError,
  PasswordError,
  vaidatePassword,
  validateEmail,
} from "./Signup";

import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [clicked, setClicked] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  function Error() {
    useEffect(() => {
      setTimeout(() => {
        setClicked(false);
      }, 3500);
    });
    return clicked ? (
      <label className="text-red-500 text-xs">Please fill this field</label>
    ) : (
      <></>
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setClicked(true);
    if ("" === user.email || "" === user.password) {
      return;
    }
    validateEmail(user.email)
      ? setEmailError("")
      : setEmailError("Invalid Email");
    vaidatePassword(user.password)
      ? setPasswordError("")
      : setPasswordError(
          "Password should be 8 to 20 characters long with no special characters except @,_"
        );
    if (!validateEmail(user.email) || !vaidatePassword(user.password)) {
      return;
    }
    axios
      .post("http://localhost:3000/auth", user, {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => console.log(response))
      .catch((AxiosError) => console.log(AxiosError));
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  }
  return (
    <section className={"mainContainer"}>
      <div className={"formContainer"}>
        <div className={"formBox"}>
          <div className={"formContent"}>
            <h1 className={"heading1"}>Sign up</h1>
            <form className={"form"} method="POST" onSubmit={handleSubmit}>
              <div>
                <label className={"label"}>Email</label>
                <input
                  autoFocus
                  type="email"
                  name="email"
                  id="email"
                  className={`input ${clicked && "" === user.email ? "ring-red-300" : ""}`}
                  placeholder="name@company.com"
                  onChange={handleInputChange}
                />
                {clicked && "" === user.email ? <Error /> : <></>}
                <EmailError emailError={emailError} />
              </div>
              <div>
                <label className={"label"}>Retype Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`input ${clicked && "" === user.password ? "ring-red-300" : ""}`}
                  onChange={handleInputChange}
                />
                {clicked && "" === user.password ? <Error /> : <></>}
                <PasswordError passwordError={passwordError} />
              </div>
              <div className={"subContainer"}>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className={"checkbox"}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className={`link`}>
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a href="#" className={"link"}>
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
