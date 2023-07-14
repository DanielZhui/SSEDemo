require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const sse = require("./sse");
const cors = require("cors");

const postRouter = require("./routes/post.routes");

const app = express();

app.use(cors({ origin: "http://127.0.0.1:3000", credentials: true }));

app.get("/", (req, res) => {
  res.send("Welcome SSEDemo");
});

app.get("/stream", sse.init);

app.use("/api", postRouter);

const port = process.env.PORT ?? 3000;

app.listen(port, async () => {
  await connectDB();
  console.log(
    `started server on 0.0.0.0:${port}, url: http://localhost:${port}`
  );
});
