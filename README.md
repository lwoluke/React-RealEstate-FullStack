# React-RealEstate-FullStack
Frontend using React, HTML, CSS. Backend using Strapi GraphQL.
## Front End Setup
To setup front end, follow these steps:

1) Download NodeJS: https://nodejs.org/en/download/
2) Clone this repo using the command:
```
git clone "https://github.com/lwoluke/React-RealEstate-Pt1.git"
```
3) CD into Front-End directory and Enter the following into the terminal:
```
npm install
npm start
```
4) If unable to run on local development server, create a .env file and paste the following line:
```
SKIP_PREFLIGHT_CHECK=true
```

## Back End Setup
To setup back end, follow these steps:

1) CD into Back-End directory and Enter the following into the terminal:
```
npm install
npm run strapi install graphql
npm run develop
npm i graphql @apollo/client
```
2) Create Strapi Admin account http://localhost:1337/admin

For the best experience, use VS Code.
#### Blog post I made on the creation of this project:

