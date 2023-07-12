let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const User = require("./models/user");
const dotenv = require("dotenv");
const port = 3001;
const origin = "http://localhost:3000";

console.log(origin);

app.use(morgan("dev"));
app.use(
  cors({
    origin: origin,
    credentials: true,
  })
);
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "theon2",
  })
);
mongoose
  .connect(
    "mongodb+srv://sparta:test@cluster0.xi1pqvv.mongodb.net/dbsparta?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB server"))
  .catch((err) => console.error(err));

const routerUser = require("./routes/user")(app, User);

let server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});
