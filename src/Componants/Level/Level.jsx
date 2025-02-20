import React from 'react';
import './level.css';
import { Link } from 'react-router-dom';
import right_arrow from "../Assets/right-arrow.png"; 
import back_butten from "../Assets/back-button.png"
import logo_level from "../Assets/house.png"

const SpokenEnglishLevel = () => {
  const steps = [
    { id: 1, title: 'Input Vs. Output' },
    { id: 2, title: 'IMITATION' },
    { id: 3, title: 'Study Notes' },
    { id: 4, title: 'QUIZ' },
  ];

  return (
    <div className="level-container">
      <header className="header-level">
        <Link to={"/chapter"}><img src={back_butten} className='back-button' alt="" /></Link>
        {/* <button className="back-button">&#8592;</button> */}
        <img src={logo_level} alt="Logo" className="logo" /> 
      </header>
      
      <h2 className="level-title">Level I</h2>
      <h3 className="level-subtitle">Input Vs. Output</h3>

      <div className="steps-container">
        {steps.map((step,index) => (
          <div className="step" key={step.id}>
            <div className="step-left">
              <div className="circle">
                <span className="step-number">&#10003;</span>
              </div>
              {/* {step.id < steps.length && <div className="vertical-line"></div>} */}
              {index > 0 && (
                <div className='step-list-vertical-lines'></div>
              )}
            </div>
            <div className="step-content">
              <p className="step-title">Step {step.id}</p>
              <p className="step-description">{step.title}</p>
            </div>
            <Link >
              <img src={right_arrow} alt="Next" className="right-arrow" />
            </Link>
          </div>
        ))}
      </div>

     <Link to="/videoLesson"><button className="continue-button">Continue</button></Link> 
    </div>
  );
};

export default SpokenEnglishLevel;
