const Course=require("../models/Course");



//create New cOurse 
exports.createCourse=async (req,res)=>{
const {title,description}=req.body;

try {
    const newCourse = new Course({
        title,
        description,
        teacher: req.user.id
    });

    const course = await newCourse.save();
    res.json(course);
} catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
}


}