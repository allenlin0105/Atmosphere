const db = require("../models/database");

// Create new record from db
exports.create = (req, res) => {
    const record = {
        title: req.body.title,
        time: req.body.time
    }
    const createQuery = "INSERT INTO Records (id, title, time) VALUES (null, ?, ?);"
    
    db.query(createQuery, [record.title, record.time], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

// Get all records from db
exports.findAll = (req, res) => {
    const getAllQuery = "SELECT * FROM Records";
    
    db.query(getAllQuery, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
}

// Delete a record from db
exports.delete = (req, res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM Records WHERE id=?;";
    
    db.query(deleteQuery, [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}