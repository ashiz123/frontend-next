"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthLotContext } from "../contexts/lot/useAuthLotContext";
import { getAuthLot } from "./getAuthLot";
import { ParkingLot } from "@/app/types/parkingLot";

type withLotAuthProps = {
  isAuthenticated: boolean;
  lot: ParkingLot;
  logout: () => void;
};

const withLotAuth = <P extends withLotAuthProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ProtectedComponent = (props: P) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { lot, setLot } = useAuthLotContext();

    useEffect(() => {
      const fetchLot = async (accessToken: string): Promise<void> => {
        const data = await getAuthLot(accessToken);
        setIsAuthenticated(true);
        setLot(data);
      };
      const initializeAuth = async () => {
        const accessToken = localStorage.getItem("lot_auth");
        if (!accessToken) {
          router.push("/parkingLots/login");
          return;
        }
        try {
          await fetchLot(accessToken);
        } catch (error) {
          console.log(error);
          router.push("/parkingLots/login");
        }
      };

      initializeAuth();
    }, [router, setLot, isAuthenticated]);

    const logout = () => {
      localStorage.removeItem("lot_auth");
      setIsAuthenticated(false);
      setLot(null);
    };

    return (
      <WrappedComponent
        {...props}
        isAuthenticated={isAuthenticated}
        lot={lot}
        logout={logout}
      />
    );
  };

  return ProtectedComponent;
};

export default withLotAuth;
