const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/index");
const records = require("./app/controllers/record.controller");
db.sequelize.sync();

app.get("/record", records.findAll);
app.post("/create", records.create);
app.delete("/record/:id", records.delete);

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});