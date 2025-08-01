import React, { useState } from "react";

function generateReference() {
  // simple random reference: CR-<timestamp>-<4 hex>
  const hex = Math.floor(Math.random() * 0xffff)
    .toString(16)
    .padStart(4, "0")
    .toUpperCase();
  return `CR-${Date.now()}-${hex}`;
}

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeName.trim() || !complaint.trim()) {
      alert("Please fill in both name and complaint.");
      return;
    }

    const reference = generateReference();
    alert(
      `Complaint submitted successfully!\nReference Number: ${reference}\nEmployee: ${employeeName}`
    );

    // Optionally reset form
    setEmployeeName("");
    setComplaint("");
  };

  return (
    <form onSubmit={handleSubmit} className="complaint-form">
      <div className="field">
        <label>
          Employee Name:
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>
      </div>
      <div className="field">
        <label>
          Complaint:
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe your issue"
            required
            rows={5}
          />
        </label>
      </div>
      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintRegister;
