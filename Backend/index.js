const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "components")); // Correct views folder
app.set("layout", path.join(__dirname, "public", "layout"));   // Correct layout file

app.get("/", (req, res) => {
  res.render("landing", { title: "Landing Page" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
