const { Employee, Position } = require("../models")

class employeeControlller {
    static async allEmployee ( req, res, next) {
        try {
            const employees = await Employee.findAll({
                include: Position
            })
            res.status(200).json(employees)
        }
        catch(err) {
            next(err)
        }
    }

    static async addEmployee (req, res, next) {
        try {   
            const { nama, birth_date, Id_number, gender, PositionId } = req.body
            console.log(nama, birth_date, Id_number, gender, PositionId);
            const newEmployee = await Employee.create({
                nama, birth_date, Id_number, gender, PositionId
            })
            
            res.status(201).json(newEmployee)
        }
        catch(err) {
            next(err)
        }
    }

    static async editEmployee (req, res, next) {
        try {
            const { nama, birth_date, Id_number, gender, PositionId } = req.body
            const updatedEmployee = await Employee.update({
                nama, birth_date, Id_number, gender, PositionId}, {
                    where: {
                        id: req.params.id}, returning: true
                })
            res.status(200).json(updatedEmployee[1])
        }
        catch(err) {
            next(err)
        }
    }

    static async deleteEmployee (req, res, next) {
        try {
            const selectedEmployee = await Employee.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({ message: 'deleted employee sukses'})
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = employeeControlller