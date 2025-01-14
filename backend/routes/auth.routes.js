import express from "express";

import {getProducts,createProducts,DeleteProducts, UpdateProducts} from "../controllers/message.controller.js"
const router = express.Router();

router.get("/", getProducts);
router.post("/",createProducts);
router.put("/:id",UpdateProducts);
router.delete("/:id",DeleteProducts);

export default router