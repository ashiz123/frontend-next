// hoc/withAuth.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserDataInterface } from "../contexts/user/UserDataInterface";
import { useUserContext } from "../contexts/user/userContext";
import { usePathname } from "next/navigation";

type WithAuthProps = {
  isAuthenticated: boolean;
  user: UserDataInterface | null;
};

const withAuth = <P extends WithAuthProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ProtectedComponent = (props: P) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState<UserDataInterface | null>(null);
    const { user, setUser } = useUserContext();
    const router = useRouter();
    const pathname = usePathname();

    //important way
    //This is better when we have common useEffect of all component.
    useEffect(() => {
      const userData = sessionStorage.getItem("auth_user");
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setIsAuthenticated(true);
        setUserData(parsedUser);
      } else {
        setUser(null);
        localStorage.setItem("path", pathname);
        console.log("logged out");
        router.push("/business/login");
      }
    }, [router, user]);

    return (
      <WrappedComponent
        {...props}
        isAuthenticated={isAuthenticated}
        user={userData}
      />
    );
  };

  return ProtectedComponent;
};

export default withAuth;
