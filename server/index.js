const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const viewsPath = __dirname + '/app/views/';

// express setup
let corsOptions = {
    origin: "http://localhost:" + String(port)
};
app.use(cors(corsOptions));
app.use(express.static(viewsPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express route
const records = require("./app/controllers/record.controller");
app.get("/record", records.findAll);
app.post("/create", records.create);
app.delete("/record/:id", records.delete);

app.get('/', function (req, res) {
    res.sendFile(viewsPath + "index.html");
});

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});