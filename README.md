# Node express typescript boilerplate (+ typeorm)

A boilerplate for Node.js web applications.
## Enviroment Variables:
TOKEN_SECRET_KEY : Use to sign jwt tokens

DB_HOST : Database host

DB_USER : Database User

DB_PASSWORD : Database Password

DB_NAME : Database name

PORT: Api server port
## How to run:

###Local

No need to run migration in local as db sync is on.

``npm run watch-ts``


###Production

####Migration

``npm run migration:generate -- -n "<migration name>"``

``npm run migration:run``

####Deployment
``npm run build-ts``
####Run
``npm start``



