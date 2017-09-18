## Synopsis

This is a tennis scoring application using an Express server and a React/Redux front end.

## Motivation

This application was built as a React/Redux learning exercise. You can see the history of this application [here](./HISTORY.md).

## Installation

To run the application:
```
npm i
npm run webpack-build
npm start
```

## API Reference

If you just wish to use the API simply make a GET request to `/tennis_rules` :
```
http://localhost:3000/tennis_rules?player1=0&player2=15&scorer=player2
=> {player1: "0", player2: "30"}
http://localhost:3000/tennis_rules?player1=A&player2=40&scorer=player1
=> {player1: "0", player2: "0", winner: "player1"}
```

## Tests

To run the tests first ensure you have Selenium's chromedriver on your PATH (refer: [here](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver)). Then:
```
npm i
npm test
```

## License

There is no license for this project.
