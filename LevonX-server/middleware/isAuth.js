import Jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

const isAuth = async (req, res, next) => {
  try {

    let { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    const verifyToken = Jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    const user = await User.findById(verifyToken.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    req.user = user;

    next();

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error"
    });

  }
};

export default isAuth;