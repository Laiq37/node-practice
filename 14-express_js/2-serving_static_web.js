const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname,"./2-public")

//for static method detail refer to expressJs.txt
app.use(express.static(staticPath));
app.listen(8000);