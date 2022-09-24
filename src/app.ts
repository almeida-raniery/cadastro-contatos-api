import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";

import express from "express";
import userRoute from "./routes/users/user.routes";
import contactRoute from "./routes/contacts/contact.routes";
import loginRoute from "./routes/sessions/login.routes";
import handleAppError from "./middleware/handleErrors.middleware";

const app = express();
app.use(express.json());

app.use("/users", userRoute)
app.use("/contacts", contactRoute)
app.use("/login", loginRoute)

app.use(handleAppError)

export default app