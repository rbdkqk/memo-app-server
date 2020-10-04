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

      let memos = result.slice(0, 6);

      res.status(200).json(memos);
    });
    // res.end();
  },
};
