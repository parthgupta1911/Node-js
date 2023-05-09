const cors = require("cors");
/*if request from another host(not where the server is) then there is an origin(from where the request is made) header in request
if this is not in the array then in res we will not send the access-control-allow-origin header thus the browser will block it
if only allow 1 url then will send always but then the browser will compare if both the url are same or not
if same then only browser will allow it

note - for postman it doesnt care so we can just add the allowed url in request headers
*/
var corsOptions = {
  origin: ["https://example.com", "https://url1.com"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
module.exports = cors(corsOptions);
