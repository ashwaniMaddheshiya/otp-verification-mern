const express = require("express");
const cors = require("cors");
const otpRoutes = require("./routes/otp-routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/login", otpRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("App is listening on the port 5000");
});
