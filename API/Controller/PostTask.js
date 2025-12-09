import express from 'express'
import db from '../Database.js'

// Post
const Post = (req , res) => {
    const {title  , description , date} = req.body
    if(!title || !description || !date) {
      return  console.log() 
    }
    const sql = "INSERT INTO user_task (Task_title, Description , `Date`) VALUES(? , ? ,?)"
    db.query(sql , [title , description , date] , (err,data) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json({message : "Task inserted "})
    })
}

export default Post
// select 
export const Select_Task = (req,res) => {

    const sql = "SELECT * FROM user_task"

    db.query(sql , (err,data) => {
        if (err) {
            onsole.error("Database query error:", err);
            return res.status(500).json(err)
        }

        return res.status(200).json(data)
    })
}
// Select by Id 

export const Task_Select = (req,res) => {
  const {Task_id} = req.params
  const sql = "SELECT Task_title , Description , Date1 FROM user_task where Task_id = ?"
  db.query(sql , [Task_id] , (err,data) => {
    if (err) {
       return res.status(500).json(err) 
    }
    return res.status(200).json(data)
  })

}
// Update

export const UpdateTask = (req,res) => {
    const {Task_title , Description , Date1 , Task_id} = req.body

    const sql = "UPDATE user_task SET Task_title = ? , Description = ? , Date1 = ? where Task_id = ?"

    db.query(sql , [Task_title , Description , Date1 , Task_id] , (err,data) => {
        if (err) {
            return res.status(500).json(err)
        }

        return;
    })
}