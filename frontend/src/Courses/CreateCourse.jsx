import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const CreateCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        console.log(user.token);
        e.preventDefault();
       try {
        await axios.post('http://localhost:5000/api/courses/create', { title, description },{
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          });
   alert("Course created successfully")
       } catch (error) {
        console.error('Error create a course', error);
        alert('Error create a course');
       }
        
    };

    return (
        <div className="min-h-screen min-w-max bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold">Create New Course</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <form onSubmit={handleSubmit}>
                                <div className="relative">
                                    <input
                                        autocomplete="off"
                                        id="title"
                                        name="title"
                                        type="text"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Course Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                    <label
                                        for="title"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Course Title
                                    </label>
                                </div>
                                <div className="relative mt-6">
                                    <input
                                        autocomplete="off"
                                        id="description"
                                        name="description"
                                        type="text"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Course Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                    <label
                                        for="description"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Course Description
                                    </label>
                                </div>
                                <div className="relative mt-6">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white rounded-md px-2 py-1"
                                    >
                                        Create Course
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default CreateCourse;