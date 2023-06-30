import { Router } from "express";
import * as controllers from "../controllers/payment.js";

const router = Router();

router.get("/", controllers.getPayments);
router.get("/:id", controllers.getPayment);
router.post("/", controllers.createPayment);
router.put("/:id", controllers.updatePayment);
router.delete("/:id", controllers.deletePayment);

export default router;