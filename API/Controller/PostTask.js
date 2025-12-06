import express from 'express'
import db from '../Database.js'
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