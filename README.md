# Express transportation webapp design document

## Yan Liu

## 20082245

## 1. Overview

This vue app is a client of express-transportation website, which aims to help people manage express transportation. Users can search express information or add or delete or edit express(only when user login).

## 2. Description of functionality

### ① server

#### endpoints

Goods

 + GET /goods - Get all express (goods) information.
 + Get /goods/:id - Get one good information by ID.
 + GET /goods/findTotalVotes/ - Get the sum of votes for a deliveryman.
 + POT /goods/ - Post a good information
 + put /goods/:id - Edit a good information
 + PUT /goods/:id/changeLocation/:location - Change good location
 + put /goods/:id/voteForDeliveryman - Upvote for deliveryman
 + Delete /goods/:id - Delete a good information

Senders

+ Get /senders - Get all senders information.
+ Get /senders/:id - Get one sender information by ID
+ POT /senders/ - Post a good information
+ Delete /senders/:id - Delete a sender information

Receivers

+ Get /receivers - Get all receivers information.
+ Get /receivers/:id - Get one receiver information by ID
+ POT /receivers/ - Post a good information
+ Delete /receivers/:id - Delete a sender information
+ Put /receivers/:id/changePhoneNumber/:phoneNumber - Change the phone number of receiver
+ Put /receivers/:id/changeAddress/:address - Change the address of receiver

FuzzySearch

+ Get /fuzzySearch/:keyword - Fuzzy search record by keyword in goods or senders or receivers information.

#### Continuous Integration and Test results.

+ URL of the Travis build page for web API.

  https://travis-ci.org/YanLiu96/AgileSoftwarePracticeAssignment1


+ URL of published test coverage results on Coveralls.  

  https://coveralls.io/github/YanLiu96/AgileSoftwarePracticeAssignment1

+ URL of github of this webAPI

  https://github.com/YanLiu96/AgileSoftwarePracticeAssignment1


#### Extra features.

##### 1. Build automation and Continuous Integration 

I use git branch called development connect with travis. In this branch i use npm scripts to perform transpilitation, linting, watching, etc.You can see my pack,json in development branch in github above. Just like below.

```javascipt
"scripts": {
    "server": "cross-env NODE_ENV=dev PORT=3000 node lib/bin/www",
    "start": "npm-run-all test build server",
    "postbuild": "npm run server",
    "prebuild": "npm-run-all test clean",
    "lint": "esw  ./test ./routes ./models/ app.js",
    "lint:watch": "npm run lint -- --watch",
    "build": "babel ./ --out-dir lib/ --ignore ./node_modules,./.babelrc,./package.json,./package-lock.json,./test --copy-files",
    "test": "cross-env NODE_ENV=test mocha --compilers js:babel-core/register test/routes/*.js",
    "coverage": "cross-env NODE_ENV=test PORT=4000 nyc mocha test/routes/*.js",
    "publish-coverage": "nyc report --reporter=text-lcov | coveralls",
    "test:watch": "npm run test -- --watch",
    "clean": "rimraf ./lib && mkdir lib",
    "server:watch": "cross-env NODE_ENV=dev nodemon --exec babel-node bin/www"
  },
```

##### 2. Auto-Deploying

I deploy my server to heroku by using github connection. You can see the environments section in my github above. It will show `Deployed to express-transportation-server`. In the heroku deploy section. I choose `Wait for CI to pass before deploy`, which base on Continuous Integration service configured on my project.

### ② client

+ It has home page, search express page, express page, map page, about us page, contact us page, login page, logout page.

+ Use canvas in the home page. It shows meteors slide past and twinkling stars.

+ User can visit search express page and they can search express,upvote for deliveryman  but can not edit the information.

+ User can not visit add express page without login.

+ User can use map page to get the location.

+ User can login by google, github, facebook, email. Then they can use all the function in this website.

+ After login, users will turn to the page which show their information: name,photo,email.

#### Continuous Integration and Test results of client

+ URL of github of this client



+ URL of the Travis  page for web client.

  https://travis-ci.org/YanLiu96/AgileSoftwareAssignment2

### ③ specific frameworks

+ this project adopts `node express + mongodb + vue` full-stack development frameworks.

+ the server adopts `mlab database icloud to store data + heroku icloud to deploy server + github to store code which connect with heroku to make automated deployment`.

+ canvas+vue to make page dynamic and become animation.

+ the clirnt adopts `firebase auth ui + firebase host to deploy + vuex to store user information + css style + cypress to test`.

### ④ 3rd party api

+ Google Api :identity Toolkit API 、Token Service API

+ Google Maps JavaScript API

+ Facaebook Api : login auth

+ Google api: google account,email login auth

+ Github api : login auth

## 3. UML Diagrams

## 4. Database Schemas

```javascript
let GoodSchema = new mongoose.Schema({
    goodsName: String,
    goodsKind:String,
    freight:Number,
    deliveryman:String,
    deliverymanUpvotes:{type: Number, default: 0},
    goodsLocation: String
},{versionKey:false},
{ collection: "goods" });

let SenderSchema = new mongoose.Schema({
    senderMethod:String,
    sendersName: String,
    senderPhoneNumber: String,
    senderAddress: String,
    postcode:String,
    sendDate:String
},{versionKey:false},{unique:false},
{ collection: "senders" });
SenderSchema.set("autoIndex", false);

let ReceiverSchema = new mongoose.Schema({
    receiverName: String,
    receiverPhoneNumber: String,
    receiverCountry:String,
    receiverAddress:String,
    postcode:String
},{versionKey:false},{unique:false},
{ collection: "receivers" });
```