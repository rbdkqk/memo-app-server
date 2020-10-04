/*  세션확인이 필요한 이유

  클라이언트에서 로그인 시, 로그인 데이터를 쿠키에 담고 사용을 하고 있다가,
  만약에 새로고침을 해서 어플리케이션을 처음부터 다시 렌더링 하게 될 때,
  지금 갖고 있는 쿠키가 유효한건지 체크를 해야 하기 때문입니다.

*/

// const { accounts } = require("../../models");

module.exports = {
  get: (req, res) => {
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.

    if (typeof req.session.loginInfo === "undefined") {
      res.status(401).send("need user session");
    } else {
      res.json({ info: req.session.loginInfo });
      // accounts
      //   .findOne({
      //     // 여기를 findAll로 주면, 아래 data에서 '0' 이라는 뜬금없는 값이 추가된다(뭐임?)
      //     // findAll / findOne 차이를 고민할 것.
      //     where: { id: session.userid },
      //   })
      //   .then((data) => {
      //     // console.log(data);
      //     res.status(200).json(data);
      //   });
    }
    // res.end();
  },
};
