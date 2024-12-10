'use client'
import React, { useState } from 'react'
import PrimaryBtn from '../components/BusinessButton'
import { fetchUserRegister } from './fetchUserRegister';
import BusinessError from '../components/businessError';
import validateForm from './validateFormInput';
import { FormData, Errors, initialStateError } from './types';



export default function Page() {
  const [error, setError] = useState<Errors>(initialStateError);

 const [formData, setFormData] = useState<FormData>({
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    confirm_password : ""
 })

function handleChange(event :  React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    setFormData((prev) => ({...prev, [event.target.name] : event.target.value}))
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const isValid = validateForm(formData, setError)

    try{
      if(isValid){
        fetchUserRegister(formData);
      }
    }
    catch(error){
      console.log('Registeration failed', error);
      
    }
}



  return (
    <div className="flex items-center justify-center pt-20 pb-20 ">
   <form className="w-full max-w-lg" onSubmit={handleSubmit}>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
          First Name
        </label>
        <input onChange={handleChange} name="firstname" value={formData.firstname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      {error.firstname && <BusinessError error = {error.firstname} />  }
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Last Name
        </label>
        <input  onChange={handleChange} name="lastname" value={formData.lastname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
        {error.firstname && <BusinessError error = {error.lastname} />  }
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Email
        </label>
        <input  onChange={handleChange} name="email" value={formData.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="testing@gmail.com" />
        {error.firstname && <BusinessError error = {error.email} />  }
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Password
        </label>
        <input  onChange={handleChange} name="password" value={formData.password} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
        {error.password && <BusinessError error = {error.password} />  }
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Confirm Password
        </label>
        <input  onChange={handleChange} name="confirm_password" value={formData.confirm_password} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
         {error.confirm_password && <BusinessError error = {error.confirm_password} />}
      </div>
    </div>

    <PrimaryBtn title="Register"/>

    
    
  </form>
  </div>
  )
}
