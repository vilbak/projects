module.exports = {
    "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": ["react"],
  "rules": {
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/forbid-prop-types": [0],
    "react/require-default-props": [0],
    "global-require": [0],
    "no-underscore-dangle": [0],
    "linebreak-style": 0
  }
}