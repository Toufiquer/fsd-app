import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className={` container mx-auto`}>
        <div className="navbar">
          <div className="flex-1">
            <Link
              href="/dashboard"
              className="btn btn-ghost normal-case text-xl"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex-none gap-2">
            <Link href="/" className="btn">
              Log In
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {/* <Image
                    width={40}
                    height={40}
                    src="https://i.ibb.co/NYHF7nk/76626656-s-400-v-4.png"
                  /> */}
                  <img
                    src="https://i.ibb.co/NYHF7nk/76626656-s-400-v-4.png"
                    alt="Toufiquer Rahman Image"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/" className="justify-between">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="justify-between">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
