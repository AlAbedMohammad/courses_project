import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { AuthProvider } from './context/AuthContext';
import Navbar from './Layout/Navbar';
import "./app.css"
function App() {
    return (
        <AuthProvider>
                <div className="App">
                      <Navbar/>
                    <div className="container">
                        <Routes>
                            <Route path="/login" element={<Login/>} />
                            <Route path="/register" element={<Register/>} />
                        </Routes>
                    </div>
                    
                </div>
      
        </AuthProvider>
    );
}

export default App;