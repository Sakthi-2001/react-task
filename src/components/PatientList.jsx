import React from 'react';
import './PatientList.css';
import phone from '../assets/phone-icon.png';
import email from '../assets/email.jpg';
import red from '../assets/red-dot.png';
import yellow from '../assets/yellow-dot.jpg';
import green from '../assets/green-dot.png';
import options from '../assets/options.png';
import p_icon from '../assets/c.png'

const PatientList = ({ patients, handleSelectPatient, addPatient }) => {
  return (
    <div className="patient-list-container">
      <div className="list-header">
        <p>Patients</p>
        <p>Action</p>
      </div>
      <ul className="patient-list">
        {patients.map((patient) => {
          let photo = "";
          if (patient.status === 'Completed') {
            photo = green;
          } else if (patient.status === 'Sent') {
            photo = yellow;
          } else {
            photo = red;
          }

          return (
            <li key={patient.id} className="patient-item">
              <div className="patient-info">
                <img src={p_icon} alt="Patient Icon" className="patient-icon" />
                <div className='bio'>
                  <span className="patient-name">{patient.name}</span>
                  <span className="patient-gender">{patient.gender}</span>
                </div>
                
              </div>
              <div className="patient-actions">
                <button className="icon-button">
                  <img src={phone} alt="Phone" />
                </button>
                <button className="icon-button">
                  <img src={email} alt="Email" />
                </button>
                <span className={`status-dot ${patient.status.toLowerCase()}`}></span>
                
                <span className={"status"}>
                  {patient.status}
                </span>
                <button className="icon-button">
                  <img src={options} alt="options" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PatientList;
