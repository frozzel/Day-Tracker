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


stampEl.text(timeSplit)
rootEl.append(timeSplit)