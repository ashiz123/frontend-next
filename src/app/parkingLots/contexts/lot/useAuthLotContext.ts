import { useContext } from "react";
import AuthLotContext, { AuthLotContextType } from "./authLotContext";



export const useAuthLotContext = ():AuthLotContextType => {

    const authLotContext = useContext(AuthLotContext)
    if (!authLotContext) {
        throw new Error('useAuthLotContext must be used within a AuthLotProvider');
    }
    return authLotContext;
}