import type { ChangeEvent, FormEvent } from "react"; 
import { useState, useEffect } from "react"; 
import axios from "axios";


export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [clicked, setClicked] = useState(false);
  function Error(){
    useEffect(()=>{
      setTimeout(()=>{
        setClicked(false);
      }, 3500);
    });
    return clicked ? (
      <div className="border border-red-400 rounded bg-red-100 px-2 py-1 text-red-700">
        Please fill this field
      </div>
    ) : <></>;
  }
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setClicked(true);
    axios.post("http://localhost:3000/auth",user,{
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*", 
      },
    })
      .then(response => console.log(response))
      .catch(AxiosError => console.log(AxiosError));
    
  }
       
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
              <div>
                {clicked && user.email === "" ? <Error /> : <></> }
                <label className="after:content-['*'] after:text-red-500 block text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  autoFocus
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring ${clicked && user.email === "" ? "ring-red-300" : "" } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="name@company.com"
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                {clicked && user.password === "" ? <Error /> : <></> }
                <label className="after:content-['*'] after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring ${clicked && user.password === "" ? "ring-red-300" : "" } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
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
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
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
