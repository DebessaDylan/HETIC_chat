# HETIC_chat

Mise en place d'une application de chat (chatbot)

## Configuration de base
- Initialiser le dossier serveur (npm init)
- Créer un fichier pour le serveur
- Importer les composants: express, body-parser, dotenv, ejs, mongoose, path, nodemon (npm i -s ...)
- Configurer le fichier serveur : 
    - créer une constante pour les imports (attention à dotenv)
    - créer une constante pour le serveur (utilisation de la fonction express())
    - configurer les composants 
    - lancer le serveur

## Configuration des vues client
- Définir le moteur de rendu en __ejs__
- Définir un dossier "__www__" comme étant le dossier client
- Créer un fichier "__index.ejs__" dans le dossier "__www__"
- Créer un router front:
    - créer les routes Homepage
    - créer la route register
    - créer la route login
    - créer la route chat

## Création de l'API
- Créer un fichier de routes pour l'api (cf. font.routes)
- Créer une route "/register"
- Créer une route "/login"

## Création des formulaires register/login
- Le formulaire d'inscription contient:
    - email
    - pseudo
    - password (2)
    - cgu
- Le formulaire de connexion contient:
    - email
    - password