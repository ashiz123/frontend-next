import React from 'react'

interface timeDisplayPropInterface{
    totalMinutes : number 
}

const TimeDisplay : React.FC<timeDisplayPropInterface> =  ({totalMinutes}) => {

    console.log(totalMinutes);
    const hours = Math.floor(totalMinutes/60);
    const minutes = totalMinutes % 60;

    console.log(hours, minutes);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    console.log(formattedTime);

  return (
  <div className="flex justify-between items-center mb-2">
    <span className="text-gray-600">Time Spent:</span>
    <span className="text-green-600 font-bold text-xl">{formattedTime} hrs</span>
   </div>
  )
}


export default TimeDisplay