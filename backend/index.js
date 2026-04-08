const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(express.json());
app.use(cors());

const ramRouter = require('./routes/Rams');
app.use("/rams", ramRouter);

const ramTypeRouter = require('./routes/RamTypes');
app.use("/ramtypes", ramTypeRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});

