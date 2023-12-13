import { Sequelize } from "sequelize";
import mysql from "mysql2"

const db = new Sequelize("flutter_app", "root", "", {
    host: "localhost",
    dialect: "mysql",
    dialectModule: mysql
})

export default db