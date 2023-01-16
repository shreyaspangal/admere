const asyncHandler = require("express-async-handler");
const User = require("../models").User;
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    const emailExists = await User.findOne({ email });
    const phoneExists = await User.findOne({ phone });

    if (emailExists) {
        res.status(400);
        throw new Error("Email id already exists!");
    }

    if (phoneExists) {
        res.status(400);
        throw new Error("Phone number already exists!");
    }

    const newUser = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password
    });

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            phone: newUser.phone,
            email: newUser.email,
            token: generateToken(newUser._id),
        })
    } else {
        res.status(400);
        throw new Error("Error occured while creating new user!");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const validUser = await User.findOne({ email });

    if (validUser && (await validUser.comparePasswords(password))) {
        res.status(200).json({
            _id: validUser._id,
            firstName: validUser.firstName,
            lastName: validUser.lastName,
            phone: validUser.phone,
            email: validUser.email,
            token: generateToken(validUser._id),
        })
    } else {
        res.status(400);
        throw new Error("Invalid email or password!");
    }
});

module.exports = { registerUser, loginUser }
