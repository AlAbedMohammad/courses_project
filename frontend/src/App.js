import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { AuthProvider } from './context/AuthContext';
import Navbar from './Layout/Navbar';
import "./app.css"
import CourseList from './Courses/CourseList';
import CreateCourse from './Courses/CreateCourse';
import EnrolledCourses from './Courses/EnrolledCourses';
function App() {
    return (
        <AuthProvider>
                <div className="App">
                      <Navbar/>
                    <div className="">
                        <Routes>
                            <Route path="/" element={<CourseList/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/register" element={<Register/>} />
                            <Route path="/create-course" element={<CreateCourse/>} />
                            <Route path="/enrolled-courses" element={<EnrolledCourses/>} />
                        </Routes>
                    </div>

                </div>
      
        </AuthProvider>
    );
}

export default App;