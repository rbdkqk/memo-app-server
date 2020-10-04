const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

/* 이상 모듈 목록 */

const app = express();

const port = 4000;

app.use(
  session({
    secret: "@rbdkqk",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookieParser());
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
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Success");
});

app.get("/hello", (req, res) => {
  return res.send("Hello CodeLab");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
