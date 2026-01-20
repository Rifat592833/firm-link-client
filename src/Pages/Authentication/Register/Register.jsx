import React from "react";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";

const Register = () => {
 
const {CreateUser}  = UseAuth();

 const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm();

 const onSubmit = data =>{
  console.log(data);
  CreateUser(data.email,data.password)
  .then(result =>{
    console.log(result.user);
  })
  .catch(error =>{
    console.log(error);
  })
 }

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl ">
      <div className="card-body">
        <h1 className="text-5xl font-bold mb-6">Create An Account</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
                  <fieldset className="fieldset">

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      {...register('email',{
                        required:"Email is required",
                        pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                        },

                      }
                      )}

                    />
                    {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                    
        
                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                       {...register('password', {
                        required: "Password is required",
                      
                      }
                      )}
                    />
                    {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                 
        
                    {/* Forgot password */}
                    <div className="text-right mt-1">
                      <button type="button" className="link link-hover text-sm">
                        Forgot password?
                      </button>
                    </div>
        
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="
                       btn-primary-custom
                      "
                    >
                      Login
                    </button>
                  </fieldset>
        
                  <p className="mt-2">
                    <small>
                      Already have an account?{" "}
                      <Link className="btn btn-link p-0" to="/login">
                        Login
                      </Link>
                    </small>
                  </p>
                  <h3 className='text-center'>OR</h3>
                </form>
                <SocialLogin></SocialLogin>
        
      </div>
    </div>
  );
};

export default Register;
