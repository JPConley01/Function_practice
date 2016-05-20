//tripleFive
function tripleFive(){
    var Five = 'Five!';
    
    for(var i = 0; i < 3; i++ ){
        console.log(Five);
    }
}

tripleFive()

//lastLetter

function lastLetter (){
    var str = "longboard";
    alert(str[8])   
}
 
lastLetter()


//Square

function square() {
    var num = "9";
    alert(Math.pow(9, 2));
}


square();

function square_two() {
    var num = "7";
    alert(num * num);
}

square_two();

//Negate

function negate() {
    var num = "21";
    alert(-Math.abs( num ));
}

negate();

//toArray

var toArray = function(a,b,c) {
    var arr1 = [a, b, c];
    return arr1
}

console.log(toArray(1,2,3));

//startsWithA

var startsWithA = function(string){
    var letter = string.charAt(0);
    var letter = letter.toUpperCase();
    if (letter === "A"){
       return true
    } else {return false;   

    }
}
    

console.log(startsWithA("Apple"));

//excite

var excite = function(punc) {
    return punc + "!!!"
}

excite("cheese")

//sun

var sun = function(word){
  if (word.indexOf('sun') > -1) {
    return true;
  } else {
      return false;
  }

}


sun("asunder")

//tiny

var tiny = function(num){
  if (num > 0 && num < 1) {
      return true
  } else {
      return false
  }
}

tiny(0.09)

//getSeconds

var getSeconds = function(time){
    var timeArray = time.split (":") 
    var totTime = (parseInt(timeArray[0]) * 60) + parseInt(timeArray[1]);
    return totTime
}

getSeconds("05:30")