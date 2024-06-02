import express from 'express';
import { createUser, updateUser, getAllUsers, deleteUser } from "../controllers/UserControllers"

const router = express.router();

// create user
router.post("/create", createUser);

// update user
router.put("/update", updateUser);

// get all users
router.get("/users", getAllUsers);

// delete user
router.delete("/delete", deleteUser);

export default router;