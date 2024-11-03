import { Router } from "express";
import { signupUser, signinUser, updateAccountDetails, getUsers } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router();

router.route("/signup").post(signupUser);

// secured routes
router.route("/update-information").put(verifyJWT, updateAccountDetails);
router.route("/bulk").get(getUsers)
router.route("/signin").post(verifyJWT,signinUser);

export default router;
