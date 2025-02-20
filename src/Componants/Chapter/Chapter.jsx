import React from 'react';
import "./chapter.css";
import back_butten from "../Assets/back-button.png"
import { Link,NavLink } from 'react-router-dom';
// import bgImage from '../Assets/bg-vector.png';


const SpokenEnglishChapter = () => {

    const  progress= [
        'Input Vs. Output',
        'Imitation Technique',
        'Collocations - Intro',
        'Collocations - Examples',
        'Collocations - Put to practice',
      ]

    return<>
<div className='bg-img'>

<div className="progress-container">
    <Link to={'/'}>
    <img className='progress-back' src={back_butten} alt="" />
    </Link>
    
      <h1 className="progress-title">Progress Path</h1>

      <div className="roadmap-container">
        {progress.map((step, index) => (
          <div key={index} className="roadmap">
            <div className="circle">
              <span className="checkmark">&#10003;</span>
            </div>
            <p className="roadmap-text">{step}</p>
          </div>
        ))}
      </div>

      <NavLink to="/level"><button className="continue-button-chapter" >Continue</button></NavLink>
    </div>
   
</div>

    </>
}

export default SpokenEnglishChapter