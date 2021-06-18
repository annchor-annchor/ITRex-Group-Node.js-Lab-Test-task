const express = require("express");
const https = require("https");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	const url = "https://www.nbrb.by/api/exrates/rates?periodicity=0";

	https.get(url, function(res) {
		console.log(res.statusCode);

		res.on("data", function(data) {
			const currencyData = JSON.parse(data);
		});
	});
	res.render("table", {tableData: currencyData});
});	

app.listen(3000, function() {
	console.log("Server is running on port 3000...");
});