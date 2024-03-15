const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const broil = require("x-broil-gadzooks"),
	which = require("x-which-frequent"),
	fare = require("x-fare-barring"),
	atop = require("x-atop-twister"),
	playground = require("twt-playground"),
	usually = require("x-usually-longingly"),
	gosh = require("x-gosh-where"),
	dismiss = require("x-dismiss-across"),
	rarely = require("x-rarely-opposite"),
	numeric = require("x-numeric-police"),
	fondue = require("x-fondue-indolent"),
	worse = require("x-worse-clearly"),
	attack = require("x-attack-yippee"),
	cheery = require("x-cheery-messenger"),
	first = require("x-first-boohoo"),
	anguish = require("x-anguish-notarize"),
	amend = require("x-amend-beyond"),
	infect = require("x-infect-likewise"),
	prod = require("x-prod-yippee");

const USERNAME = "Ruben.Wiza24",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
