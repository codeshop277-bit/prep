const userRepository = require("../repository/user.repository")

const getAllUsersService = async () => {
    const users = await userRepository.findAllUsers();
    //Business Logic;
    return users;
};

const createUserService = async (userData) => {
    const users = await userRepository.createUser(userData);
    return users;
};

const deleteUserService = async(id) => {
    return await userRepository.deleteUser(id);
}

module.exports = {
    getAllUsersService,
    createUserService,
    deleteUserService
}