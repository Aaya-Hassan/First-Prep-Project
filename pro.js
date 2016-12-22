$(document).ready(function(){
$('body').css('background-image',"url(http://mg-games.co.uk/wp-content/uploads/2012/11/cpo-background-mfg_1.jpg)")
})
// count for the score
var x=1
// invoke the timer function once 
var flage=true;
// to count
function count(){
	// update the high score immedtily
	if(x > window.localStorage['hightScore']){
		$('.hi').text(x+1)
	}
	if(flage){
	 timer()
	}
	flage=false;
	x++;
	$('.counter').text(x)

}



var y=10
$('.hi').text(window.localStorage['hightScore'])
function timer(){
 var stop=setInterval(function(){
 	y--	
 	if(y === 0){
 		clearInterval(stop);
 		 if(x > window.localStorage['hightScore']){
 			window.localStorage['hightScore']=x
 			$('.hi').text(window.localStorage['hightScore'])
 		}
 	}
 	$('.timeTag').text(y)
 },1000)
}
 
// function invoke(){
//             var bla = $('#txt_name').val();
//         $('ul').append("<li>" +bla +"</li>")
// }


// function getValue(){
//     var arr=[]
//     var retVal = prompt("Enter your name : ", "your name here");
//     window.localStorage.
//     // document.write("You have entered : " + retVal);
// }
            
            
            

