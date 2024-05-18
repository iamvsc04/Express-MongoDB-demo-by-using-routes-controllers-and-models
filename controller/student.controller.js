const studentModel = require("../models/student.model");

async function postStudent(req, res) {
    try {
        const { id, name, phone, email } = req.body;
        const student = await studentModel.create({
            _id: id,
            name,
            phone,
            email
        })
        res.status(200).json(student);
    }
    catch (error) {
        res.status(404).send("error occured");
    }
}
async function getStudent(req, res) {
    const students = await studentModel.find();
    if(!students)
        res.status(404).send("no data found");
    res.status(200).json(students);
}

async function getStudentById(req, res) {
    const { id } = req.params;
    const student = await studentModel.findById(id);
    if (!student) {
        res.status(200).json({ message: "student with id doesnot exist" });
    }
    else {
        res.status(404).json(student);
    }
}

async function patchStudent(req, res) {
    const { id } = req.params;
    const student = await studentModel.findByIdAndUpdate(id,req.body.id);
    if (!student) {
        res.status(200).json({ message: "student with id doesnot exist" });
    }
    else {
        const updatedStudent = await studentModel.findById(id);
        res.status(404).json({ message: "Overwritten details of student are:\n" ,updatedStudent:updatedStudent});
    }
}
async function putStudent(req, res) {
    const { id } = req.params;
    const student = await studentModel.findOneAndReplace({_id:id});
    if (!student) {
        res.status(200).json({ message: "student with id doesnot exist" });
    }
    else {
        const updatedStudent = await studentModel.findById(id);
        res.status(404).json({ message: "Overwritten details of student are:\n" ,updatedStudent:updatedStudent});
    }
}

async function deleteStudent(req, res) {
    const { id } = req.params;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
        res.status(404).json({message:"student with id doesnot exist"});
    }
    else
    {
        res.status(404).json({result:"Successfully deleted the students with the data:",Details:student});
    }
}

module.exports = { getStudent, getStudentById, postStudent, putStudent,patchStudent, deleteStudent };