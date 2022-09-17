/**
 * Circumvents the endpoint cors issue
 */
const express = require("express");
const request = require("request");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/blocks", (req, res) => {
  request(
    { url: "https://api.up42.com/marketplace/blocks" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.use(express.static(path.join(__dirname, "dist")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
