// 현재 세션을 파괴 할 때는 req,session.destroy() 를 사용하면 됩니다.

module.exports = {
  post: (req, res) => {
    req.session.destroy((err) => {
      if (err) throw err;
    });
    res.redirect("/");
    return res.json({ sucess: true });
    // res.end();
  },
};
