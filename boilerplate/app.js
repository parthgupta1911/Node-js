const app = require("express")();

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "teach") {
    console.log(` this log is for each request \n on the app.js page here we declare middleware(response handler is the last middleware using app.use where app=express()) which are run when we send the request`);
  }
  next();
});
app.use((req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "abhi k liya itna hi",
  });
});
module.exports = app;
