## A/B Testing in React

This app showcases a lightweight approach to implementing A/B tests on a React app.

### Setup
 1. Fork this repository to create a copy on your GitHub account.
 2. Clone the `my-react-app` repository from *your GitHub account* to create a local copy on your computer.
 3. In the terminal, from within the `my-react-app` directory, run `npm run start`
 4. Your browser should automatically open this React app

### Running the Test
 - In `index.html` is a script tag at the top of the `head` tag. This simulates a client's script tag to their testing tool (ie Optimizely, Maxymiser, etc)
 - When this script tag is run, it simulates a `v1` test environment
  - v0 shows all text in the `header` element in a dark gray color
  - v1 changes the **COLORS** `h1` tag color to white
 - In order to simulate a `contorl` or `v0` environment, just comment out the script tag

### How It Works
*NOTE: In this app, state change can be observed by clicking the circle button to change the page's background color*
  - In the `Button.js` component code are 2 React lifecycle functions `componentDidMount` & `componentDidUpdate`
    ```js
    // runs on page load/reload
    componentDidMount() { }
    // runs immediately after component is updated/state changes
    componentDidUpdate() { }
    ```
  - Within these functions are a few lines of code that call a global function called `clearheadHook()`
    ```js
    // Calling this function in each of the lifecycle functions will cause it be run on page load and any time the state changes
    componentDidMount() {
      if (window.clearheadHook) {
        window.clearheadHook();
      }
    }

    componentDidUpdate() {
      if (window.clearheadHook) {
        window.clearheadHook();
      }
    }
    ```
  - We then define the `clearheadHook()` function in the `test-code.js` file and place all test code within the function
    - *This file simulates the variation JavaScript that would be put into a testing tool*
    ```js
    // test-code.js
    window.clearheadHook = function() {
      // Test code here
    };
    // Because we are putting all our test code inside this clearheadHook() function, it will run and persist through all page loads and state changes
    ```

### That's It!

# 🎉 🙌🏼


*This app was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

*The approach of using React's lifecycle methods in an A/B testing environment was originally posted on [Hackernoon](https://hackernoon.com/using-optimizely-with-react-redux-99bd510c790f).*
