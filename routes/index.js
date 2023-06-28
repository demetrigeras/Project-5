import { Router } from "express";
import Countryinfo from "./countries.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/world-products", Countryinfo);


export default router;