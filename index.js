const express = require("express");
var cors = require("cors");
var http = require("http");
const bodyParser = require("body-parser");


// express app
const app = express();
const port = process.env.PORT || 5001;

// middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // for parsing application/json
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Socket IO Initialization
var server = http.createServer(app);
var io = require("socket.io")(server, {
    cors: {
        "origin": "*"
    }
});

// Routing
const routes = require("./routes");
app.use("/routes", routes);

// Public Uploads
app.use("/uploads", express.static("uploads"));

var clients = {};
// Socket IO Implementation
io.on("connection", (socket) => {
    console.log("IO Server Connected");
    console.log(socket.id, " has joined.");
    // Login
    socket.on("login", (id) => {
        clients[id] = socket;
        // console.log(clients);
    });

    // Chat
    socket.on("message", (data) => {
        console.log(data);
        let targetId = data.targetId;
        if(clients[targetId]) clients[targetId].emit("message", data);
    });
});
app.get("/", (req, res) => {
    res.send("conntected");
});

// app.use((req, res) => {
//     console.log("New Request Made");
//     console.log("Host", req.hostname);
//     console.log("Path", req.path);
//     console.log("Method", req.method);
//     res.status(404).send({
//       status: "error",
//       error: "Cannot " + req.method + " Method " + req.path,
//     });
// });

server.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});