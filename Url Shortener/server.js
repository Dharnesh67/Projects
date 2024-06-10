const express = require("express");
const mongoose = require("mongoose");
const shorturl = require("./models/shorturl");
const app = express();

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const urls = await shorturl.find();
  res.render("index", { title: "Home", urls: urls });
});

app.post("/shorturl", async (req, res) => {
  try {
    const shortUrl = await shorturl.create({ full: req.body.fullurl });
    // res.json(shortUrl);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get("/:url", async (req, res) => {
  const url = await shorturl.findOne({ short: req.params.url }); // Added await here
  if (url == null) return res.sendStatus(404);
  url.clicks++;
  await url.save(); // Added await here to ensure the save operation completes
  res.redirect(url.full);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
