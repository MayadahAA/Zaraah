import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../assets/logo.svg";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isLogIn, setIsLogIn] = useState(false);

  const LoggOut = () => {
    if (localStorage.getItem("logged")) {
      localStorage.setItem("logged", "logout");
    }
    setIsLogIn(false);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-400 py-5 px-8 md:px10 lg:px-20">
        <a href="/">
          <img src={img} className="w-2/12" alt="logo" />
        </a>
        <nav>
          <section className=" flex lg:hidden">
            <div
              className=" space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "flex absolute w-full h-1/2 top-0 left-0 bg-white z-10 flex-col items-center justify-around shadow-md" : "hidden"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-slate-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-start justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">Home</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">Catalog</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                {isLogIn ? (
              <button onClick={LoggOut}> Log out </button>
            ) : (
              <Link to="/login">log in</Link>
            )}
                </li>
              </ul>
            </div>
          </section>

          <ul className="hidden space-x-8 lg:flex items-center px-20">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li >
                <Link to="/Catalog">Catalog</Link>
                </li>
            <li>
            </li>
            <li>
            {isLogIn ? (
              <button onClick={LoggOut}> Log out </button>
            ) : (
              <Link to="/login">log in</Link>
            )}            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
