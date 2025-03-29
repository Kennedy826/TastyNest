import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router';

const UpdateProfile = () => {
  const {updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile(name, photoURL).then(() => {
      // Profile updated!
      navigate(from, {replace: true})
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  return (
    <div className='flex justify-center items-center min-h-screen gap-4'>

       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold">Update Profile</h1>
          <div className='flex flex-col mb-3'> 
          <label className="fieldset-label">Name</label>
          <input {...register("name")} type="text" className="input input-bordered" placeholder="name" />
          </div>
          <label className="fieldset-label ">Upload Photo</label>
          <input {...register("photoURL")} type="text" className="input input-bordered w-full mb-4" placeholder="photoURL" />
          <button className="btn btn-neutral bg-green text-white w-full">Update</button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default UpdateProfile