import { Router } from "express";
import { signupUser, signinUser, updateAccountDetails, getUsers } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router();

router.route("/signup").post(signupUser);
router.route("/signin").post(signinUser);
// secured routes
router.route("/update-information").put(verifyJWT, updateAccountDetails);
router.route("/bulk").get(getUsers)

export default router;
