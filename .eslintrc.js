module.exports = {
    "env": {
	"browser": true,
	"es6": true
    },
    "parserOptions": {
	"ecmaFeatures": {
	    "jsx": true
	},
	"ecmaVersion": 2018,
	"sourceType": "module"
    },
    "plugins": [
	"react", "smarter-tabs"
    ],
    "rules": {
	"no-mixed-spaces-and-tabs":  "off",
	"smarter-tabs/smarter-tabs": "warn"
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"]
};
