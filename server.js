/*
Imports 
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const router = require('./routes/front/front.routes');

//

const mainRouter = require('./routes/main.router')

/*
Configuration 
*/
const server = express();
const port = process.env.PORT;

class ServerClass{

    init(){
    // Config du dossier client
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Config du moteur de rendu
    server.set( 'view engine', 'ejs' );

    // Configurer les routes
    server.use('/',mainRouter);

    // Lancer le serveur
    this.launch();
    }



    launch(){
        server.listen(port, () =>{
            console.log(`Server is active on port ${port}`);
        });
    }
}

//


/*
Démarrer le serveur
*/
    new ServerClass().init();
//