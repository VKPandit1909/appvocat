const express = require("express");
let router = express.Router();
const fileUploads = require("./routes/fileUpload");

router.post('/addImage', fileUploads, (req, res) => {
    try {
        console.log(req.files[0]);
        res.send({status: "ok", message: req.files[0].filename});
    } catch (error) {
        console.log(error);
        res.send({status: "error", message: error});
    }
    
});

module.exports = router;