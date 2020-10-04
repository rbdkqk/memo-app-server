const express = require("express");

const account = require("./account");
const memo = require("./memo");

const router = express.Router();

router.use("/account", account);
router.use("/memo", memo);

module.exports = router;
