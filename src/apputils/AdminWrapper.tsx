import { Outlet } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import Footer from "./Footer";

function AdminWrapper() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
        <AdminNavBar />
        <div className="">
          <div className="mb-5 ml-4 mt-2">
            <h3 className="text-semibold text-lg  -mt-2">Mange users</h3>
            <p className="text-foreground/60 -mt-1">
              Manage users,Edit,Delete,Disable and more...
            </p>
          </div>
          <div className="border m-2 shadow-lg min-h-[80vh] rounded">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminWrapper;
