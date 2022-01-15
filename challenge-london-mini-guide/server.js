//You should implement your server logic using `node` and `express`
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8009;

//import the data of phramacies from the json file
 const stratford = require("./data/Stratford.json");
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");

const cities= { stratford: stratford , harrow: harrow, heathrow: heathrow } 
// Now register handlers for some routes:

app.get("/", (req, res) => {
    res.send("Hello, I am a city mini guide server! Ask me for /pharmacies in a specific /city /colleges  return all the colleges in the /city /doctors  return all the doctors in the area");
    });







// 
app.get("/:city/:category/search" , (req, res) => {
    
    const city = req.params.city;
    const category = req.params.category;
    const searchTerm = req.query.term;

    const cityData = cities[city][category].filter((item) => { item["city"].toLowerCase().includes(searchTerm.toLowerCase())
    });
    res.status(200).json(cityData);
});


app.get("/:city", (req, res) => {
    const city = req.params.city;
    res.json(cities[city]);
});

app.get("/:city/:category" , (req, res) => {
    const city = req.params.city;
    const category = req.params.category;
    res.json(cities[city][category]);
});




// Return pharmacies in Stratford
app.get("/pharmacies", (req, res) => {
    res.json(stratford);
    });

//Returns colleges list for stratford
app.get("/colleges", (req, res) => {
    res.json(stratford.colleges);
    });



//Returns doctors list for stratford
app.get("/doctors", (req, res) => {
    res.json(stratford.doctors);
    });

//Returns hospitals list for stratford
app.get("/hospitals", (req, res) => {
    res.json(stratford.hospitals);
    });
    


    app.listen (PORT, () => {
        console.log("Pharmacy server is running on port " + PORT);
    }
    );

