const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.set("views", `${process.cwd()}/views`);

const userService = require("./user_service");

app.get("/signup", async (req, res) => {
  res.render("signup");
});

app.post("/signupuser", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.addUser(email, password);
    res.render("welcome", {
      user: email
    });
    // await userService.saveUser(email)
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body.email)
  try {
    const user = await userService.authenticate(email, password);
    console.log(user)
    res.render("welcome", {
      user: email
    });

  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.get('/', async (req, res) => {
  res.render("index");
});


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started at port ${port}`));
