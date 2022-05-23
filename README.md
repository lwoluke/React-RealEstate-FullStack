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

## Strapi Email/Password to Use
Email: test_strapi@gmail.com

Password: Test123!

Use http://localhost:1337 to enter

### For the best development experience, use VS Code: https://code.visualstudio.com/

## Production
To build the app for production: 
- CD into Front-End and enter ```npm run build```
- CD into Back-End and enter ```npm run strapi build```

Documentation for Deployment: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html

### Blog post I made on the creation of this project: https://medium.com/codex/reactjs-graphql-full-stack-real-estate-web-app-98b59fddc7a6

