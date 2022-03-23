var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Skills = require("./skills_schema");
mongoose.connect(`mongodb+srv://vipul:vipulsportfolio@cluster0.3v2rv.mongodb.net/portfolio?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
});

router.get("/", (req, res) => {
    Skills.find({}, function(err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;
