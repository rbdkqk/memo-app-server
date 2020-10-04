// 회원가입 / 로그인 / 현재세션체크 API 를 담당할 account 라우터

const express = require("express");
const router = express.Router();

const { usersController } = require("../controller/index");

router.post("/signup", usersController.signup.post);

router.post("/signin", usersController.signin.post);

router.get("/getinfo", usersController.getinfo.get);

// router.get("/getinfo", (req, res) => {
//   res.json({ info: null });
// });

router.post("/signout", usersController.signout.post);

module.exports = router;
