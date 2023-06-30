import { Router } from "express";
import * as controllers from "../controllers/cart.js";

const router = Router();

router.get("/", controllers.getCarts);
router.get("/:id", controllers.getCart);
router.post("/", controllers.createCart);
router.put("/:id", controllers.updateCart);
router.delete("/:id", controllers.deleteCart);

export default router;