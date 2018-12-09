'use strict';
function Scrabble(){
  this.score = 0;
};
const rules = {
1 : ['e', 'a', 'o', 't', 'i', 'n', 'r', 's', 'l', 'u'],
2 : ['d', 'g'],
3 : ['c', 'm', 'b', 'p'],
4 : ['h', 'f', 'w', 'y', 'v'],
5 : ['k'],
8 : ['j', 'x'],
10 : ['q', 'z']
}

Scrabble.prototype.points = function (string) {

  var stringArray = string.split("");

  for(var j = 0; j < stringArray.length; j++) {

    for(var i = 0; i < Object.values(rules).length; i++) {

      if(Object.values(rules)[i].includes(stringArray[j])){
        this.score += parseInt(Object.keys(rules)[i])
      }
    }
  }
  return this.score
};
