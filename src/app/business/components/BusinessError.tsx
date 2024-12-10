import React from 'react'

interface errorProps{
    error : string | undefined;
}

const BusinessError: React.FC<errorProps>  =({error}) =>{
  return (
    <p className="text-red-500 text-sm italic ">{error}</p>
  )
}

export default BusinessError;
