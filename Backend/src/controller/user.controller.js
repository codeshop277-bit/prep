const jwt = require("jsonwebtoken");
const userService = require('../service/user.service');
const bcrypt = require("bcrypt");
const asyncHandler = fn =>
    (req, res, next) =>
        Promise.resolve(fn(req, res, next)).catch(next)

// /With asynch handlers we can avoid try catch
const getAllUsersController = asyncHandler(async (req, res, next) => {
    const users = await userService.getAllUsersService();
    res.status(200).json({
        data: users
    });
});

const postUserController = async (req, res, next) => {
    try {
        console.log(req.body)

        const hashed = await bcrypt.hash(req.body.password, 12);
        const { name, email } = req.body
        const payload = {
            name, email, password: hashed
        }
        const user = await userService.createUserService(payload);

        res.status(201).json({
            message: "User created",
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const deleteUserController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.deleteUserService(id);

        if (!user) {
            return next(new Error("User not found", 404))
        }
        res.status(200).json({
            message: 'User Deleted Successfully',
            data: user
        })
    } catch (err) {
        next(err);
    }
};
const loginUserController = async (req, res, body) => {
    const { email, password } = req.body;
    const user = await userService.loginUserService(email);
    if (user.length === 0) {
        return res.send(400).json({
            message: "Invalid credentials"
        })
    }
    const isValid = await bcrypt.compare(password, user[0].password);
    if (!isValid) {
        return res.send(400).json({
            message: "Invalid credentials"
        })
    }
    const userData = user[0]
    const token = jwt.sign({
        id: userData.id,
        name: userData.name,
        role: "employee"
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
    const refreshToken = jwt.sign({
        id: userData.id,
        name: userData.name,
        role: "employee"
    }, process.env.REFRESH_JWT_SECRET, { expiresIn: process.env.REFRESH_JWT_EXPIRES_IN })
    const { password: _, ...safeUser } = userData;

    res.json({
        message: "Login successful",
        token,
        user: safeUser,
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/refresh"
    });

}
const refreshTokenController = async (req, res, next) => {
    const { refreshToken } = req.cookies;
    if(!refreshToken){
        return res.status(401).json({message: "No refresh token provided"})
    }
    jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(403).json({message: "Invalid refresh token"})
        }
        const newToken = jwt.sign({id: decoded.id, name: decoded.name, role: 'employee'}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
        res.json({accessToken: newToken})
    });
}
module.exports = {
    getAllUsersController,
    postUserController,
    deleteUserController,
    loginUserController,
    refreshTokenController
}