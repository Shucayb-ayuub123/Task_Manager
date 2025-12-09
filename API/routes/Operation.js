import Express from 'express'
import {  Select_Task } from '../Controller/PostTask.js'
import Post from '../Controller/PostTask.js'
import {UpdateTask} from '../Controller/PostTask.js'
import { Task_Select } from '../Controller/PostTask.js'
const router = Express.Router()
router.post("/User_Task" ,  Post)
router.get("/Select_Task" ,  Select_Task)
router.post("/Edit/:Task_id" ,  Task_Select)

export default router