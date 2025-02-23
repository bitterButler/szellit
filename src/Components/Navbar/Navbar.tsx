import { useState, useEffect, useRef } from "react";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn /*, setLoggedIn */] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null); // Add this ref

  // Add this useEffect for handling clicks outside, so the dropdown can be closed with clickin anywhere.
  //later want to try out only useEffect with useState. - its possible, but might be more error-prone.
  useEffect(() => {
    //runs when the component is mounted
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount (return() runs)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.container}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.navbarBrand}>
          <img src={logo} alt="Sell it Logo" />
          <span>Szellit</span>
        </Link>
        <div className={styles.navbarMenu}>
          <Link to="/marketplace" className={styles.navbarBrand}>
            Marketplace
          </Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.sellButton} hidden={!isLoggedIn}>
          {/* if logged in there will be a sell btn */}
          Sell
        </button>
        <div>
          <div>
            <select className={styles.languageSelect}>
              <option value="hu">HU</option>
              <option value="de">DE</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
        <div className={styles.profileDropdown} ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className={styles.profileIcon}
          >
            <UserCircle size={24} />
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link to="/profile">Profile</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
