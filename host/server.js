const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

/* For production mode */

// const viewsPath = __dirname + '/app/views/';

// let corsOptions = {
//     origin: "http://localhost:" + String(port)
// };

// app.use(express.static(viewsPath));
// app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
//     res.sendFile(viewsPath + "index.html");
// });

/* For development mode */

app.use(cors());

/* General mode */

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});