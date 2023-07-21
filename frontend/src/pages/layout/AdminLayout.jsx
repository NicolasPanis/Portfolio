import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex">
      <Outlet />
    </div>
  );
}

export default AdminLayout;
