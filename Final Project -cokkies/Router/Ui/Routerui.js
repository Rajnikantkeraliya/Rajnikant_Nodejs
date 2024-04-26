const libexpress = require("express");
const router = libexpress.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", (req, res) => {
    // Assuming you want to show a success message
    res.render("login", { message: "Your Credentials Received" });
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

module.exports = router;
