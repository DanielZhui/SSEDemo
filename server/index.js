require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const sse = require("./sse");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome SSEDemo");
});

app.get("/stream", sse.init);

const port = process.env.PORT ?? 3000;

app.listen(port, async () => {
  await connectDB();
  console.log(
    `started server on 0.0.0.0:${port}, url: http://localhost:${port}`
  );
});
