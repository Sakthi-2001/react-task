import React, { useState } from "react";
import "./PatientFormModal.css";
import bg from '../assets/design-background.jpg';
const PatientFormModal = ({ isOpen, onClose, addNewPatient }) => {
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isResponsible, setIsResponsible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addNewPatient({
      id: Math.random(),
      name: patientName,
      phone: phone,
      email: email,
      status: "Pending",
      isResponsible: isResponsible,
    });
    onClose();
  };

  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-image" style={{ backgroundImage: `url(${bg})` }}></div>
        <div className="modal-header">
          <h2>Add Patient</h2>
        </div>
        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={isResponsible}
              onChange={(e) => setIsResponsible(e.target.checked)}
            />
            <label>Patient is the responsible party</label>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (123) 456-7890"
            />
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
            />
          </div>

          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientFormModal;
