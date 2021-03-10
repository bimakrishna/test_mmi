const { Position } = require('../models')

class positionController {
    static async allPosition (req, res, next) {
        try {
            const positions = await Position.findAll()
            res.status(200).json(positions)
        }
        catch(err){
            next(err)
        }
    }
}

module.exports = positionController