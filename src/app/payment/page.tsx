import Layout from '@/components/layout'
import React from 'react'

export default function Payment() {
  return (
    <Layout>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-3">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment form</h2>

    <form>
      {/* <!-- Cardholder Name --> */}
      <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
        <input type="text" id="cardholder-name" name="cardholder-name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="John Doe" /> 
      </div>

      {/* <!-- Card Number --> */}
      <div className="mb-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" id="card-number" name="card-number" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="1234 5678 9012 3456" />
      </div>

      {/* <!-- Expiration Date & CVV --> */}
      <div className="flex gap-4 mb-4">
        {/* <!-- Expiration Date --> */}
        <div className="w-1/2">
          <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input type="text" id="expiry-date" name="expiry-date" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="MM/YY" />
        </div>
        {/* <!-- CVV --> */}
        <div className="w-1/2">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
          <input type="text" id="cvv" name="cvv" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="123" />
        </div>
      </div>

      {/* <!-- Submit Button --> */}
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
        Pay Now
      </button>
    </form>
  </div>
  </div>
    </Layout>
  )
}
