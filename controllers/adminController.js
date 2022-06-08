


const getAllAdmin = (req, res) => {

    res.status(200).json(`Get admin is Done`)
}
const getSingleAdmin = (req, res) => {

    res.status(200).json(`Get Single admin is Done`)
}

const createAdmin = (req, res) => {

    res.status(200).json(`Create admin is Done`)
}

const updateSingleAdmin = (req, res) => {

    res.status(200).json(`Update Single admin is Done`)
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