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
    <div>
         You have spent <span className="font-semibold text-blue-600"> {formattedTime}</span>
    </div>
  )
}


export default TimeDisplay