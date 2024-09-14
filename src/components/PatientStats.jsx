import React from 'react';
import './PatientStats.css';
import strawberry from '../assets/strawberry.png';
import blueberry from '../assets/blueberry.png';


const PatientStats = ({ patients }) => {
  return (
    <div className="patient-stats" >
      <div className="stat-card" style={{backgroundColor: '#fcebd0'}}>
        <div className='head'>
        <h1 style={{color: '#ffb800'}} className='dyn'>{patients.length}</h1>
        <h3 className='topic'>patients</h3>
        <p className='content'>added in last month</p>
        </div>
        <div className='strawberry'>
        <img src={strawberry}/>
        </div>
        
      </div>
      <div className="stat-card" style={{backgroundColor: '#fcd8d8'}}>
        <div className='head'>
        <h1 style={{color: '#ff5e48'}}>46</h1>
        <h3 className='topic'>Wishlinks</h3>
        <p className='content'>sent in last month</p>
        </div>
        <div className='blueberry'>
        <img src={blueberry}/>
        </div>
        
      </div>
      <div className="stat-card-2" style={{backgroundColor:'#3ecab5'}}>
        <h1 className='send-wishlinks'>Learn how to send Wishlinks</h1>
        
        <button> ▶ &nbsp;&nbsp;Play video</button>
      </div>
    </div>
  );
};

export default PatientStats;
