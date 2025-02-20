import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpokenEnglishClass from './Componants/Moduls/Module';
import SpokenEnglishLevel from './Componants/Level/Level';
import CourseRoadmap from './Componants/Chapter/Chapter';
import VideoLesson from './Componants/VideoLesson/VideoLesson';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SpokenEnglishClass />} />
      <Route path="/chapter" element={<CourseRoadmap />} />
      <Route path="/level" element={<SpokenEnglishLevel />} />
      <Route path="/videoLesson" element={<VideoLesson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
