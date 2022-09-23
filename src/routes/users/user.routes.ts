import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../../controllers/users/user.controllers";
import authUSer from "../../middleware/authUser.middleware";

const userRoute = Router();

userRoute.post("/", createUser);
userRoute.get("/:id", getUser);
userRoute.patch("/:id", authUSer, updateUser);
userRoute.delete("/:id", authUSer, deleteUser);

export default userRoute;
