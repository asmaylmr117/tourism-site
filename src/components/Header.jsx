import React, { useState, useEffect } from "react";

const Header = ({ setCurrentPage, currentPage }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInSuccess, setSignInSuccess] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Here you would typically handle the actual sign-in logic
    setSignInSuccess(true);
    setTimeout(() => {
      setSignInSuccess(false);
      setShowSignInForm(false);
      setEmail('');
      setPassword('');
    }, 3000);
  };

  return (
    <header className="bg-white shadow-md overflow-x-hidden relative">
      {/* Top bar with contact info and social media */}
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

      {/* Main navigation */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="hover:bg-green-600">
            <img
              src="/img/p1.jpg"
              alt="Logo"
              className="h-12 w-12 rounded-full cursor-pointer"
              onClick={() => setCurrentPage("Home")}
            />
          </div>
          
          {/* Navigation links */}
          <nav className="hidden md:flex space-x-6">
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

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
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
          <button 
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500"
            onClick={() => setShowSignInForm(!showSignInForm)}
          >
            Sign In
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>

      {/* Sign In Form */}
      {showSignInForm && (
       <div className="flex items-center justify-center  bg-gray-50 dark:bg-gray-700 ">
       <div className="relative mt-2 w-80 bg-white border-1 dark:bg-gray-800  rounded-lg shadow-xl p-6 z-50 mb-6 ">
         <form onSubmit={handleSignIn} className="space-y-4 ">
           <div>
             <label htmlFor="email" className="block text-sm font-medium dark:text-white  text-gray-700">
               Email
             </label>
             <input
               type="email"
               id="email"
               value={email}
              placeholder="Enter your email"
               onChange={(e) => setEmail(e.target.value)}
               className="mt-1 dark:bg-gray-800  block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 pl-3 "
               required
             />
           </div>
           <div>
             <label htmlFor="password" className="block text-sm font-medium dark:text-white  text-gray-700">
               Password
             </label>
             <input
               type="password"
               id="password"
              placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="mt-1 dark:bg-gray-800 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 pl-3"
               required
             />
           </div>
           <button
             type="submit"
             className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
           >
             Sign In
           </button>
           {signInSuccess && (
             <p className="text-green-600 text-center mt-2">
               Successfully signed in!
             </p>
           )}
         </form>
       </div>
       
     </div>
     
      )}

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            {["Home", "About", "TourPackages", "Gallery", "ContactUs"].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  toggleMenu();
                }}
                className={`text-left px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-gray-700 ${
                  currentPage === page ? "bg-green-200 dark:bg-gray-700" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      )}
      
      {/* Overlay when sidebar is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;