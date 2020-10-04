const { memos } = require("../../models/");

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 새 메모를 남길 때, 이를 데이터베이스에 입력.
    /*
      WRITE MEMO: POST /api/memo
      BODY SAMPLE: { contents: "sample "}
      ERROR CODES
          1: NOT LOGGED IN
          2: CONTENTS IS NOT STRING
          3: EMPTY CONTENTS
    */

    // ERROR CODES 1: NOT LOGGED IN
    // CHECK LOGIN STATUS - 세션확인 (로그인 여부 확인)
    if (typeof req.session.loginInfo === "undefined") {
      return res.status(403).json({
        error: "NOT LOGGED IN",
        code: 1,
      });
    }

    // ERROR CODES 2 : CONTENTS IS NOT STRING
    // CHECK CONTENTS VALID - 입력받은 콘텐츠의 데이터 타입이 문자열이 아닐 경우
    if (typeof req.body.contents !== "string") {
      return res.status(400).json({
        error: "CONTENTS IS NOT STRING",
        code: 2,
      });
    }

    // ERROR CODES 3: CONTENTS IS NOT STRING
    // 입력받은 콘텐츠가 비어있는 경우
    if (req.body.contents === "") {
      return res.status(400).json({
        error: "EMPTY CONTENTS",
        code: 3,
      });
    }

    // CREATE NEW MEMO
    // 위의 결격사항이 없을 경우, 새로운 메모를 create(insert into) 하여, DB에 저장
    memos
      .create({
        writer: req.session.loginInfo.username,
        contents: req.body.contents,
      })
      .then(() => {
        // res.status(200).json(result);  // 저장된 메모값을 리턴받을 필요가 있나?
        res.status(200).json({ success: true });
      });
    // res.end();
  },
};
