import model from "../models/pasien.js"

export const GetallData = async (req, res) => {
    try {
        const User = await model.findAll({
            attributes: ['id', 'nomor_rm', 'nama', 'tanggal_lahir', 'nomor_telepon', 'alamat']
        })
        if (User.length === 0) {
            res.status(404).json({
                msg: "data not found",
            })
        } else {
            res.status(200).json(User)
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export const postData = async (req, res) => {
    const { nomor_rm : rm, nama: name, tanggal_lahir: lahir, nomor_telepon : telepon, alamat: alamet } = req.body
    try {
        console.log(rm, name, lahir, telepon, alamet)
        const findRm = await model.findOne({
            where: {
                nomor_rm: rm
            }
        })
        if (findRm) {
            res.status(404).json({
                message: "data already exist"
            })
        } else {
            await model.create({
                nomor_rm: rm, nama: name, tanggal_lahir: lahir, nomor_telepon: telepon, alamat: alamet
            })
            res.status(201).json({
                msg: "success post data",
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

export const Deletedata = async (req, res) => {
    const { id } = req.body
    try {
        const User = await model.destroy({
            where: {
                id
            }
        })
        res.status(200).json({
            msg: "success delete data",
            Data: User
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export const updatedata = async (req, res) => {
    const { nomor_rm, nama, tanggal_lahir, nomor_telepon, alamat } = req.body
    try {
        const finddata = await model.findOne({
            where: {
                nomor_rm
            }
        })
        if (finddata) {
            await model.update({
                nama, tanggal_lahir, nomor_telepon, alamat
            }, {
                where: {
                    nomor_rm
                }
            })
            res.status(200).json({
                msg: "success update data",
            })
        } else {
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