import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const CourseList = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
console.log(user);
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await axios.get('http://localhost:5000/api/courses');
            setCourses(response.data);
        };
        fetchCourses();
    }, []);

    const enrollCourse = async (courseId) => {
        try {
            await axios.post(`http://localhost:5000/api/courses/enroll/${courseId}`,{},{
                headers: {
                  authorization: `Bearer ${user.token}`,
                },
              });
            alert('Enrolled successfully');
        } catch (error) {
            console.error('Error enrolling in course', error);
            alert('Error enrolling in course');
        }
    };

    return (
<div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Courses</h1>
            <ul className="space-y-4">
                {courses.map(course => (
                    <li key={course._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src="https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png" alt={course.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{course.title}</div>
                            <p className="text-gray-700 text-base">{course.description}</p>
                            <p className="text-gray-700 text-base">{course.teacher.name}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {user && user.payload.user.role === 'student' && (
                                <button
                                    onClick={() => enrollCourse(course._id)}
                                    className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    Enroll
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;