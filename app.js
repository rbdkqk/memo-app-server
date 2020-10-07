const express = require("express");
const cors = require("cors");
const session = require("express-session"); // express 에서 세션을 다룰 때 사용되는 미들웨어
const cookieParser = require("cookie-parser");
const morgan = require("morgan"); // 로그 관리를 위한 미들웨어. (토큰도 가능한듯?)
const bodyParser = require("body-parser"); // 요청에서 JSON을 파싱할때 사용되는 미들웨어

const api = require("./routes");

/* 이상 모듈 목록 */

const app = express();

const port = 4000;

app.use(
  session({
    secret: "@rbdkqk", // 암호화하는 데 쓰일 키
    resave: false, // 세션을 언제나 저장할지 설정함
    saveUninitialized: true, // 세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장
  })
);

app.use(morgan("dev")); // format을 설정할 수 있다. 참고 : https://m.blog.naver.com/PostView.nhn?blogId=p952973&logNo=220995349123&proxyReferer=https:%2F%2Fwww.google.com%2F
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    console.log(`origin`, origin);
    callback(null, true);
  },
  credentials: true,
};

// app.use(cors());
// app.use(cors(corsOptions));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Success");
});

app.get("/hello", (req, res) => {
  return res.send("Hello CodeLab");
});

app.use("/api", api); // http://URL/api/account/signup 이런식으로 api 를 사용 할 수 있게 됩니다

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./../public/index.html"));
// });

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
