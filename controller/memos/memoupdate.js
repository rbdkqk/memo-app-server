const { memos } = require("../../models");

module.exports = {
  put: (req, res) => {
    // TODO : 유저가 선택한 메모를 지움

    // DELETE MEMO

    /*
      DELETE MEMO: DELETE /api/memo/:id
      ERROR CODES
        1: INVALID ID,
        2: CONTENTS IS NOT STRING
        3: EMPTY CONTENTS
        4: NOT LOGGED IN
        5: NO RESOURCE
        6: PERMISSION FAILURE
    */

    // ERROR CODES 1: INVALID ID : mongodb를 사용하지 않으므로, 구현하기 어려울 듯
    // CHECK MEMO ID VALIDITY - url 파라메터로 전달받은 id 가 mongodb id 형식에 맞는지 검사
    // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    //   return res.status(400).json({
    //     error: "INVALID ID",
    //     code: 1,
    //   });
    // }

    // ERROR CODES 2: CONTENTS IS NOT STRING
    // CHECK CONTENTS VALID - 수정할 내용이 문자열이 아닌 경우
    if (typeof req.body.contents !== "string") {
      return res.status(400).json({
        error: "EMPTY CONTENTS",
        code: 2,
      });
    }

    // ERROR CODES 3: EMPTY CONTENTS
    // 수정할 내용이 비어있는 경우
    if (req.body.contents === "") {
      return res.status(400).json({
        error: "EMPTY CONTENTS",
        code: 3,
      });
    }

    // ERROR CODES 4: NOT LOGGED IN
    // CHECK LOGIN STATUS - 세션을 통해 로그인 여부 확인
    if (typeof req.session.loginInfo === "undefined") {
      return res.status(403).json({
        error: "NOT LOGGED IN",
        code: 4,
      });
    }

    memos
      .update({ contents: req.body.contents }, { where: { id: req.params.id } })
      .then((updateCount) => {
        console.log("결과 : ", updateCount); // 결과가 [ 1 ] 이런식으로 숫자를 담은 배열로 나옴. (수정 처리한 대상의 개수인가?)
        if (updateCount[0] === 0) {
          res.status(400).json({ error: "nothing to update" }); // 불필요한 것 같기도 하다.
        } else {
          res.status(200).json({ success: "update done" });
        }
      });
    // res.end();
  },
};
