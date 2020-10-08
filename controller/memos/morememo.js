const { memos } = require("../../models");

module.exports = {
  get: (req, res) => {
    // TODO : 메모를 추가로 로딩함

    let listType = req.params.listType;
    let id = req.params.id;

    // CHECK LIST TYPE VALIDITY
    // url 을 통해 들어온 listType 파라메터가 old/new 둘 다 아닐경우
    if (listType !== "old" && listType !== "new") {
      return res.status(400).json({
        error: "INVALID LISTTYPE",
        code: 1,
      });
    }

    // CHECK MEMO ID VALIDITY
    // 드러온 id 값이 mongodb 형식인지 조회
    // mongodb를 안쓰니까 이것도 체크 못함
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({
    //     error: "INVALID ID",
    //     code: 2,
    //   });
    // }

    // READ MEMOS (다 가져와서, 최신부터 정렬하고, 6개만 잘라낸다. - 나중에 무한스크롤을 위한 것(?))
    memos.findAll().then((result) => {
      // res.status(200).json(result);  // 저장된 메모값을 리턴받을 필요가 있나?
      // res.status(200).json({ success: true });
      result.sort((a, b) => {
        return b.dataValues.id - a.dataValues.id;
      });

      let memos = result.slice(0, 6);

      res.status(200).json(memos);
    });
    // res.end();
  },
};
