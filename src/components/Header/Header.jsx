import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import CustomCarousel from "./CustomCarousel";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Login from "./LogIn.js";

const urls = [
  { label: "Home", path: "/" },
  { label: "History of the Shelter", path: "/history" },
  { label: "Our team", path: "/team" },
  { label: "How to get involved", path: "/involvement" },
  { label: "Contacts", path: "/contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "");
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        style={{ backgroundColor: "transparent" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="me-5">
            <Image className="mh-70" fluid src={logo} alt="Carpe Logo" />
            <span className={`${styles.logoTitle} me-5`}>Carpe Shelter</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {urls.map(({ path, label }) => (
                <Nav.Link
                  as={Link}
                  to={path}
                  key={path}
                  className={`${styles.navLink} px-3`}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              {isLoggedIn ? (
                <>
                  <Navbar.Text className="username-text text-light">
                    Salut, {username}!
                  </Navbar.Text>
                  <Button onClick={handleLogout} className="ms-2 btn-danger">
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setShowLogin(true)}
                  className="ms-2 btn-outline-light"
                >
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CustomCarousel />
      {showLogin && (
        <Login setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}
