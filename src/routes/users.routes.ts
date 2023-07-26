import { Router } from 'express'
import { loginController } from '~/controllers/users.controllers'
import { loginValidator } from '~/middlewares/users.middlewares'
const route = Router()

route.post('/login', loginValidator, loginController)

export default route
