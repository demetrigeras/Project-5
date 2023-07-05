import { Router } from "express";
import * as controllers from "../controllers/countries.js";


const router = Router();

router.get("/", controllers.getCountries);
router.get('/:name', controllers.getCountry);


// router.post("/", controllers.createCountry);
// router.put("/:id", controllers.updateCountry);
// router.delete("/:id", controllers.deleteCountry);

export default router;