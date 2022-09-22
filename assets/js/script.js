// see unit 6 &1 & 10 to make text and save to screen///
//test//
///////////// Add time the easy waay ////////////
///////// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var rootEl = $('.currentday')
var stampEl = $('.timeStamp')

///test 2//
var timenow = new Date();
var timeSplit = timenow.toString().split('2022')[0];

console.log(timenow)
console.log(timeSplit)


stampEl.text(timeSplit+ ('')+ getLocaltime())
rootEl.append(timeSplit)

/////// Time //////////
function getLocaltime(){
    return new Date().toLocaleTimeString();
}
console.log(getLocaltime())
////// ^^^^^^^^^^^ fire now how to use it //// 

if (getLocaltime() > "10:00:00 PM" && getLocaltime() < "12:00:00 PM"){
    console.log("hell ya")
}