import moment from "moment";
// import { useMemo } from "react";



export const parkingSpentTime = (entry_time : string) => {
    const entryMoment = moment(entry_time);
    console.log('entry time', entryMoment)
    const exitMoment = moment();
    console.log('exit time', exitMoment)
    const diffInMinutes = exitMoment.diff(entryMoment, "minutes");
    return  diffInMinutes;
  }