const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const houseRouter = require('./routes/houseRoutes');
const enquiryRouter = require('./routes/enquiryRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

dotenv.config();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGOURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.use("/house/", houseRouter);
app.use("/enquiry/", enquiryRouter);
app.use("/user/", userRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
