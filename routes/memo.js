// 메모의 CRUD 를 담당할 memo 라우터

const express = require("express");
const router = express.Router();

const { memosController } = require("../controller/index");

router.post("/", memosController.memopost.post);

// router.get("/", memosController.signup.get);

// router.put("/:id", memosController.signin.put);

// router.delete("/:id", memosController.getinfo.delete);

module.exports = router;
