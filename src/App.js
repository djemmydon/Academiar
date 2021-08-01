
import './App.css';
import Home from './Component/Home/Home';

import Course from './Component/Course/Card';
import LearningPath from './Component/LearningPath/LearningPath';
import Academiar from './Component/Academiar/Academiar';
import Instructor from './Component/instructor/Instructor';
import Academiar2 from './Component/Academiar/Academiar2';
import Comment from './Component/instructor/Comment';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero Section/Hero';



function App() {
  return (
    <div className="App">
        <Home />
      <Hero />
      <Course />
      <LearningPath />
      <Academiar />
      <Instructor />
      <Comment />
      <Academiar2 />
      <Footer />
    </div>
  );
}

export default App;
