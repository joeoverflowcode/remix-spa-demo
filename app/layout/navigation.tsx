import React from "react";
import { Outlet } from "react-router";

const navigation = () => {
  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav>

          </nav>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default navigation;
