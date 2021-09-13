const db = require("../models/index");
const Record = db.records;

// Create new record from db
exports.create = (req, res) => {
    const record = {
        id: null,
        title: req.body.title,
        time: req.body.time
    }

    Record.create(record)
        .then(data => {
            res.status(200);
            console.log(data);
        })
        .catch(error => {
            res.status(500)
            console.log(error.message);
        });
}

// Get all records from db
exports.findAll = (req, res) => {
    Record.findAll()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error when getting records"
            });
        });
}

// Delete a record from db
exports.delete = (req, res) => {
    const id = req.params.id;

    Record.destroy({where: {id: id}})
        .then(() => {
            res.status(200);
        })
        .catch(() => {
            res.status(500)
            console.log(`Could not delete record with id=${id}`);
        });
}