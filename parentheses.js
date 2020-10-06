/**
* This Webservice calls the parenthesesChecker() function from the file checker.js
* The aim is to test if a string has the correct balance of parentheses of the following sort:
* ()
* [ ]
* { }
* < >
* @param {string} a string of characters for which we want to check the parentheses balance.
* @returns {Object} A boolean, a string of preceeding parentheses, a single character string of the erroneos character.
*/


const parenthesesChecker = require('./checker.js');

const express = require('express'), bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/', (req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

  // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);
  const stringCheck = ({
    string: req.body
  });
  if (parenthesesChecker(stringCheck.string.string).result === true) {
    res.status(200).json({
      "isValid": true
    });
  } else {
    res.status(200).json({
      "isValid": false,
      "errorDetails": {
          "preceedingParentheses": `${parenthesesChecker(stringCheck.string.string).preceeding}`,
          "erroneosParentheses": `${parenthesesChecker(stringCheck.string.string).erroneos}`
      }
    });
  };
});

module.exports = router;
