import React from "react";
import BusinessHeader from "./businessHeader";
import BusinessFooter from "./businessFooter";
import UserProvider from "../contexts/user/userProvider";

const BusinessLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserProvider>
        <BusinessHeader />
        <main className="container mx-auto">{children}</main>
        <BusinessFooter />
      </UserProvider>
    </>
  );
};

export default BusinessLayout;
