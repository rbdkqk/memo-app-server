const { memos } = require("../../models");

module.exports = {
  delete: (req, res) => {
    // TODO : 유저가 선택한 메모를 지움

    // DELETE MEMO

    /*
      DELETE MEMO: DELETE /api/memo/:id
      ERROR CODES
        1: INVALID ID
        2: NOT LOGGED IN
        3: NO RESOURCE
        4: PERMISSION FAILURE
    */

    // ERROR CODES 1: INVALID ID : mongodb를 사용하지 않으므로, 구현하기 어려울 듯
    // CHECK MEMO ID VALIDITY - url 파라메터로 전달받은 id 가 mongodb id 형식에 맞는지 검사
    // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    //   return res.status(400).json({
    //     error: "INVALID ID",
    //     code: 1,
    //   });
    // }

    // ERROR CODES 2: NOT LOGGED IN
    // CHECK LOGIN STATUS - 세션을 통해 로그인 여부 확인
    if (typeof req.session.loginInfo === "undefined") {
      return res.status(403).json({
        error: "NOT LOGGED IN",
        code: 2,
      });
    }

    memos
      .destroy({
        // where: { id: Number(req.params.id) },
        where: { id: req.params.id },
      })
      .then((deleteCount) => {
        console.log("결과 : ", deleteCount); // 결과가 0, 1, 이런식으로 숫자로 나옴. (삭제 처리한 대상의 개수인가?)
        if (deleteCount === 0) {
          res.status(400).json({ error: "nothing to delete" }); // 불필요한 것 같기도 하다.
        } else {
          res.status(200).json({ success: "delete done" });
        }
      });
    // res.end();
  },
};
