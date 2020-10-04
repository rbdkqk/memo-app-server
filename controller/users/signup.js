const { accounts } = require("../../models");

// const bcrypt = require("bcryptjs");

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    let userData = req.body;

    console.log("username : ", userData.username);

    let usernameRegex = /^[a-z0-9]+$/;

    if (!usernameRegex.test(userData.username)) {
      return res.status(400).json({
        error: "BAD USERNAME",
        code: 1,
      });
    }

    // CHECK PASSWORD LENGTH
    if (userData.password.length < 4 || typeof userData.password !== "string") {
      return res.status(400).json({
        error: "BAD PASSWORD",
        code: 2,
      });
    }

    accounts
      .findOrCreate({
        where: { username: userData.username },
        defaults: {
          username: userData.username,
          password: userData.password,
          // password: generateHash(userData.password),
        },
      })
      .then(([result, created]) => {
        // console.log(result);
        if (!created) {
          return res.status(409).send("Already exists user"); // find
        } else {
          res.status(200).json(result); // Created

          /*
            const data = await result.get({ plain: true });    plain : 이건 뭐임?
            res.status(200).json(data);
          */
        }
      });
    // res.end();
  },
};

// // generates hash
// generateHash = function (password) {
//   return bcrypt.hashSync(password, 8);
// };

// // compares the password
// validateHash = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
