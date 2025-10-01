import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border-gray-200 dark:bg-gray-900 border-b dark:border-gray-700 py-4 shadow-sm fixed start-0 end-0"
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <Link to="/" className="flex items-center justify-center">
            <motion.img
              src="/photos/logo.png"
              alt="Devora Logo"
              className="w-12 h-12"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.span
              className="text-xl font-semibold whitespace-nowrap text-[#A78BFA] dark:text-[#A78BFA] mt-[-9px] ms-[-3px]"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              Devora
            </motion.span>
          </Link>
        </motion.div>

        {/* Right section */}
        <div className="flex items-center lg:order-2">
          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            whileHover={{ rotate: 15, scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            {theme === "light" ? (
              <Moon className="w-6 h-6 text-[#00C4B4]" />
            ) : (
              <Sun className="w-6 h-6 text-[#00C4B4]" />
            )}
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            type="button"
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden 
                       hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                       dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-row font-medium space-x-8">
            {[
              { name: "Home", to: "/" },
              { name: "Services", to: "/services" },
              { name: "About Us", to: "/about" },
              { name: "Contact", to: "/contact" },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      "text-gray-700 dark:text-white",
                      isActive ? "text-[#00C4B4] font-semibold" : "",
                      "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#00C4B4]",
                      "after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.77,0,0.175,1)]",
                      "hover:after:scale-x-100",
                      isActive ? "after:scale-x-100" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:hidden px-4 mt-3"
          >
            <ul className="flex flex-col space-y-3 font-medium">
              {[
                { name: "Home", to: "/" },
                { name: "Services", to: "/services" },
                { name: "About Us", to: "/about" },
                { name: "Contact", to: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                        "text-gray-700 dark:text-white",
                        isActive ? "text-[#00C4B4] font-semibold" : "",
                        "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#00C4B4]",
                        "after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.77,0,0.175,1)]",
                        "hover:after:scale-x-100",
                        isActive ? "after:scale-x-100" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
