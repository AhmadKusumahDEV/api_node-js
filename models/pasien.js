import { Model, DataTypes } from "sequelize"
import db from "../config/sql.config.js"

class pasien extends Model { }

pasien.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomor_rm: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    tanggal_lahir: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    nomor_telepon: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    }
},
    {
        sequelize: db,
        modelName: "pasien"
    }
)

export default pasien