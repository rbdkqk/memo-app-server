// 메모의 CRUD 를 담당할 memo 라우터

const express = require("express");
const router = express.Router();

const { memosController } = require("../controller/index");

router.post("/", memosController.memopost.post);

router.get("/", memosController.memoread.get);

router.put("/:id", memosController.memoupdate.put);

router.delete("/:id", memosController.memodelete.delete);

// 메모를 더 불러오는 기능인데, jquery를 써야하는 듯?
// router.get("/:listType/:id", memosController.morememo.get);

module.exports = router;
