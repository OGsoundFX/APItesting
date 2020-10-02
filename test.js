const parenthesesChecker = require('./checker.js');

test('verifies parentheses balance of the string "---(++++)----" ', () => {
  expect(parenthesesChecker("---(++++)----")).toStrictEqual({"erroneos": "", "preceeding": "(", "result": true});
});

test('verifies parentheses balance of an empty string', () => {
  expect(parenthesesChecker("")).toStrictEqual({"erroneos": "", "preceeding": "", "result": true});
});

test('verifies parentheses balance of the string "before ( middle []) after " ', () => {
  expect(parenthesesChecker("before ( middle []) after ")).toStrictEqual({"erroneos": "", "preceeding": "([", "result": true});
});

test('verifies parentheses balance of the string ") (" ', () => {
  expect(parenthesesChecker(") (")).toStrictEqual({"erroneos": ")", "preceeding": "", "result": false});
});

test('verifies parentheses balance of the string "<(   >)" ', () => {
  expect(parenthesesChecker("<(   >)")).toStrictEqual({"erroneos": ">", "preceeding": "<(", "result": false});
});

test('verifies parentheses balance of the string "(  [  <>  ()  ]  <>  )" ', () => {
  expect(parenthesesChecker("(  [  <>  ()  ]  <>  )")).toStrictEqual({"erroneos": "", "preceeding": "([<(<", "result": true});
});

test('verifies parentheses balance of the string "   (      [)" ', () => {
  expect(parenthesesChecker("   (      [)")).toStrictEqual({"erroneos": ")", "preceeding": "([", "result": false});
});
