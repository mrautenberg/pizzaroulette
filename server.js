var express = require("express");
var app = express();
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.post("/", (req, res) => {
  var restaurang = req.body.restaurang;
  var fullRandom = req.body.fullrandom;
  res.locals.title = "Pizza Roulette";
  var meny = require("./menyer.json");
  var pizzeria;
  var pizzaName;
  var pizzaIng;
  var keyCount = Object.keys(meny).length;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (fullRandom == "yes") {
    switch (getRndInteger(1, keyCount)) {
      case 1:
        restaurang = "lillaitalien";
        break;
      case 2:
        restaurang = "chrilles";
        break;
      case 3:
        restaurang = "pizzahornet";
        break;
      case 4:
        restaurang = "kaktusen";
        break;
    }
  }

  if (restaurang == "kaktusen") {
    pizzeria = "Pizzeria Kaktusen";
    var random = getRndInteger(1, meny.kaktusen.length);
    pizzaName = meny.kaktusen[random - 1].pizzaName;
    pizzaIng = meny.kaktusen[random - 1].pizzaIng;
  }

  if (restaurang == "lillaitalien") {
    pizzeria = "Lilla Italien";
    var random = getRndInteger(1, meny.lillaitalien.length);
    pizzaName = meny.lillaitalien[random - 1].pizzaName;
    pizzaIng = meny.lillaitalien[random - 1].pizzaIng;
  }
  if (restaurang == "chrilles") {
    pizzeria = "Chrilles Pizzeria";
    var random = getRndInteger(1, meny.chrilles.length);
    pizzaName = meny.chrilles[random - 1].pizzaName;
    pizzaIng = meny.chrilles[random - 1].pizzaIng;
  }
  if (restaurang == "pizzahornet") {
    pizzeria = "Pizza Hörnet";
    var random = getRndInteger(1, meny.pizzahornet.length);
    pizzaName = meny.pizzahornet[random - 1].pizzaName;
    pizzaIng = meny.pizzahornet[random - 1].pizzaIng;
  }

  if (!restaurang) {
    pizzeria = "Lilla Italien (default)";
    var random = getRndInteger(1, meny.lillaitalien.length);
    pizzaName = meny.lillaitalien[random - 1].pizzaName;
    pizzaIng = meny.lillaitalien[random - 1].pizzaIng;
  }

  res.render("pages/pizza", {
    pizzaNr: random,
    pizzaName: pizzaName,
    pizzaIng: pizzaIng,
    restaurang: restaurang,
    pizzeria: pizzeria,
  });
});

app.listen(8080);
console.log("Server is listening on port 8080");
