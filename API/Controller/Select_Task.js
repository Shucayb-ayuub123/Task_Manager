im
const Select_Task = (req, res) => {
  const sql = "SELECT * FROM user_task";

  db.query(sql, (err, data) => {
    if (err) {
      console.error("Database error:", err); // <-- log the real error
      return res.status(500).json({ error: err.message });
    }
    console.log("Fetched tasks:", data); // <-- verify data
    return res.status(200).json(data);
  });
};
export default Select_Task