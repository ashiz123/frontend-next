
import moment from "moment";


export const getCurrentTime = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
}