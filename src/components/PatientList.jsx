import React from 'react';
import './PatientList.css';
import phone from '../assets/phone-icon.png';
import email from '../assets/email.jpg';
import red from '../assets/red-dot.png';
import yellow from '../assets/yellow-dot.jpg';
import green from '../assets/green-dot.png';
import options from '../assets/options.png';
import mobile from '../assets/mobile.png';
import mail from '../assets/mail.png';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

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
                <div 
                  className="circle" 
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {(patient.name)[0]}
                </div>
                <div className='bio'>
                  <span className="patient-name">{patient.name}</span>
                  <span className="patient-gender">{patient.gender}</span>
                </div>
              </div>
              <div className="patient-actions">
                <div className='contact'>
                  <button className="icon-button">
                    <img src={mobile} alt="Phone" />
                  </button>
                  <button className="icon-button">
                    <img src={mail} alt="Email" />
                  </button>
                </div>
                <div className='status-cont'>
                  <span className={`status-dot ${patient.status.toLowerCase()}`}></span>
                  <span className={"status"}>
                    {patient.status}
                  </span>
                </div>
                <button className="icon-button_2">
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
