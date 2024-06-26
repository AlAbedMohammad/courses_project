import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(name, email, password, role);
            alert('Registration successful');
            navigate("/")
        } catch (error) {
            console.error('Registration failed', error);
            alert('Registration failed');
        }
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                Sign Up
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                        Password
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-800">
                        Role
                    </label>
                    <select
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-indigo-600 hover:underline">
                    Sign in
                </a>
            </p>
        </div>
    </div>
);
};

export default Register;