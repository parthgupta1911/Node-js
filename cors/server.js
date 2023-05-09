const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 1120;
if (process.env.NODE_ENV === "teach") {
  console.log(`on server.js to run the application on PORT=${port}`);
}
const uri = process.env.URI.replace("<password>", process.env.PASSWORD);
if (process.env.NODE_ENV === "teach") {
  console.log(`we got the uri for connect => ${uri} here git-db(i.e the text after mongodb.net/) is the name of database to which it's connected`);
}
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to the database`);
  });
const app = require("./app");
const server = app.listen(port, () => {
  console.log(`started the server`);
});
