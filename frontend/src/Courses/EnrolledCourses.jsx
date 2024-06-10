import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses/enrolled',{
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          });
        setCourses(response.data);
      } catch (err) {
        console.error(err);
      } 

    };

    fetchEnrolledCourses();
  }, []);


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
                   
                </div>
            </li>
        ))}
    </ul>
</div>
  );
};

export default EnrolledCourses;
