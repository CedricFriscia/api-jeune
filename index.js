const express = require("express");
const app = express();
const port = 3000;

const router = require("./app/router");
const cors = require("cors");
const path = require("path");

const corsOptions = {
   origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.use(router);

// app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
   console.log(`Serveur OK on port ${port}`);
});
