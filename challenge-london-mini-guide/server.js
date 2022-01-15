//You should implement your server logic using `node` and `express`
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8009;

//import the data of phramacies from the json file
 const stratford = require("./data/Stratford.json");
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
// Now register handlers for some routes:

// import the data of pharmacies from the harrow json file
app.get("/", (req, res) => {
    res.send("Hello, I am a pharmacy server! Ask me for /pharmacies in a specific area /colleges  return all the colleges in the area /doctors  return all the doctors in the area");
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

