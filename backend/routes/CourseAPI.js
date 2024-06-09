const express = require('express');
const router = express.Router();
const auth = require('../middleware/authentication');
const { getCourses, enrollCourse, createCourse, getEnrolledCourses } = require('../controllers/courseController');



router.post('/create', auth, createCourse);
router.get('/', getCourses);
router.post('/enroll/:id', auth, enrollCourse);
router.get('/enrolled', auth, getEnrolledCourses);

module.exports = router;