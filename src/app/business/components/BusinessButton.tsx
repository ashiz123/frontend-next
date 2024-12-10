import React from 'react'

interface buttonProps{
    title : string;
    extraclass ?: string;
}

const PrimaryBtn : React.FC<buttonProps> = ({title}) => {
  return (
    <button aria-label='business-btn' className='px-6 py-3 min-w-full bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400'>
        {title}
    </button>
  )
}

export default PrimaryBtn;
