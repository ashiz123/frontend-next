import React from 'react'
import BusinessHeader from './businessHeader'
import BusinessFooter from './businessFooter'

const BusinessLayout : React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BusinessHeader />
      <main className='container mx-auto'>{children}</main>
      <BusinessFooter />
    </>
  )
}

export default BusinessLayout