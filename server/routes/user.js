import express from 'express';
import { createUser, getAllUsers, updateUser, deleteUser } from "../controllers/UserControllers.js"

const router = express.Router();

// create user
router.post("/createUser", createUser);

// update user
router.put("/updateUser/:id", updateUser);

// get all users
router.get("/users", getAllUsers);

// delete user
router.delete("/deleteUser/:id", deleteUser);

export default router;