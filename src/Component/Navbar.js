import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <h1 href="/" className="brand-name">
        Userly
      </h1>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/" className="anchor-tags" href="/home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="anchor-tags" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/User" className="anchor-tags" href="/users">
              Users
            </Link>
          </li>
          <li>
            <Link to="/Register" className="anchor-tags" href="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
