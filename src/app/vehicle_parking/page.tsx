"use client";
import Layout from '@/components/layout'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {

     const router = useRouter();


     function  goToPayment()
     {
          router.push('/payment')
     }



  return (
   <Layout>
        <div className="flex justify-center items-center h-screen bg-gray-50">
  <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Time Spent</h1>
    <p className="text-lg text-gray-700 mb-6">
      You have spent <span className="font-semibold text-blue-600">{20}m {30}s</span>
    </p>

    <div className="border-t-2 border-gray-200 my-6 pt-6">
      <p className="text-lg text-gray-700 font-medium mb-4">Do you want to exit?</p>
      <button onClick = {() =>goToPayment()} className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Pay for parking
      </button>
    </div>
  </div>
</div>

   
    
   </Layout>
  ) 
}
