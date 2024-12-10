import React from 'react'

interface ErrorMessageProps{
    error: string;
}

const ErrorMessage : React.FC<ErrorMessageProps> = ({error}) => {

return (<>
    {error && <p className="text-red-500 text-sm font-semibold"> {error} </p>}
    </>
  )
}

export default ErrorMessage;
