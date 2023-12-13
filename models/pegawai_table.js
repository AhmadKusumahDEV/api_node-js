import { Model, DataTypes } from "sequelize"
import db from "../config/sql.config.js"

class pegawai_tab extends Model { }

pegawai_tab.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nip: {
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
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    }, 
    nomor_telepon: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    }
},
    {
        sequelize: db,
        modelName: "pegawai_tab"
    }
)

export default pegawai_tab