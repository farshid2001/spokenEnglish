import React from 'react';
import "./module.css"
import { Link } from 'react-router-dom';
import right_arrow from "../Assets/right-arrow.png"



const SpokenEnglishClass = () => {

  const courseData = {
    currentCourse: 'Spoken English STARTER - Beginner',
    modules: [
      { id: 1, title: 'Language Skills and Practice Techniques', lessons: 6 },
      { id: 2, title: 'Self-Introductions and Polite Expressions', lessons: 5 },
      { id: 3, title: 'Letters, Sounds, Daily Activities, and Food Vocabulary', lessons: 6 },
      { id: 4, title: 'Everyday English', lessons: 10 },
      { id: 5, title: 'Everyday Communication', lessons: 11 },
    ],
  };

  return (
    <div className='main-div'>

      <h1 className='main-heading'>Modules</h1>
      <div className='main-box'>
        <p >Current Course: {courseData.currentCourse}</p>
        <button
          onMouseOver={(e) => e.target.style.backgroundColor = '#4a148c'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6a1b9a'}>
          Browse Other Course
        </button>
      </div>

      <h2 className='module-list-head' >Spoken English STARTER</h2>
      
        <div className='module-list-main'>
        <Link to={'/chapter'} className='link-class'>
          {courseData.modules.map((module, index) => (
            <div className='module-list-scetion' key={module.id} >

              {index > 0 && (
                <div className='module-list-vertical-lines'></div>
              )}


              <div className='module-list-number'>
                {module.id}
              </div>

              <div className='module-title-and-lesson'>
                <p className='module-title' >{module.title}</p>
                <p className='module-lession' >{module.lessons} Lessons</p>
              </div>
              <div className='right-arrow-div'>
                <img className='right-arrow' src={right_arrow} alt="" />
              </div>
            </div>

          ))}
</Link>
        </div>

      

    </div>
  );
}

export default SpokenEnglishClass