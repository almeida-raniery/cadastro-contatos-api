import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../../controllers/users/user.controllers";

const userRoute = Router();

userRoute.post("/", createUser);
userRoute.get("/:id", getUser);
userRoute.patch("/:id", updateUser);
userRoute.delete("/:id", deleteUser);

export default userRoute;
