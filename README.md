# zeolearn_styker

React + Redux, React-Native

// Create Folder for your project

yarn init -y

// To install dev dependency use -D or --dev
yarn add -D webpack webpack-cli webpack-dev-server

// Create src folder and add index.js file

// Add scripts in your package.json file

"scripts": {
"build": "webpack"
}

yarn build

Create webpack.config.js

// Use Webpack extension and use webpack create

// this will add some dev dependency in package.json

// yarn install

// create .babelrc file in root folder

// add following preset in .babelrc file
"presets": ["@babel/preset-env"]

// yarn build

// yarn add --dev html-webpack-plugin

// add in webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
new HtmlWebpackPlugin({
filename: "index.html",
template: "./public/index.html"
})
],
