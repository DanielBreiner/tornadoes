/**
 * @file Express router for all main views.
 * @author Daniel Breiner <danielbreinerd@gmail.com>
 */

const router = require('express').Router();
const middlewares = require("./middlewares");

router.get("/", (req, res) => {
    res.render("index");
});
router.get("/crossroad", middlewares.authorize, middlewares.sql.crossroad, (req, res) => {
    res.render("crossroad", req.toEjs);
});
router.get("/dashboard", middlewares.authorize, middlewares.sql.dashboard, (req, res) => {
    res.render("dashboard", req.toEjs);
});
router.get("/goal", middlewares.authorize, (req, res) => {
    res.render("goal");
});
router.get("*", (req, res) => {
    res.sendStatus(404);
});

module.exports = router;