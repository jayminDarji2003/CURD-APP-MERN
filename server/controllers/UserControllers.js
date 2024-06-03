import mongoose from "mongoose"
import User from "../models/User.js";

// create
// createUser
const createUser = async (req, res) => {
    try {
        const { name, fatherName, email, phoneNumber } = req.body;
        // console.log(name, fatherName, email, phoneNumber);

        const user = await User.create({
            name, fatherName, email, phoneNumber
        })

        return res.status(200).json({
            success: true,
            message: "USER CREATED SUCCESSFULLY",
            user
        })
    } catch (error) {
        console.error(error)
        console.log("ERROR OCCURED WHILE CREATING USER");
        return res.status(400).json({
            success: false,
            message: "USER CAN NOT CREATED"
        })
    }
}


// get all users
// getAllUsers
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        //console.log(allUsers)

        if (!allUsers) {
            return res.status(404).json({
                success: false,
                message: "User not found in database"
            })
        }

        return res.status(200).json({
            success: true,
            message: "USER FETCHED SUCCESSFULLY",
            allUsers
        })

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "ERROR OCCURED WHILE GETTING USER FROM DATABASE"
        })
    }
}

// GET SINGLE USER
const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findOne({ _id: id })

        if (!user) {
            return res.status(404).json({
                success: true,
                message: "USER NOT FOUND IN DATABASE"
            })
        }

        console.log(user);

        return res.status(200).json({
            success: true,
            message: "USER FOUND IN DATABASE",
            user
        })


    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            message: "ERROR OCCURED WHILE GETTING USER FROM DATABASE"
        })
    }
}



// update
// updateUser
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id; // fetch the id

        const userUpdate = await User.findByIdAndUpdate(userId, req.body, { new: true });

        if (!userUpdate) {
            return res.status(404).json({
                success: false,
                message: "USER UPDATE FAILED"
            })
        }

        return res.status(200).json({
            success: true,
            message: "USER UPDATE SUCCESSFULLY",
            userUpdate
        })

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "ERROR OCCURED WHILE UPDATING THE USER."
        })
    }
}



// delete user
// deleteUser
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;  // getting the id

        const userDelete = await User.findByIdAndDelete(userId);

        if (!userDelete) {
            return res.status(404).json({
                success: false,
                message: "USER NOT DELETED"
            })
        }

        return res.status(200).json({
            success: true,
            message: "USER DELETED SUCCESSFULLY",
            userDelete
        })

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "ERROR OCCURED WHILE DELETING THE USER."
        })
    }
}



export { createUser, getAllUsers, updateUser, deleteUser,getSingleUser }