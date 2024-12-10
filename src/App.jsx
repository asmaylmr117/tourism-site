import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/pages/home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import TourPackages from "./components/pages/TourPackages/TourPackages.jsx";
import Gallery from "./components/pages/Gallery/Gallery.jsx";
import ContactUs from "./components/pages/ContactUs/ContactUs.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = React.useState("Home");

 

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "TourPackages":
        return <TourPackages />;
      case "Gallery":
        return <Gallery />;
      case "ContactUs":
        return <ContactUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
