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
- Créer un fichier "__index.html__" dans le dossier "__www__"