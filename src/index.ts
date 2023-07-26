import { config } from 'dotenv'
import express from 'express'
import { run } from '~/services/database.services'
import usersRouter from './routes/users.routes'
const app = express()
const port = process.env.PORT || 3000

config()
run().catch(console.dir)
app.use(express.json())
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log('runing ', port)
})
