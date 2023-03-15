# Make a Pokemon app that displays data inside server-side rendered views.

![Screenshot](https://github.com/dseydahmetova/pokemon/blob/main/Capture.JPG?raw=true)
![Screenshot](https://github.com/dseydahmetova/pokemon/blob/main/Capture1.JPG?raw=true)

* Learning Objectives
* Practicing index and show, new and create routes with express
* Prerequisites
* JavaScript
* Express
* Node
* JSX

### In terminal:

inside your homework folder:

`mkdir pokemon_app`
`cd pokemon_app`
`mkdir views`
`touch views/Index.jsx`
`touch views/Show.jsx`
`mkdir models`
`touch models/pokemon.js`
`touch server.js`
`touch .gitignore`
`npm init -y`

### Install NPM packages
In terminal:

Make sure that you are on the same directory level as your package.json(why?)
`npm i express`
`npm i jsx-view-engine react react-dom`

### Set up your server
-In your server.jsfile, set up your server

require express
set `express()` to a variable
set a variable of `port` to `3000`
set your app to listen to the port and include a `console.log()`, so that you can tell when your server is running
include a get route `/` that will `res.send('Welcome to the Pokemon App!')`;so that when you got to `localhost:3000`, you will see `Welcome to the Pokemon App!`

### Set up your index view to show your pokemon data
Continue working on your Index.jsx view so that you can see:

* The name of each pokemon, as a list item, inside an unordered list
* This list should be dynamically rendered by jsx based on your data from your 'database'
* You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names

### Setting up your show route
* Inside your `server.js`, add a new get route `/pokemon/:id`
* That will `res.send(req.params.id)`;
 *So, when you go to `localhost:3000/pokemon/whatever`
`whatever` will show up in the browser

### link your Index.jsxto your Show.jsx


## PART 2: Add a model and a database 
* Add Model for pokemon
* Rewrite Index Route to use Mongodb
* Rewrite Index View to work with Index Route
* Rewrite Show Route to MongoDB
* Rewrite Create Route to work with MongoDB
* Use New Page to create all the pokemon that were in the  original array at minimum