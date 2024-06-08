import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className=" h-full w-full d-center">
      {children}
    </div>
  );
};

export default AuthLayout;
