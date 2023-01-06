//Establish PORT 
const PORT = process.env.PORT || 3307;
// require express
const express = require("express");
//call express
const app = express();
//require file system and path
const fs = require("fs");
const path = require("path");
//define api route
const apiRoutes = require("./routes/apiroutes/apinotes");

//define html route
const htmlRoutes = require("./routes/htmlroutes/htmlnotes");

//Establish middleware
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));


