// a base64 encoding, using emoji as the output of the function.

let emoji_dict = "😀😃😄😁😆😅😂🤣😍🥰😘😗😕😟😡🤬🤯😳🥵🥶😱🥱😥😰🤑🤠👹🤡🎃🤖👾👽👩🏻‍💻🧑🏻‍🎤🧅🥑🍒🍑🍇🥥⛳️🪀🎱🏀🤽🏻‍♂️🏅🥉🥈🥇🚋🚃🚟".split("");
let word_dict ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
let red_array = [];//a temporary array, only filled during operation
var arrayType; 
var dictType='';
const desired_lenght = 64
function reduceBigArray(array){
    if (array.length > desired_lenght){
    for (let i = 0; i < desired_lenght; i++ ){
        red_array.push(array[i])
    }}
}

function checkArray(new_array){
    (new_array.length <= desired_lenght ) ? console.log("Array is filled and ready for use") : console.log("Array is empty")
    }
//function showDictType(){
  //  console.log("Hello the available dict type, that you can switch between are \n emoji_dict ----- word_dict")
//}
function changeDictType(string){  
    
 if (arguments[0] === "word_dict"){
    dictType = "word_dict"
    return word_dict 
 }else{
    dictType = "emoji_dict"
    return reduceBigArray(emoji_dict), arguments[0]
 }

}
function sayDictType(){
    console.log("You have selected:-"+" "+ dictType)
};

function encode(num, dictType){
    let encoded_output ="";
    let base;
    let funcOut = changeDictType(dictType)
    if (funcOut === dictType){
          base = emoji_dict.length;
          arrayType = emoji_dict
    }else{
            base = word_dict.length
            arrayType = word_dict
        }
        console.log(checkArray(dictType))
        //console.log(typeof(funcOut))
    if (num === 0){
        return arrayType[0]
    }
    while(num > 0){
        encoded_output += arrayType[(num % base)]
        num = Math.floor(num / base)
    }

    return scrambler(encoded_output)
}

function scrambler(string){
    let scrambled_output = "";
    for (let i = string.length - 1; i >= 0; i--){
        scrambled_output += string.charAt(i)
    }
    return scrambled_output
}


function decode(string){
    let decoded_output = 0
    let split_str = string.split("")
    for (let i = 0; i < split_str; i++){
        decoded_output = decoded_output * arrayType.length + arrayType.indexOf(string.charAt(i))
    }
    return decoded_output;
}

//console.log(changeDictType("emoji_dict")
console.log(red_array, red_array.length, word_dict.length)
console.log(encode(123456754554545565457733333733389, "word_dict"))// Change dictype here
console.log(red_array, red_array.length, word_dict.length)
sayDictType()






