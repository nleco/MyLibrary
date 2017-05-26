# Library App
This is a simple library app that will let you add and remove books. It uses

* Webpack
* npm
* ReactJS
* react-router
* redux (react-redux)
* lodash
* sass
* material deisgn icons (mdi)
* resolve-url-loader
* file-loader

## Run
You can run this by running:  
`npm run build // build the project`  
`npm run start // run the webpack-dev-server`  

## Development
As I created this app, I noted down a few areas of concern. These are things that I thought about as I was building the app.  

I also did not add very robust form input checking. I used a simple Promise, but it was not really necessary due to the fact that I disable the submit button.  The input is mainly strings, not much else we would check form other than an empty string. But we could easily use a home-grown validator, or use some nifty npm modules.

### Pages
I used the react-router to help separate pages, and treat them like pages in the browser history.

### Services
I decided not to bother with actually saving this to a database, such as MongoDB. I simply kept data in the redux store.

### Loaders
I used some loaders to help with imported content:
* file-loader : help move webfont files from mdi
* resolve-url-loader : help change the generated sass url paths for imported conent. ie: webfont files.

### Component/Scenes
I attempted to try and seperate the files as:
* scenes : This is mainly what gets displayed to the user. It is redux independent.
* containers : this connects redux store to the views.
* components : reusable widgets of the code, things like forms, links, alert boxes, etc
* scss : separated it out so that you don't get confused with the views. also, separate out each different types into their own files. better organization. 

### Data Typechecking
Since it's a simple app, I did not include prop typechecking. In production code, this would be a requirement.