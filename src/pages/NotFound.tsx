import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <Header />
      {/* Apply dark mode background and text colors to the main content area */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
        <div className="text-center">
          {/* Apply dark mode text color for the heading */}
          <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">404</h1>
          {/* Apply dark mode text color for the paragraph */}
          <p className="text-xl text-gray-600 mb-4 dark:text-gray-300">Oops! Page not found</p>
          {/* Apply dark mode text colors for the link */}
          <a href="/" className="text-blue-500 hover:text-blue-700 underline dark:text-blue-400 dark:hover:text-blue-300">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;