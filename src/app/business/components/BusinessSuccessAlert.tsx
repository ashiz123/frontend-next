import React from 'react'

interface successMessageProps{
    msg : string | undefined;
}

const BusinessSuccessAlert: React.FC<successMessageProps> = ({msg}) => {
  return (
    <p className="text-green-600 text-sm font-bold italic  ">{msg}</p>
  )
}

export default BusinessSuccessAlert;
