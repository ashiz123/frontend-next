// /pages/_app.tsx
import { VehicleProvider } from "@/contexts/Vehicle/VehicleProvider";
import { AppProps } from "next/app";
import Enter_registeration from "./enter_registeration/page";


function App() {
  return (
    <Enter_registeration />
  );
}

export default App;