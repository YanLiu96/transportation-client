# Assignment 2 - Vue app - Automated development process.

Name: Yan Liu

Student No.:  20082245

## Overview.

This vue app is a client of express-transportation website, which aims to help people manage express transportation. Users can search express (there called goods cause express is a keyword ) information or add or delete or edit express.

## E2E Testing.

```javacript
$ npx cypress run --spec cypress/integration/donations.spec.js

Manage Goods page
    ✓ allows the deliveryman of a good to be upvoted (15954ms)
    ✓ allows a good to be edited (5588ms)
    ✓ allows a good to be deleted (3432ms)
```

## Continuous Integration.

+ URL of the Travis build page for the Vue app, e.g.

  https://travis-ci.org/YanLiu96/AgileSoftwareAssignment2

## Automated Deployment.

+ Surge

  http://express-transportation-vue.surge.sh/

+ Firebase 

  https://exprees-transportation-vue.firebaseapp.com/

## Extra features.

+ Login by using firebase console

  Use facebook, google, github, email to login to realzie Authentication. Firebase console will help me manage the users automated.

+ Firebase Automated Deployment
  
  Aftering build the project, I deploy this client by using firebase host.

+ Google Map

  Use google map in this project. But only can be use once every day because i dont add billing.

+ Production-related Bundling
  
  Use custom-build to generate ./dist folder.

## Appendix.

A listing of the output

     $ npx cypress run

```javascript
 Home page
    ✓ Shows a header and Words in home page (13696ms)
    Navigation bar
      ✓ Shows the required links (1812ms)
      ✓ Redirects when links are clicked (1554ms)

 Manage Goods page
    ✓ allows the deliveryman of a good to be upvoted (8199ms)
    ✓ allows a good to be edited (5530ms)
    ✓ allows a good to be deleted (4206ms)

 ADD good page
    ✓ allows a valid good to be submitted (5206ms)
    ✓ shows error messages for incomplete form fields (2830ms)

  About us page
    ✓ Shows a header and information in about us page (2473ms)
    ✓ show the picture in the page (1356ms)
    ✓ Redirects when links are clicked (459ms)
    Information in the page
      ✓ Shows the information about how to contact author (435ms)

 Contact us page
    ✓ Shows a header and Words in contact us page (2359ms)
    Information in the page
      ✓ Shows the information about how to contact author (1465ms)

 Login page
    ✓ Shows a header in about us page (10080ms)
    Test login ways in the page
      ✓ Shows login ways (2065ms)


      Spec                                                Tests  Passing  Failing  Pending  Skipped 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔ aboutUs.spec.js                           00:05        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ addGood.spec.js                           00:06        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ contactUs.spec.js                         00:04        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ home-page.spec.js                         00:06        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ login.spec.js                             00:07        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ searchGoods.spec.js                       00:20        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           00:51       16       16        -        -        -  

```
