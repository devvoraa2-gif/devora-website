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
          <span className="self-center text-xl font-semibold whitespace-nowrap text-[#A78BFA] dark:text-[#A78BFA]">
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
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block py-2 pl-3 pr-4 lg:p-0 transition-colors duration-200",
                      isActive
                        ? "text-[#00C4B4] font-semibold"
                        : "text-gray-700 dark:text-white hover:text-[#00C4B4]",

                      "lg:text-gray-700 lg:dark:text-white lg:hover:text-gray-700 lg:dark:hover:text-white",
                      "lg:relative",
                      "lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:right-0",
                      "lg:after:bottom-0 lg:after:h-[2px] lg:after:bg-[#00C4B4]",
                      "lg:after:scale-x-0 lg:after:origin-center lg:after:translate-y-[4px]",
                      "lg:after:transition-transform lg:after:duration-300 lg:hover:after:scale-x-100",
                      isActive ? "lg:after:scale-x-100" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
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
