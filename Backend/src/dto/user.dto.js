const { z } = require("zod");
 const createUserDto  = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8)
 });

 module.exports = {
    createUserDto
 };