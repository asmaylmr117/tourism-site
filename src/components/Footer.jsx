import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
];

const navigationLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Our Team", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Packages", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Destinations", href: "#" },
  { name: "Events", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "sign in", href: "#" },
];


function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:pr-24">
          {/* Contact Section */}
          <div className="space-y-6">
            <div className="space-y-4">
            <h2 className="text-4xl font-bold ">If you have any question,Let us help you!</h2>
             
            </div>

            <p className="text-lg">
              If you have any questions or would like to book a tour with us, please don't hesitate to contact us.
            </p>

            <div className="space-y-2">
              <p>Phone: +250 788 123 456</p>
              <p>Email: <a href="mailto:info@rwandatourism.com" className="underline">info@rwandatourism.com</a></p>
              <p>Address: Kigali, Rwanda</p>
            </div>
          </div>

          {/* Empty column for spacing in large screens */}
          <div className="hidden lg:block"></div>

          {/* Logo and Icons - Right aligned */}
          <div className="order-first lg:order-last ">
          <div className="flex flex-col items-center lg:items-end space-y-6">
  <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
    <div className="w-32 h-32 ml-4 sm:ml-8 ">
      <img
        src="/img/p1.jpg"
        alt="Africa Wizzy Safari"
        className="w-full h-full object-contain rounded-full bg-white p-2"
        onClick={() => window.location.reload()}
      />
    </div>
    <div className="mt-4 lg:mt-0">
      <div className="flex flex-row space-x-4 items-center">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-700 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
  <p className="text-center lg:text-right mt-6">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </p>
</div>



            {/* Navigation Links - Right aligned */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 mt-12">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:underline transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>


          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Subscribe to our newspaper</h3>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Input your email here"
                className="flex-1 px-4 py-2 rounded-l text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 rounded-r-md ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0-6-6m6 6-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p>© Copyright Africa Wizzy Safari 2022</p>
        </div>
        <div className=" text-center">
         <a className=" hover:text-yellow-500" href="https://portfolio-eight-jade-39.vercel.app/">By : Eng- Mostafa Ismail Ibrahim</a>
        </div>
      </div>
    </footer>



  );
}

export default Footer;