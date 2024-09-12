import React from 'react';
import './PatientInfo.css';

const PatientInfo = ({ patient }) => {
  return (
    <div className="patient-info">
      <h3>Patient Info - {patient.name}</h3>
      <div className="info-section">
        <h4>Personal Info</h4>
        <p>Name: {patient.name}</p>
        <p>Gender: {patient.gender}</p>
        <p>DOB: {patient.dob}</p>
      </div>

      <div className="info-section">
        <h4>Insurance</h4>
        <p>Provider: {patient.insurance}</p>
      </div>
    </div>
  );
};

export default PatientInfo;
