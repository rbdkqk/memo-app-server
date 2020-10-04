const { accounts } = require("../../models");

// const bcrypt = require("bcryptjs");

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    let userData = req.body;

    accounts
      .findAll({
        where: {
          username: userData.username,
          password: userData.password,
          // password: generateHash(userData.password),
        },
      })
      .then(([result]) => {
        // console.log(result);
        if (!result) {
          res.status(404).send("unvalid user OR wrong password");
        } else {
          // req.session.userid = result.id; // 나중에 다른데서 비교/확인할 때 써야 하므로, 넣어줌
          req.session.loginInfo = {
            userid: result.id,
            username: result.username,
          };
          console.log("session : ", req.session);
          res.status(200).json({
            id: result.id,
          });
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
