/*
Imports 
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

//


/*
Configuration 
*/
const server = express();
const port = process.env.PORT;

//


/*
Démarrer le serveur
*/
    server.listen(port, () =>{
        console.log(`Server is active on port ${port}`);
    });
//