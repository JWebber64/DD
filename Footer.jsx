import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#111613] via-[#2f3827] to-[#111613] p-6 rounded-t-lg mt-8 text-[#dbe0da]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="bg-[#545e46] px-4 py-2 rounded-md shadow-md text-center">
            <h1 className="text-2xl font-bold text-[#dbe0da]">Diamond Data</h1>
          </div>
        </div>
        <nav className="flex flex-col space-y-2">
          <div className="flex space-x-4">
            <a href="/about" className="hover:text-[#AA8B56] transition-colors">About Us</a>
            <a href="/privacy-policy" className="hover:text-[#AA8B56] transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-[#AA8B56] transition-colors">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:info@diamonddata.com" className="hover:text-[#AA8B56] transition-colors">Contact Us</a>
            <p>123 Baseball Avenue</p>
            <p>Sports City, SP 12345</p>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;