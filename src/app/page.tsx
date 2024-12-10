'use client';
import React from 'react';
import CustomButton from './_components/button';
import Navigation from './customer/components/navigation';
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();

function navigateCustomerPage(){
  router.push('./customer');
}


function navigateBusinessPage(){
  router.push('/business');
}

  return (
    <div>
      <Navigation />
      <main className='container mx-auto'>
        {/* body */}
    <div className='bg-gray-100 flex justify-center items-center min-h-screen'>
      {/* center white box */}
     <div className ="bg-white rounded-lg shadow-lg p-8 text-center w-full max-w-md">
    <h1 className ="text-3xl font-semibold text-gray-800 mb-6">Park & Go</h1>
    <div className ="space-y-4">
      <CustomButton  title = "Customer Page" onClick={navigateCustomerPage} classname='block min-w-full px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400' />
      <CustomButton title = "Business Page" onClick={navigateBusinessPage} classname='"block px-6 py-3 min-w-full bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400'  />
    </div>
  </div>

  </div>
  </main>
  </div>
  )
}

