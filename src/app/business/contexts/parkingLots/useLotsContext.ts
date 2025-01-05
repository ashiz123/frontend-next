import { useContext } from "react";
import LotsContext, {lotsContextType} from "./lotsContext";

export const useLotsContext = ():lotsContextType => {
    const context = useContext(LotsContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}




