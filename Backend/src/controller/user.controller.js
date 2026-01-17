const userService = require('../service/user.service');

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
        const user = await userService.createUserService(req.body);

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

module.exports = {
    getAllUsersController,
    postUserController,
    deleteUserController
}