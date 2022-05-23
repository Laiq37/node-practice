const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const app = express();

dotEnv.config();

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => console.log('Connection to Database has been Established'))
  .catch(_ => console.log('Connection Failed'));
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/product', productRoute)

app.listen(process.env.PORT || 5000, () => 
  console.log('Connection to server has been established'));
