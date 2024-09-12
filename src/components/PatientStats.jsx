import React from 'react';
import './PatientStats.css';
import strawberry from '../assets/strawberry.png';
import blueberry from '../assets/blueberry.png';


const PatientStats = ({ patients }) => {
  return (
    <div className="patient-stats" >
      <div className="stat-card" style={{backgroundColor: '#FFFFC5'}}>
        <div>
        <h1 style={{color: 'yellow'}}>{patients.length}</h1>
        <h3 className='topic'>Total Patients</h3>
        <p className='content'>added in last month</p>
        </div>
        <div>
        <img src={strawberry}/>
        </div>
        
      </div>
      <div className="stat-card" style={{backgroundColor: 'pink'}}>
        <div>
        <h1 style={{color: 'red'}}>46</h1>
        <h3 className='topic'>Wishlinks Sent</h3>
        <p className='content'>sent in last month</p>
        </div>
        <div>
        <img src={blueberry}/>
        </div>
        
      </div>
      <div className="stat-card-2" style={{backgroundColor:'#2effde'}}>
        <h1 className='send-wishlinks'>Learn how to send Wishlinks</h1>
        <br/><br/>
        <button> ▶ Play video</button>
      </div>
    </div>
  );
};

export default PatientStats;
