import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content relative">
            {/* Sidebar content here */}
            <li>
              <Link href="/dashboard/profile">My Profile</Link>
            </li>
            <li>
              <Link href="/dashboard/connections">My Connections</Link>
            </li>
            <button type="button" className={` absolute bottom-8 left-8 btn `}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
