import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
    // req.headers.authorization
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            msg: "No token provided or bad format",
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decodedToken?._id).select(
            "-password"
        );

        if (!user) {
            return res.status(403).json({
                msg: "User not found",
            });
        }

        req.userId = decodedToken._id;
        req.user = user;
        next();

    }
    catch (error) {
        return res.status(401).send({
            msg: "Invalid Token",
        });
    }
};  

export { verifyJWT };
