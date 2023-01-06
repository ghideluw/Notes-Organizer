//Require dependencies needed for application
const express = require('express');
const fs = require('fs');
const path = require('path');

//initialize express 
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.listen(3001, (req, res) => {
	console.log("App is running on port 3001")
})
