const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));

    const transposeItFirst = transpose(letters);
    let verticalJoin = transposeItFirst.map(ls => ls.join(''));
    
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;
};

const transpose = function(letters) {
    let array = [];
        for (let i = 0; i < letters[0].length; i++) {
          array.push([]);
        }
        for (let row = 0; row < letters.length; row++) {
          for (let col = 0; col < letters[row].length; col++) {
            array[col][row] = letters[row][col];
          }
        }
        return array;
      };

module.exports = wordSearch;


// Pair programmed by: 
// M-ARTHELL
// Junkpoe
// Neeha