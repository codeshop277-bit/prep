const userRepository = require("../repository/user.repository")

const getAllUsersService = async () => {
    const users = await userRepository.findAllUsers();
    //Business Logic;
    return users;
};

module.exports = {
    getAllUsersService
}