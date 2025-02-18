import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Login({ setShowLogin, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Resetăm erorile

    const credentials = { username, password };

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username); // Salvăm username-ul
        setIsLoggedIn(true);
        setShowLogin(false);
      } else {
        setError("Login failed. Check your credentials.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <Modal show={true} onHide={() => setShowLogin(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}

          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
