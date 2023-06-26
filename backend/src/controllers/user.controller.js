// import { getManagerUsers } from "../dao/Factory.js";
import { userService } from "../repository/index.js";


// const data = await getManagerUsers()
// export const managerUser = new data.ManagerUserMongoDB

export const createUser = (req, res) => {
    res.send({ status: "success", message: "User created " })
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await userService.getUserByIdServ(id)
        if (user) {
            return res.status(200).json({
                 status:'success',
                data: user,
                message:"Se trajeron todos los usuarios correctamente"
            })
        }
        return res.status(200).json({
            message: "Usuario no encontrado"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getUsers = async ( req , res ) => {
    try {
        const users = await userService.getAllUsersServ();
        res.send({status:'ok' , data: users })
    } catch (error) {
        
    }
}

export const getUserByEmail = async (req , res) => {
    const { email } = req.params
    try {
        const user = await userService.getUserByEmailServ(email)
       console.log("user:",user);
        console.log(user);
        if (user) {
            res.status(200).json({
                status:'success',
                data: user,
                message:"Se trajo el usuario por email correctamente"
            })
        }
        return "Usuario no encontrado"

    } catch (error) {
        return error
    }
}