import Link from "next/link";
import React from "react";
import { useUserContext } from "../contexts/user/userContext";

export default function BusinessNavigation() {
  const { user, setUser } = useUserContext();

  function logout() {
    setUser(null);
    sessionStorage.removeItem("auth_user");
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="container mx-auto flex">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="" href="/business">
            <span className="font-semibold text-xl tracking-tight">
              Park & Go Business
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            aria-label="navigation"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto pt-4 pb-4 text-center">
          <div className="text-lg lg:flex-grow">
            {user ? (
              <>
                <Link
                  href="/business/dashboard"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Dashboard
                </Link>

                <Link
                  href="/business/settings"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Settings
                </Link>

                <Link
                  href="/business/records"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Records
                </Link>
              </>
            ) : (
              <>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Resources
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Pricing
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  About us
                </a>
              </>
            )}
          </div>
          <div>
            {user ? (
              <Link
                href=""
                onClick={logout}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Logout
              </Link>
            ) : (
              <>
                <span className="text-sm text-green-100">
                  Already a client?{" "}
                </span>
                <Link
                  href="/business/login"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
