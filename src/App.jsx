import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PatientStats from './components/PatientStats';
import PatientList from './components/PatientList';
import PatientInfo from './components/PatientInfo';
import PatientFormModal from './components/PatientFormModal';
import './App.css';

function App() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Carl Griffith', status: 'Completed', gender: 'Male', dob: 'Feb 23', insurance: 'Delta Dental' },
    { id: 2, name: 'Evelyn Lager', status: 'Sent', gender: 'Female', dob: 'Mar 5', insurance: 'Aetna' },
    { id: 3, name: 'Michael Hoover', status: 'Expired', gender: 'Male', dob: 'May 12', insurance: 'UnitedHealth' },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelectPatient = (event) => {
    const patientId = event.target.value;
    const selected = patients.find((patient) => patient.id.toString() === patientId);
    setSelectedPatient(selected);
  };

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          
          <div className='Below-header'>
            <span>Patients</span>
            <div className="dropdown-header">
              <div className="dropdown">
                <select onChange={handleSelectPatient}>
                  <option value="" disabled selected>All Patients</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                      {patient.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className="add-patient-button" onClick={toggleModal}>
                + New Patient
              </button>
            </div>
          </div>

          <PatientStats patients={patients} />
          <PatientList patients={patients} handleSelectPatient={handleSelectPatient} />

          {selectedPatient && <PatientInfo patient={selectedPatient} />}

      <PatientFormModal isOpen={isModalOpen} onClose={toggleModal} addNewPatient={addPatient} />
      </div>
      </div>
  );
}

export default App;
