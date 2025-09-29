import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b  dark:border-gray-700 py-2.5">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/photos/D.png"
            alt="Devora Logo"
            className="w-10 h-10"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Devora
          </span>
        </Link>

        {/* Right section */}
        <div className="flex items-center lg:order-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full 
             hover:bg-gray-100 dark:hover:bg-gray-700 
             focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-[#00C4B4]" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden 
                       hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                       dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {[
              { name: "Home", to: "/" },
              { name: "Services", to: "/services" },
              { name: "About Us", to: "/about" },
              { name: "Contact", to: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative block py-2 pl-3 pr-4 border-b border-gray-100 
             lg:border-0 lg:p-0 dark:border-gray-700
             after:content-[''] after:absolute after:left-0 after:right-0 
             after:bottom-0 after:h-[2px] after:bg-[#00C4B4] after:scale-x-0 
             after:origin-center after:translate-y-[4px]
             after:transition-transform after:duration-300
             hover:after:scale-x-100
             ${isActive
                      ? "text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-400"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
