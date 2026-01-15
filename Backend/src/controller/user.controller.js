const userService = require('../service/user.service');

const getAllUsersController = async (req, res, next) => {
    try{
        const users = await userService.getAllUsersService();

        res.status(200).json({
            data: users
        });
    }catch(err){
        next(err);
    }
};

const postUserController = async (req, res, next) => {
    try{
        const user = await userService.createUserService(req.body);

        res.status(201).json({
            message: "User created",
            data: user
        });
    }catch(err){
        next(err);
    }
};
module.exports = {
    getAllUsersController,
    postUserController
}