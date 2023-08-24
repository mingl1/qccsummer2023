const fs = require("fs");
const http = require("http");
// const readStream = fs.createReadStream("index.html");
const writeStream = fs.createWriteStream("write.txt");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, { "Content-type": "text/html" });
  if (url === "/" || url === "/home") {
    fs.createReadStream("index.html").pipe(res);
  } else if (url === "/about") {
    fs.createReadStream("about.html").pipe(res);
  } else {
    fs.createReadStream("404.html").pipe(res);
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// readStream.on("data", (d) => {
//   console.log("\n-----------new data recieved-----------\n");
//   console.log(d);
//   console.log("\n-----------end of data-----------\n");
// });
// readStream.on("open", () => {
//   console.log("\n-----------file opened-----------\n");
// });
// readStream.on("end", () => {
//   console.log("Stream closed!...\n\n");
// });

// const writeStream = fs.createWriteStream("write.txt");
// writeStream.write("Streaming text content", "utf8");
