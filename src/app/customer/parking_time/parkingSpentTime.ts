import moment from "moment";



export const parkingSpentTime = (entry_time : string) => {
    const entryMoment = moment(entry_time);
    const exitMoment = moment();
    const diffInMinutes = exitMoment.diff(entryMoment, "minutes");
    return { diffInMinutes };
  }