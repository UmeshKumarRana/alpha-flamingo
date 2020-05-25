##alphaFlamingo

* This application is about the Seven Wonders Of The World.
* This is made using HTML, CSS, Javascript, NodeJS, Express and mongo database.
* For styling the pages, Bootstrap 4 is used.
* For icons, font awesome icons are used.
* The various packages used in making the app can be found in package.json file(inside dependecies section).
* seeds.js file is added so each time you run the app, everything you added later through the web page will be removed and you will only see the posts that are created by the seed file each time. So take care of it.


##For running the app in the development mode:

*Use "node app.js" in terminal and open http://localhost:5000 to view it in the browser.
*If you use "nodemon" to run the app then the server will restart automatically if you make edits and then save.

##Note:
* This app is also hosted online on Heroku.
* To view the app enter the url https://alphaflamingo-7wonders.herokuapp.com in the browser.



Name            Path                         HTTP Verb     Purpose
===================================================================================================
Index          /                                GET        Home Page or landing page or List all monuments
show           /monuments/:id                   GET        Show info about one specific Monument
Edit           /monuments/:id/image/new         GET        Show new form for adding images
Create         /monuments/:id                   POST       Create a new image and then redirect to show page