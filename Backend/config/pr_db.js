const mongoose = require("mongoose");
require("dotenv").config();
const pr_connection = mongoose.connect(process.env.pr_mongo_url);
module.exports = { pr_connection }