/**
 * Circumvents the endpoint cors issue
 */
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import request from "request";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/blocks", (req, res) => {
  request(
    { url: "https://api.up42.com/marketplace/blocks" },
    // eslint-disable-next-line consistent-return
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.use(express.static(dirname));

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`listening on ${PORT}`));
