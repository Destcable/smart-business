import { prisma } from "../config/prisma.js"

export const authController = { 
    login: async (req, res) => {
        const { login, password } = req.body;
        console.log(login)
        // const user = await prisma.user.findUnique({ 
        //     where: { login, password }     
        // })

        // return res.send( user ? {status: true} : {status: false} )
    },

    logout: () => {

    }
}