import model from "../models/poli.js"

export const getPoli = async (req, res) => {
    try {
        const User = await model.findAll({
            attributes: ['id', 'nama_poli']
        })
        if (User.length === 0) {
            res.status(404).json({
                msg: "belum ada data",
            })
        } else {1
            res.status(200).json(User)
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export const PoliPost = async (req, res) => {
    const { nama_poli: Poli } = req.body
    try {
        const findPoli = await model.findOne({
            where: {
                nama_poli: Poli
            }
        })
        if (!findPoli) {
            const user = await model.create({
                nama_poli: Poli
            })
            res.status(201).json({
                msg: `${user.nama_poli} has been created`,
            })
        } else {
            res.status(404).json({
                message: "data already exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: console.log(error)
        })
    }
}


export const PoliDelete = async (req, res) => {
    const { id: Poli } = req.body
    try {
        const findpoli = await model.findOne({
            where: {
                id: Poli
            }
        })
        if (findpoli) {
            await model.destroy({
                where: {
                    id: Poli
                }
            })
            res.status(200).json({
                msg: "success delete data",
            })
        } else {
            res.status(404).json({
                message: "mau hapus apa kamu sayang"
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "server tertidur"
        })
    }
}

export const updatedPoli = async (req, res) => {
    const { id: Poli , nama_poli: Polinamed } = req.body
    try {
        const findPoli = await model.findOne({
            where: {
                id: Poli
            }
        })
        if (findPoli) {
            await model.update({
                nama_poli: Polinamed
            }, {
                where: {
                    id: Poli
                }
            })
            res.status(200).json({
                msg: "success update data",
            })
        }else {
            res.status(404).json({
                msg: "mau updated data yang mana"
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: {
                error
            }
        })
    }
}