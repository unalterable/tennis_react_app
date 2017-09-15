#### Tennis match function
* Started with the core tennis match functionality. Treated as a pure function with no state.
* Architecture: No application - just unit tests


#### Node Core Server
* Added a node server from node core.
* Architecture: The server listens to all traffic on port 3000. It puts the query params through the tennis scoring script. It returns the new score shown within an ejs html template with buttons linking to the next iteration.
* Tests: Added http-fetch tests. http-fetch uses promises as opposed to ?????. I like promises but it will require co-mocha.

#### Express
* The need to serve up static files required too many libraries using node core server. Plus I could do with an easy handle to stop/start the server, and a built in query params interpreter.
* Architecture: Express server listens on '/' and serves up the ?????? build folder statically.
* Tests: all pass. Added Selenium Tests using a selenium wrapper I made for another project.

#### Webpack
* To move forward I was going to have to have a JSX and ES6 transpiler for my browser.
* Learned how webpack works and the '--watch' flag. Learned about webpack config is laid out and wrote a basic config JSON from scratch.
* Switched the html to be rendered by the browser which brought in the tennis_rules script. Had to switch templater from ejs to mustache.
* Tests: all pass. Relying more heavily on selenium as http-fetch can only see the first script tag, not the js-rendered elements.

#### First React
* Added webpack plugins for babel-es6 and babel-react.
* Added first react component on page.
* Learned that React does not like you to manually insert HTML. You can but you have to use a function with the word 'dangerous' in it. And even then you have to
* Converted template to JSX.
* Architecture:
  * Webpack compiles an entry-point js file, from React files.
  * Express serves up build folder. Which now includes an index.html entry-point.
  * 1 React layout component calling tennis score function and rendering JSX template.
* Tests all pass.

#### Tennis Scoring API
* Porting the functionality to the front end was only to satisfy the needs of the static templating engine. In React change should be rendered on the page, so the functionality needed to become an API on the node server.
* Architecture: API listens on /tennis_rules, it responds with the JSON result of putting the query params through the tennis scorer.
* Tests all pass. API tests built with http-fetch.

#### React Calls API from buttons

#### Prettify
