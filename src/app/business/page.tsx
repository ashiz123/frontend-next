"use client"
import Link from 'next/link'
import React from 'react'


export default function Business() {


  return (
    <div>
          <section className="bg-gray-50">
    <div className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Manage Your Parking Lots Seamlessly
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Create, organize, and track parking spaces with ease using our all-in-one management tool.
      </p>
      <Link href="/business/register" className="bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-teal-700">
         Get Started Now
      </Link>
    </div>
  </section>

  {/* <!-- Features Section --> */}
  <section id="features" className="bg-white py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Feature 1 --> */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <img src="https://via.placeholder.com/100" alt="Feature Icon" className="mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Lot Creation</h3>
          <p className="text-gray-600">Quickly create and configure parking lots with customizable options.</p>
        </div>
        {/* <!-- Feature 2 --> */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <img src="https://via.placeholder.com/100" alt="Feature Icon" className="mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Tracking</h3>
          <p className="text-gray-600">Monitor parking space availability and manage in real-time.</p>
        </div>
        {/* <!-- Feature 3 --> */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <img src="https://via.placeholder.com/100" alt="Feature Icon" className="mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600">Access detailed insights and reports to optimize parking lot performance.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Call to Action Section --> */}
  <section className="bg-teal-600 text-white py-12">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Simplify Parking Management?</h2>
      <p className="text-lg mb-6">Sign up today and take the first step towards better parking solutions for your business.</p>
      <a href="#signup" className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100">
        Sign Up for Free
      </a>
    </div>
  </section>
    </div>
  )
}
