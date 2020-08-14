//Require all
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Routes
app.use(routes);

//Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB is connected"))


//Start API server
app.listen(PORT, function() {
    console.log(`Server is listening on PORT ${PORT}!`);
});