import { Router } from "express";
import * as controllers from "../controllers/shipping.js";

const router = Router();

router.get("/", controllers.getShippings);
router.get("/:id", controllers.getShipping);
router.post("/", controllers.createShipping);
router.put("/:id", controllers.updateShipping);
router.delete("/:id", controllers.deleteShipping);

export default router;