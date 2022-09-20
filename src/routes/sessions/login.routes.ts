import { Router } from "express";
import { login } from "../../controllers/sessions/login.controllers";

const loginRoute = Router();

loginRoute.post("/", login);

export default loginRoute;