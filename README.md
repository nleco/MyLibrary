Sam Sanchez - test app

# Library App
This is a simple library app that will let you add and remove books. It uses

* Webpack
* npm
* ReactJS
* redux (react-redux)
* lodash (not always)
* sass

## Run
You can run this by running:
    npm run build // build the project
    npm run start // run the webpack-dev-server

## Notes
This is not a full featured app. It's just meant to show my initial workings with these tools that I have not worked with in a professional environment.

## Development
As I created this app, I noted down a few areas of concern. These are things that I thought about as I was building the app.

### Services
I decided not to bother with actually saving this to a database, such as MongoDB. I simply kept data in the redux store.

### Component/Scenes
I attempted to try and seperate UI and Container components.
* UI : simply does UI work without a need to know about what is being stored where. It takes data and renders it.
* Containers : Here is where we interact with the store and where we would probably store things to a persistent storage


### Data Typechecking
I may not have time to add some Typechecking useing the propTypes.