const Course = require("../models/Course");
const User = require('../models/User');

//create New cOurse
exports.createCourse = async (req, res) => {
    const { title, description } = req.body;
    const teacher = req.token.user.id;
    try {
      const newCourse = new Course({
        title,
        description,
        teacher,
      });
  
      const course = await newCourse.save();
      res.json(course);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  };

//to get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('teacher', ['name', 'email']);
        res.json(courses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


// enroll to courses by user
exports.enrollCourse = async (req, res) => {
    try {
      const courseId = req.params.id;
      const user = await User.findById(req.token.user.id);
  console.log(user);
      if (user.enrolledCourses.includes(courseId)) {
        return res.status(400).json({ msg: 'Already enrolled in this course' });
      }
  
      user.enrolledCourses.push(courseId);
      await user.save();
  
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

//enrolled courses by user
exports.getEnrolledCourses = async (req, res) => {
    try {
        const user = await User.findById(req.token.user.id).populate('enrolledCourses');

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user.enrolledCourses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};