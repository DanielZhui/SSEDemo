const SSE = require("express-sse");

const sse = new SSE(["this is a test data"]);

module.exports = sse;
