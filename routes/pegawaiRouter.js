import express from 'express'
import {
    GetallData,
    postData,
    Deletedata,
    updatedata
} from "../conttrolller/pegawai.js"

const routes = express.Router()

routes.get("/", GetallData).post("/", postData).delete('/', Deletedata).put('/', updatedata)

export default routes