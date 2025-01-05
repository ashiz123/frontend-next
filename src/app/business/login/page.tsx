'use client';

import React, { useState } from 'react';
import {FormData, Error, initialStateError, initialStateForm} from './type';
import PrimaryBtn from '../components/BusinessButton';
import BusinessError from '../components/BusinessError';
import { fetchUserLogin } from './fetchUserLogin';
import { useUserContext } from '../contexts/user/userContext';
import {  useRouter } from 'next/navigation';
import withGuest from '@/app/hoc/withGuest';
import Link from 'next/link';


const Page = () => {
    const [formData, setFormData] = useState<FormData>(initialStateForm)
    const [error, setError] = useState<Error>(initialStateError)
    const {user, setUser} = useUserContext();
    const router = useRouter();
 

 

    function handleChange(event : React.ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        setFormData((prev) => ({...prev , [event.target.name] : event.target.value}))
    }
        

    const handleSubmit = async(event : React.FormEvent) => {
        event.preventDefault();
        try{
            const response = await fetchUserLogin(formData);
            const loggedInUser = response?.data.user
            setUser(loggedInUser);
            sessionStorage.setItem('auth_user', JSON.stringify(loggedInUser));
            const path   = localStorage.getItem('path');
            if (typeof path === 'string') {
              router.push(path);
            } else{
              router.push('/business/dashboard')
            }
           
        }
        catch(error){
            console.log(error);

        }
       
    }


    console.log(user);






  return (
    <div className="flex items-center justify-center pt-20 pb-20 ">
   <form className="w-full max-w-lg" onSubmit={handleSubmit}>
   
     
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Email
        </label>
        <input  onChange={handleChange} name="email" value={formData.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="testing@gmail.com" />
        {error.email && <BusinessError error = {error.email} />  }
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
   

    <PrimaryBtn title="Login"/>

    <div className="text-center p-3">
          <p className="text-sm text-gray-600">
              Do not have an account?{' '}
            <Link
              href="/business/register"
              className="font-medium text-blue-500 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
    
  </form> 

  
  </div>
  )
}


export default withGuest(Page);
