import React from 'react'

interface AmountDisplayProps{
    parkingAmount : number
}

const AmountDisplay: React.FC<AmountDisplayProps>  = ({parkingAmount}) => {

  const formattedAmount = parkingAmount.toFixed(2);
    



  return (
    <div className="flex justify-between items-center mb-2">
    <span className="text-gray-600">Charge Amount:</span>
    <span className="text-green-600 font-bold text-xl">${formattedAmount}</span>
</div>
)}



export default AmountDisplay