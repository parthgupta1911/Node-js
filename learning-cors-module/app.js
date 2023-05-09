const app = require("express")();
const cors = require("./cors/index");
/*app.use((req, res, next) => {
  console.log(req.headers.origin);
  next();
});*/
app.use(cors);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "teach") {
    console.log(` this log is for each request \n on the app.js page here we declare middleware(response handler is the last middleware using app.use where app=express()) Which are run when we send the request`);
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
