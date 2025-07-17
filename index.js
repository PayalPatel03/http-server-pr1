const http = require("http");
const fs = require("fs");
const PORT = 1000;
const requestHandler = (req, res) => {
  let filename = "";
  switch (req.url) {
    case "/":
      filename = "index.html";
      break;
    case "/about":
      filename = "about.html";
      break;
    case "/contact":
      filename = "contact.html";
      break;
    default:
      filename = "404.html";
  }
  fs.readFile(filename, (err, result) => {
    if (!err) {
      res.end(result);
    }
  });
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is stared on port:", PORT);
  }
});
