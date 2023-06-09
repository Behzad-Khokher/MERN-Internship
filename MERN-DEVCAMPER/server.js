const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Logger
const logger = require("./middleware/logger");

// Router files
const bootcamps = require("./routes/bootcamps"); // Mounting bootcamp router

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// const logger = (req, res, next) => {
//   console.log(req);
//   console.log(
//     `${req.method} ${req.protocol}://${req.get("host")} ${req.originalUrl}`
//   );
//   next();
// };

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
