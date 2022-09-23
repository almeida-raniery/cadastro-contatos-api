import { Router } from "express";
import { login } from "../../controllers/sessions/login.controllers";
import validateCredentials from "../../middleware/validateCredentials.middleware";

const loginRoute = Router();

loginRoute.post("", validateCredentials, login);

export default loginRoute;