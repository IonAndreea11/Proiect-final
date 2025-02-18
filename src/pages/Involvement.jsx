import { useState } from "react";
import "./Pages.css";

export default function Involvement() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.age.trim()) newErrors.age = "Age is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      alert("Thank you for signing up! Our team will contact you soon.");

      setShowForm(false);
      setFormData({ firstName: "", lastName: "", phone: "", age: "" });
      setErrors({});
    }
  };

  return (
    <div className="pages-container">
      <div className="title-pages">
        <h1>How to Get Involved</h1>
      </div>

      <div className="content-all-pages">
        <p>
          At Carpe Shelter, we believe that every small effort can make a huge
          difference in the lives of animals in need. Whether you want to
          volunteer, donate, adopt, or spread awareness, there are many ways you
          can contribute to our mission.
        </p>

        <h2>Ways to Get Involved</h2>

        <h3>🐾 Volunteer</h3>
        <p>
          Join our team of dedicated volunteers who help with daily shelter
          tasks, events, and animal care. No experience is required—just a
          passion for helping animals!
        </p>

        <h3>🏡 Adopt or Foster</h3>
        <p>
          Open your heart and home to an animal in need. By adopting or
          fostering, you give them a second chance at life. Check our adoption
          page for available pets.
        </p>

        <h3>💰 Donate</h3>
        <p>
          Your donations help us provide food, medical care, and shelter to
          rescued animals. Every contribution, big or small, makes a difference.
        </p>

        <h3>📣 Spread the Word</h3>
        <p>
          Follow us on social media and share our mission with your friends and
          family. Raising awareness helps us reach more people who can help.
        </p>

        <h2>Join Us Today!</h2>
        <p>
          If you're ready to get involved, sign up today and our team will
          contact you with more information.
        </p>

        <div className="signup-link">
          <button className="signup-button" onClick={() => setShowForm(true)}>
            Create an Account
          </button>
        </div>

        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <div className="form-buttons">
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
