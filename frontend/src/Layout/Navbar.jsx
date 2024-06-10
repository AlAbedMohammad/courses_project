import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-gray-800 p-4 ">
        <div className="flex items-center justify-between">
            <Link to="/" className="text-white font-semibold text-lg">Home</Link>
            <div>
                {user ? (
                    <>
                        {user.role === 'teacher' && <Link to="/create-course" className="text-white mr-4">Create Course</Link>}
                        <button onClick={logout} className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded">Logout</button>
                        {user.role === 'student' && (
                            <Link to="/enrolled-courses" className="text-white ml-4">Enrolled Courses</Link>
                        )}
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-white mr-4">Login</Link>
                        <Link to="/register" className="text-white">Register</Link>
                    </>
                )}
            </div>
        </div>
    </nav>
);
};


export default Navbar;