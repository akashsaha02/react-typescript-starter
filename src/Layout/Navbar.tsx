import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { logout, selectUser } from "@/store/features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CommonWrapper from "@/common/CommonWrapper";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(selectUser);
  console.log("user", user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-website-color-green shadow-lg sticky top-0">
      <CommonWrapper>
        <div className="mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-white text-2xl font-bold">
              MyApp
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    {user?.profilePhoto ? (
                      <AvatarImage
                        src={user.profilePhoto}
                        alt={user.fullName}
                      />
                    ) : (
                      <AvatarFallback>
                        {user?.fullName?.[0] || "U"}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="mr-3 bg-website-color-darkGray border-none text-white">
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <Avatar>
                      {user?.profilePhoto ? (
                        <AvatarImage
                          src={user.profilePhoto}
                          alt={user.fullName}
                        />
                      ) : (
                        <AvatarFallback>
                          {user?.fullName?.[0] || "U"}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <span className="font-semibold">{user?.fullName}</span>
                    <span className="text-xs text-gray-300">{user?.email}</span>
                  </div>
                  <Button
                    onClick={handleLogout}
                    className="bg-website-color-lightGray text-black w-full"
                  >
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Button
                onClick={handleLogout}
                className="mt-3 bg-website-color-lightGray text-black w-full"
              >
                Logout
              </Button>
            )}
          </div>
        )}
      </CommonWrapper>
    </nav>
  );
};

export default Navbar;
