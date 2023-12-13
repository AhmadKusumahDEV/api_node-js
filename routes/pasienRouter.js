import express from "express"

import {
    GetallData,
    postData,
    Deletedata,
    updatedata
} from "../conttrolller/pasien.js"

const routes = express.Router()

routes.get("/", GetallData)
routes.post("/", postData)
routes.delete("/", Deletedata)
routes.put('/', updatedata)


export default routes