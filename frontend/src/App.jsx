import React from 'react'
import "./App.css"
// import Head1 from './Components/Head1'
import Head2 from './Components/Head2'
import Home from './Components/Home'
import About from './Components/About/About'
import SignUp from './Components/SignUp'
import CourseHome from './Components/allcourses/CourseHome'
import './Components/allcourses/courses.css';
import InstructorDashboard from './Components/InstructorDashboard';
import InstructorAddcourse from './Components/InstructorAddcourse';
import StudentDashboard from './Components/StudentDashboard';
import StudentViewcourse from './Components/StudentViewcourse';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

export const App = () => {
  return (
   
    
    <Router>
    <Head2></Head2>
      <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/courses' element={<CourseHome></CourseHome>}/>
      <Route path='/instructor-dashboard' element={<InstructorDashboard/>}></Route>
      <Route path='/instructor-addcourse' element={<InstructorAddcourse/>}></Route>
      <Route path='/student-dashboard' element={<StudentDashboard/>}></Route>
      <Route path='/student-viewcourse' element={<StudentViewcourse/>}></Route>

      </Routes>
   
  </Router>
  )
}
export default App