module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "es6": true
    },
    "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "React": "writable",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off"
    }
};