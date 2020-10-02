/**
* Writting the parentheses checker funcrtion and exporting it
* @param {string} a string of characters for which we want to check the parentheses balance.
* @returns {Object} A boolean, a string of preceeding parentheses, a single character string of the erroneos character.
*/

module.exports = function (string) {
  const openArray = ["(", "[", "{", "<"];
  const closeArray = [")", "]", "}", ">"];
  let i = 0, parOpen = 0, openingPar= "", closingPar = [], erroneos = "";
  for(i; i < string.length; i++) {
    if (openArray.includes(string[i])) {
      openingPar += string[i];
      parOpen++;
      closingPar.push(closeArray[openArray.indexOf(string[i])]);
    }
    if (closeArray.includes(string[i])) {
      let erroneos = string[i];
      parOpen--;
      if (string[i] === closingPar[closingPar.length - 1]) {
        closingPar.pop();
      } else {
        return { result: false, preceeding: openingPar, erroneos: erroneos };
      };
    };
    if (parOpen < 0) return { result: false, preceeding: openingPar, erroneos: erroneos };
  }
  return { result: (parOpen === 0 ? true : false), preceeding: openingPar, erroneos: erroneos };
};
