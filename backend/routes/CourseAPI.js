const express = require('express');
const router = express.Router();
const auth = require('../middleware/authentication');
const { getCourses, enrollCourse, createCourse } = require('../controllers/courseController');



router.post('/create', auth, createCourse);
router.get('/', getCourses);
router.post('/enroll/:id', auth, enrollCourse);

module.exports = router;