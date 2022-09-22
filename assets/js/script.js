// see unit 6 &1 & 10 to make text and save to screen///
//test//
///////////// Add time the easy waay ////////////
///////// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var rootEl = $('.currentday')
var stampEl = $('.timeStamp')
var get5amEl = document.getElementById('8AM')
 
///test 2//
var timenow = new Date();
var timeSplit = timenow.toString().split('2022')[0];

console.log(timenow)
console.log(timeSplit)


stampEl.text(timeSplit+ ('')+ getLocaltime())
rootEl.append(timeSplit)

/////// Time ////////// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
function getLocaltime(){
    return new Date().toLocaleTimeString();
}
console.log(getLocaltime())
////// ^^^^^^^^^^^ fire now how to use it //// 

// if (getLocaltime() > "06:00:00 PM" && getLocaltime() < "11:59:00 PM"){
//     allHours.className = "past col-8"
//     console.log("hell ya")
// } else if (getLocaltime() > "12:00:00 AM" && getLocaltime() < "07:00:00 AM" ){
//     allHours.className = "past col-8";
//     console.log("hell ya!!")
// }
//// 04#6 ref for calls /////^^^^ pickup tomarrow/////

if (getLocaltime()< "09:00:00 AM"){
    get5amEl.className = 'past col-8'

} else if (getLocaltime()> "08:00:00 Am"){
    get5amEl.className = 'future col-8';

}




