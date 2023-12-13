import {
    getPoli,
    PoliPost,
    PoliDelete,
    updatedPoli
} from "../conttrolller/poli.js"

import * as express from "express"

const routerpoli = express.Router()

routerpoli.get("/", getPoli)
     .post("/", PoliPost)
         .delete("/", PoliDelete)
            .put("/", updatedPoli)

export default routerpoli