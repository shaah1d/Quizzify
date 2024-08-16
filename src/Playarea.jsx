import React, { useState } from 'react';
import Quiz from './Quiz'
import ScoreBoard from './ScoreBoard'
import Menu from './Menu';
import { useLocation } from 'react-router-dom';

function Playarea() {
    const [score, setScore] = useState(0)
    const location = useLocation();
    const { category, difficulty } = location.state;
  return (
     <div className="grid sm:grid-cols-12 w-screen gap-4">
    <div className="sm:col-span-4 hidden md:block "><Menu category={category} difficulty={difficulty}/></div>
  <Quiz className=" md:col-span-4 sm:col-span-6" score={score} setScore={setScore} category={category} difficulty={difficulty}/>
  <ScoreBoard className=" md:col-span-4 sm:col-span-6" score={score}/> 
  </div>
  )
}

export default Playarea