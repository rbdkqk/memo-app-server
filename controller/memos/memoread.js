const { memos } = require("../../models");

module.exports = {
  get: (req, res) => {
    // TODO : 유저가 남긴 메모들을 긁어옴

    // READ MEMOS (다 가져와서, 최신부터 정렬하고, 6개만 잘라낸다. - 나중에 무한스크롤을 위한 것(?))
    memos.findAll().then((result) => {
      // res.status(200).json(result);  // 저장된 메모값을 리턴받을 필요가 있나?
      // res.status(200).json({ success: true });
      result.sort((a, b) => {
        return b.dataValues.id - a.dataValues.id;
      });

      // let memos = result.slice(0, 6);

      // 6개씩 잘라서 스크롤 내릴때마다 6개씩 추가 렌더링되게 하고 싶었는데,
      // 실패했으니(morememo) 그냥 전부 다 렌더링함
      res.status(200).json(result);
    });
    // res.end();
  },
};
