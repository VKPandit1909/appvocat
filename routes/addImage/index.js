const express = require("express");
let app = express.Router();
const fileUploads = require("../fileUpload");

app.post('/addImage', fileUploads, (req, res) => {
    console.log(req.body, req.files[0].filename);
    res.send({status: "ok", data: req.files[0].filename});
});

module.exports = app;