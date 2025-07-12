import { FaEnvelope, FaFacebookF, FaGoogle, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--primaryColor)] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Branding */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-2">Wellnest</h2>
          <p className="text-sm mb-2">
            Your trusted destination for essentials in beauty, fitness, baby care, and more.
          </p>
          <p className="text-sm italic text-gray-300">Empowering wellness, one delivery at a time.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "All Products", "Contact Us", "FAQ", "Terms of Service", "Privacy Policy"].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-teal-300 transition duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-gray-400" /> 07 Wellness Ave, Chattogram, Bangladesh</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-gray-400" /> +880 1876 258 020</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-gray-400" /> support@wellnest.com</li>
            <li className="flex items-start gap-2"><FaWhatsapp className="mt-1 text-gray-400" /> WhatsApp: +880 1876 258 020</li>
            <li className="text-sm">🕒 Mon - Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-teal-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-teal-300 transition"><FaGoogle /></a>
            <a href="#" className="hover:text-teal-300 transition"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
          <form className="flex flex-col sm:flex-row gap-2">

            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-white text-black text-sm focus:outline-none"
            />

            <button

              type="submit"
              className="bg-[#2B6594] cursor-pointer text-white px-4 py-2 rounded hover:bg-[#2B6594] text-sm transition"

            >
              Subscribe
            </button>

          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-gray-700 py-4 text-sm text-gray-300">
        © 2025 <span className="font-semibold text-white">Wellnest</span>. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
