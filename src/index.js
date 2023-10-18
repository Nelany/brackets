module.exports = function check(str, bracketsConfig) {

  function deletePair(str, bracketsConfig) {
    for (let i = 0; i < str.length - 1; i++) {
      for (const pair of bracketsConfig) {
        if (str[i] === pair[0] && str[i + 1] === pair[1]) {
          str = str.slice(0, i) + str.slice(i + 2);
          return deletePair(str, bracketsConfig);
        }
      }
    }
    return str;
  }
  str = deletePair(str, bracketsConfig);
  return str.length === 0;
};
