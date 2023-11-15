const express = require("express");
const app = express();
const port = 3000;

const router = require("./app/router");
const cors = require("cors");
const middlewares = require("./app/middlewares/index");
const path = require("path");

const corsOptions = {
   origin: "http://localhost:5173",
};

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(cors(corsOptions));
app.use(middlewares.bodySanitizer);
app.use(router);

app.listen(port, () => {
   console.log(`Serveur OK on port ${port}`);
});
