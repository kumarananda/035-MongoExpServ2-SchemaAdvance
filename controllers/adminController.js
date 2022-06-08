const Admin = require('../models/adminModle')


const getAllAdmin = async (req, res) => {
    let data = await Admin.find()
    res.status(200).json(data)
}
const getSingleAdmin = async (req, res) => {
    let singleAdmin = await Admin.findById(req.params.id)
    res.status(200).json(singleAdmin)
}

const createAdmin = async (req, res) => {

    // const {name, cell, email, skill, username, location, password } = req.body;
    let data = await Admin.create({
        name : req.body.name,
        cell : req.body.cell,
        email : req.body.email,
        username : req.body.username,
        skill : req.body.skill,
        location : req.body.location,
        password : req.body.password,

    })
    res.status(200).json({
        message : `Create admin is Done`
    })
}

const updateSingleAdmin = async (req, res) => {

    await Admin.findByIdAndUpdate(req.params.id);
    res.status(200).json({
        message : `Update Single admin is Done`
    })
}

const deleteSingleAdmin = (req, res) => {

    res.status(200).json(`Delete Single admin is Done`)
}

module.exports = {
    getAllAdmin,
    getSingleAdmin,
    createAdmin,
    updateSingleAdmin,
    deleteSingleAdmin
}