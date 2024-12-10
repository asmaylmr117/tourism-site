import React, { useState, useEffect } from "react";

const Header = ({ setCurrentPage, currentPage }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // ضبط الوضع المضيء كإعداد افتراضي عند التحميل
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };


  return (
    <header className="bg-white shadow-md overflow-x-hidden">
      {/* قسم يحتوي على الإيميل والهاتف ووسائل التواصل */}
  <div className="flex flex-col md:flex-row justify-between bg-green-800 text-white items-center px-4 py-2 space-y-2 md:space-y-0">
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full">
      <div className="flex items-center space-x-2">
        <span className="material-icons text-white hover:bg-green-300">call</span>
        <span>+250 786 688 641</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="material-icons text-white hover:bg-green-300">email</span>
        <span>bhontemma@gmail.com</span>
      </div>
    </div>
    <div className="flex justify-center md:justify-end items-center space-x-2 md:space-x-4">
  {["facebook", "twitter", "linkedin", "instagram"].map((icon) => (
    <a
      key={icon}
      href="#"
      className="flex items-center justify-center border-2 border-white rounded-full w-8 h-8 md:w-10 md:h-10 text-white hover:bg-gray-400"
    >
      <i className={`fab fa-${icon} text-sm md:text-xl`}></i>
    </a>
  ))}
</div>
  </div>

  
    {/* الشعار والتنقل */}
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 max-w-full">
      <div className="flex items-center space-x-4">
        <div  className="hover:bg-green-600">
        <img
          src="/img/p1.jpg"
          alt="Logo"
          className="h-12 w-12 rounded-full cursor-pointer "
          onClick={() => setCurrentPage("Home")}
        />
        </div>
        <nav className="flex space-x-4 flex-wrap">
          {["Home", "About", "TourPackages", "Gallery", "ContactUs"].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`hover:text-green-800 ${
                currentPage === page ? "border-b-2 border-green-800" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
  
      {/* أيقونة الوضع المظلم وزر تسجيل الدخول */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <span className="material-icons">light_mode</span>
          ) : (
            <span className="material-icons">dark_mode</span>
          )}
        </button>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500">
          Sign In
        </button>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
