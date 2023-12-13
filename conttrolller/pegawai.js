import models from '../models/pegawai_table.js'

export const GetallData = async (req, res) => {
    try {
        const User = await models.findAll()
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
    const { nip, nama, tanggal_lahir, nomor_telepon, email, password } = req.body
    try {
        const findRm = await models.findOne({
            where: {
                nip
            }
        })
        if (findRm) {
            res.status(404).json({
                message: "data already exist"
            })
        } else {
            await models.create({
                nip, nama, tanggal_lahir, nomor_telepon, email, password
            })
            res.status(201).json({
                msg: "success post data",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export const Deletedata = async (req, res) => {
    const { id: Id } = req.body
    try {
        const user = await models.findOne({
            where: {
                id: Id
            }
        })
        if (!user) return res.status(404).json({
            message: "mau ngapus apa"
        })
        const User = await models.destroy({
            where: {
                id: Id
            }
        })
        res.status(200).json({
            msg: "success delete data",
            Data: User
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

export const updatedata = async (req, res) => {
    const { nip: Nip, nama, tanggal_lahir, nomor_telepon, email, password } = req.body
    try {
        const findata = models.findOne({
            where: {
                nip: Nip
            }
        })
        if (findata) {
            await models.update({
                nip: Nip, nama, tanggal_lahir, nomor_telepon, email, password
            }, {
                where: {
                    nip: Nip
                }
            })
            res.status(200).json({
                msg: "success update data",
            })
        } else {
            res.status(404).json({
                msg: "mau updated apa dekk"
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "bad request banget"
        })
    }
}