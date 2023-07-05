import { Router } from "express";
import Countryinfo from "./countries.js";
import Product from "./product.js";
import Cart from "./cart.js";
import Payment from "./payment.js";
import Shipping from "./shipping.js";
import User from "./user.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/world", Countryinfo);
router.use("/products", Product);
router.use("/cart", Cart);
router.use("/payment", Payment);
router.use("/shipping", Shipping);
router.use('/', User)




export default router;