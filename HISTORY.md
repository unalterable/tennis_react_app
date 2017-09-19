
## Project History

This project was created by first fulfilling the business requirements (a tennis scoring webpage application), with the minimum of libraries.
Then gradually it was refactored into a React/Redux application, served using Webpack and Express.

#### Tennis match function
[Project Snapshot ](https://github.com/unalterable/tennis_react_app/tree/62c2699a963169f78e9c52e7f154d06e2befbc90)
* Just core tennis match functionality with unit tests

#### Node Core Server
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/819abe0ba93552faf098cb5a50a2015460957f55):
([Server.js](https://github.com/unalterable/tennis_react_app/blob/819abe0ba93552faf098cb5a50a2015460957f55/app/server.js))
* Simple node server from node core rendering score through ejs template.

#### Express Server Conversion
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/4ca715eded52bfaa90947dd30386af15623c9e8a):
([Selenium Tests](https://github.com/unalterable/tennis_react_app/blob/4ca715eded52bfaa90947dd30386af15623c9e8a/test/feature_spec.js))
* Added Selenium tests and switched to Express.js for ease of use.

#### Webpack Setup
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/59b1e80ee961094703773b2f87a42dea44d236de):
([Webpack Config](https://github.com/unalterable/tennis_react_app/blob/59b1e80ee961094703773b2f87a42dea44d236de/webpack.config.js))
* Brought in Webpack for transpilers.

#### First React Component
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/1b8e10b3b2662193dc66309b6854e0d0016a7607):
([Layout Component](https://github.com/unalterable/tennis_react_app/blob/1b8e10b3b2662193dc66309b6854e0d0016a7607/app/view/layout.js))
* Added webpack plugins for babel-es6 and babel-react. Converted templater to a react component with JSX.
* Express now serves a build folder with compiled react components.

#### Tennis Scoring API
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/03aa52b77314b0669109d07ec64c4e6fe681da14):
([API Tests](https://github.com/unalterable/tennis_react_app/blob/03aa52b77314b0669109d07ec64c4e6fe681da14/test/api_spec.js))
* Build a JSON API for the tennis scoring - fully tested but not used.

#### API integration && React Components
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/a6807bf807585ba316e555e96623769bf200a4b6):
([Call to API in Tennis Game](https://github.com/unalterable/tennis_react_app/blob/a6807bf807585ba316e555e96623769bf200a4b6/app/view/tennis_game_view.js))
* Altered components to call the back-end API instead of using the tennis scoring library.

#### Redux Integration
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/a6807bf807585ba316e555e96623769bf200a4b6):  ([Actions](https://github.com/unalterable/tennis_react_app/blob/6c90fd281edbcc8cba8d9819ea07ac64c8182777/app/view/actions/tennis_game.js) |
[Reducers](https://github.com/unalterable/tennis_react_app/blob/6c90fd281edbcc8cba8d9819ea07ac64c8182777/app/view/reducers/tennis_game.js) | [Mappings](https://github.com/unalterable/tennis_react_app/blob/6c90fd281edbcc8cba8d9819ea07ac64c8182777/app/view/components/layout.js))
* Converted to a Redux architecture with Reducers, Actions and a layout component that maps state and dispatchers to child properties.

#### Redux Async Actions
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/14017a543c96834336a983db3e94fd20126c0f09):
([Actions with Async](https://github.com/unalterable/tennis_react_app/blob/14017a543c96834336a983db3e94fd20126c0f09/app/view/actions/tennis_game.js) |
[Tests for slow server ](https://github.com/unalterable/tennis_react_app/blob/14017a543c96834336a983db3e94fd20126c0f09/test/feature_spec.js))
* Added resiliency tests (where server is slow).
* Hid score during API call and show again on response.


#### Prettify
[Project Snapshot](https://github.com/unalterable/tennis_react_app/tree/e3bd4de6125789d33c9a7b2d1fdd335b2d5d4440)
* Added Bootstrap for presentation. Added README.md. Cleaned package.json.
* Refactored directories & filenames for a better project layout:

```
- app/
  ├── model
  │   └── tennis_rules.js
  ├── routes.js
  └── view
      ├── actions
      │   └── tennis_game.js
      ├── app.js
      ├── components
      │   ├── button_row.js
      │   ├── player_row.js
      │   ├── tennis_game.js
      │   └── winner_row.js
      ├── containers
      │   └── tennis_game.js
      └── reducers
          └── tennis_game.js      
- build/
  ├── app.min.js
  ├── app.min.js.map
  └── index.html
- test/
  ├── browser-helper.js
  ├── feature_spec.js
  ├── routes_spec.js
  └── tennis_rules_spec.js
- HISTORY.md  
- package.json  
- server.js  
- webpack.config.js
```
