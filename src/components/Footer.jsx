import { Link } from "react-router";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-100 dark:text-black py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <img
              src="/photos/D.png"
              alt="Devora Logo"
              className="w-12 h-12"
            />
            <span className="font-bold text-2xl">Devora</span>
          </div>
          <p className="text-sm">© 2025 Devora. All rights reserved.</p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="font-semibold mb-2 text-xl">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-[#24D4CB] transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#24D4CB] transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-[#24D4CB] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#24D4CB] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="font-semibold mb-2 text-xl">Follow Us</h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.instagram.com/devora.3/?igsh=MXhvZ2tpdWtnZmtybA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#24D4CB] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581405395258&mibextid=wwXIfr&rdid=egmPK6gpHmreKbI8#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#24D4CB] transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
