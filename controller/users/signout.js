// 현재 세션을 파괴 할 때는 req,session.destroy() 를 사용하면 됩니다.

module.exports = {
  post: (req, res) => {
    req.session.destroy((err) => {
      if (err) throw err;
    });
    // res.redirect("/"); // 이 부분이 살아있으면 postman에서 제대로 잡아내지 못함. 리디렉트 기능은 작동은 할 것 같다. 나중에 되살리기.
    return res.json(
      { success: true }
      // "로그아웃 성공"
    );
    // res.end();
  },
};
