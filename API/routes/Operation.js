import Express from 'express'
import Post from '../Controller/PostTask.js'
import Select_Task from '../Controller/Select_Task.js'
const router = Express.Router()
router.post("/User_Task" ,  Post)
router.get("/Select_Task" ,  Select_Task)

export default router