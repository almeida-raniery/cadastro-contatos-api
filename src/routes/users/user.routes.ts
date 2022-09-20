import { Router } from "express";
import { createUser, deleteUser, listUsers, updateUser } from "../../controllers/users/user.controllers";

const userRoute = Router();

userRoute.post("/", createUser);
userRoute.get("/", listUsers);
userRoute.patch("/:id", updateUser);
userRoute.delete("/:id", deleteUser);

export default userRoute;