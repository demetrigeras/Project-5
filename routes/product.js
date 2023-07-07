import { Router } from "express";
import * as controllers from "../controllers/product.js";

const router = Router();

router.get("/", controllers.getProducts);
router.get("/:id", controllers.getProduct);
router.get("/:id", controllers.getProductCountry);
router.get("/country/:countryName", controllers.getProductsByCountry);
router.post("/", controllers.createProduct);
router.put("/:id", controllers.updateProduct);
router.delete("/:id", controllers.deleteProduct);

export default router;