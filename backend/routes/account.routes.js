import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { getBalance, transferMoney } from "../controllers/account.controller.js";


const router = Router();

// secured routes
router.route("/balance").get(verifyJWT, getBalance);
router.route("/transfer").post(verifyJWT,transferMoney);

export default router;