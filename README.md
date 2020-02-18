[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  
  <h2 align="center">NODE EXPRESS TYPESCRIPT boilerplate (+ typeorm)</h2>

  <p align="center">
    A boilerplate for Node.js web applications.
    <br />
    <br />
    <a href="https://github.com/a7urag/node-express-mysql-typescript-api-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/a7urag/node-express-mysql-typescript-api-boilerplate/issues">Request Feature</a>
  </p>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Enviroment Variables](enviroment-variables)
  * [Local](#local)
  * [Production](#production)
    * [Migration](#migration)
    * [Deployment](#deployment)
    * [Run](#run)
* [TODO](#todo)

<!-- ABOUT THE PROJECT -->
## About The Project

There are not many node express boilerplate available on GitHub, 
which can be easily setup and run within few minutes.

Features:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like setting up node, express, typescript and typeorm.
* You should use same structure across your projects :smile:
* You should not write same functionality like user authentication again and again.

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Express](https://expressjs.com/)
* [Typeorm](https://typeorm.io/#/)
* [Typescript](https://www.typescriptlang.org/docs/home.html)
* [Express JWT](https://www.npmjs.com/package/express-jwt)

## Enviroment Variables:

Add these keys as environment variable

`TOKEN_SECRET_KEY`: Use to sign jwt tokens

`DB_HOST`: Database host

`DB_USER`: Database User

`DB_PASSWORD`: Database Password

`DB_NAME`: Database name

`PORT`: Api server port(default = 5000)

## Getting started:

#### Local

No need to run migration in local as db sync is true.

    npm run watch-ts  


#### Production

##### Migration

    npm run migration:generate -- -n "<migration name>"

    npm run migration:run

##### Deployment
    npm run build-ts
##### Run
    npm start  

PS: using `pm2` for production environment

## TODO:
- [ ] Use yarn instead of npm
- [ ] Move user auth on api request to redis
- [ ] Add social login support

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/a7urag/node-express-mysql-typescript-api-boilerplate.svg?style=flat-square
[contributors-url]: https://github.com/a7urag/node-express-mysql-typescript-api-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/a7urag/node-express-mysql-typescript-api-boilerplate.svg?style=flat-square
[forks-url]: https://github.com/a7urag/node-express-mysql-typescript-api-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/a7urag/node-express-mysql-typescript-api-boilerplate.svg?style=flat-square
[stars-url]: https://github.com/a7urag/node-express-mysql-typescript-api-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/a7urag/node-express-mysql-typescript-api-boilerplate.svg?style=flat-square
[issues-url]: https://github.com/a7urag/node-express-mysql-typescript-api-boilerplate/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/a7urag/
[product-screenshot]: images/screenshot.png
