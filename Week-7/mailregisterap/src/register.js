import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  // Validate on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    validateField(name, value);
  };

  // Field-level validation
  const validateField = (name, value) => {
    let message = "";

    if (name === "name") {
      if (value.trim().length < 5) {
        message = "Name must be at least 5 characters long.";
      }
    }

    if (name === "email") {
      if (!value.includes("@") || !value.includes(".")) {
        message = "Email must contain '@' and '.'.";
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        message = "Password must be at least 8 characters long.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  // Validate on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (form.name.trim().length < 5) {
      newErrors.name = "Name must be at least 5 characters long.";
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Email must contain '@' and '.'.";
    }
    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert(
        `Registration successful!\nName: ${form.name}\nEmail: ${form.email}`
      );
      setForm({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="field">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="field">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
