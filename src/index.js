const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '=': ' ',
};

function decode(expr) {
    var arr = [];
    let morseString = '';
    for(let i = 0; i<expr.length; i+=10){
    arr.push(expr.slice(i, i+10));
    }
    console.log(arr);
    for(let i = 0; i<arr.length; i++){
      let symbol = arr[i]
      let temp = '';
      if(symbol === '**********'){
        temp += '='
      } else {
        for(let j = 0; j<symbol.length; j+=2){
          if(`${symbol[j]}${symbol[j+1]}` === '10'){
            temp+='.';
          } else if(`${symbol[j]}${symbol[j+1]}` === '11'){
            temp+='-';
          }
        }
      }
      morseString += temp + ',';  
    }
    var morseArr = morseString.split(',').map(letter => MORSE_TABLE[letter]).join('');
    return morseArr;
}

module.exports = {
    decode
}