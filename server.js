import Express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./config/sql.config.js";
import pasien from "./routes/pasienRouter.js"
import poli from "./routes/poliRouter.js"
import pegawai from './routes/pegawaiRouter.js'
dotenv.config()

const port = process.env.PORT || 3001

try {
    db.sync()
} catch (error) {
    console.info(error)
}

const app = Express()

app.use(cors())
app.use(Express.json())
app.use("/pasien", pasien)
app.use("/poli", poli )
app.use('/pegawai', pegawai)

app.listen(port, () => console.log(`Server running on port ${port}`))