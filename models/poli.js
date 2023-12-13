import { Model, DataTypes } from "sequelize"
import db from "../config/sql.config.js"

class poli extends Model { }

poli.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_poli: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: db,
    modelName: "poli"
})

export default poli