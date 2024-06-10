import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { AuthProvider } from './context/AuthContext';
import Navbar from './Layout/Navbar';
import "./app.css"
import CourseList from './Courses/CourseList';
import CreateCourse from './Courses/CreateCourse';
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
                        </Routes>
                    </div>

                </div>
      
        </AuthProvider>
    );
}

export default App;