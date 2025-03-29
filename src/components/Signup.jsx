import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import Modal from './modal';
import { AuthContext } from '../contexts/AuthProvider';



const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const {createUser, login} = useContext(AuthContext);

   // redirecting to home page or specifig page
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";
  
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password)
    createUser(email, password).then((result) => {
      const user = result.user;
      alert("Account created successfully");
      document.getElementById("my_modal_2").close()
      navigate(from, {replace: true})
    }).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl mt-10'>
         <div className="modal-action flex flex-col justify-center mt-0">
                <form onSubmit={handleSubmit(onSubmit)}
                  className="card-body"
                  method="dialog"
                >
                  <h3 className="font-bold text-lg">Create an Account!</h3>

                  {/* email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email")}
                    />
                  </div>

                  {/* password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      {...register("password")}
                    />
                    <label className="label mt-1">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>

                  {/* error */}
                  {/* {errorMessage ? (
                    <p className="text-red text-xs italic">{errorMessage}</p>
                  ) : (
                    ""
                  )} */}

                  {/* login btn */}
                  <div className="form-control mt-4">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn bg-green text-white"
                    />
                  </div>

                  <p className="text-center my-2">
                    Already have an account?{" "}
                    <button className="underline text-red ml-1" 
                    onClick={() => document.getElementById("my_modal_2").showModal()}
                    >
                      Login Now
                    </button>{" "}
                  </p>

                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </Link>
                </form>

                {/* social sign in */}
                <div className="text-center space-x-3 mb-5">
                  <button
                    className="btn btn-circle hover:bg-green hover:text-white"
                  >
                    <FaGoogle />
                  </button>
                  <button className="btn btn-circle hover:bg-green hover:text-white">
                    <FaFacebookF />
                  </button>
                  <button className="btn btn-circle hover:bg-green hover:text-white">
                    <FaGithub />
                  </button>
                </div>
              </div>
              <Modal/>
    </div>
   
  )
}

export default Signup