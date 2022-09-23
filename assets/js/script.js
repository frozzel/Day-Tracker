///////////// Add time the easy waay ////////////
///////// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var rootEl = $('.currentday')
var stampEl = $('.timeStamp')
var timenow = new Date();
var timeSplit = timenow.toString().split('2022')[0];
stampEl.text(timeSplit)
rootEl.append(timeSplit)

/////// Time ////////// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
function getLocaltime(){
    return new Date().toLocaleTimeString();
} 

///// Add Buttons////////////// https://www.plus2net.com/jquery/event-click.php
$(document).ready(function(){
    $('.saveBtn').click(function(){
        var userText = $(this).siblings(".description").val();
        var whenDesc = $(this).parent().attr("id");
        localStorage.setItem(whenDesc, userText)
        console.log(whenDesc, userText)
    })
})

/////////// Keep Text Saves in Case of refresh////////////
$('#8AM .description').val(localStorage.getItem('8AM'))
$('#9AM .description').val(localStorage.getItem('9AM'))
////// https://stackoverflow.com/questions/40791207/setting-and-getting-localstorage-with-jquery  //////

///////////////////////Set Background ?//////////////
if (getLocaltime() >= "8:00"){
    $('#8AM').addClass('present')
}else if (getLocaltime() < "08:00:00 AM" ){
    $('#8AM').addClass('future') 
} else if (getLocaltime() < "09:00:00 AM"){
    $('#8AM').addClass('past') 
}

if (getLocaltime() >= "9:00"){
    $('#9AM').addClass('present')
}else if (getLocaltime() > "10:00:00" ){
    $('#9AM').addClass('future') 
} else if (getLocaltime() < "09:00:00 AM"){
    $('#9AM').addClass('past') 
}