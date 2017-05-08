// var navButton = document.getElementById('navbutton');
//
// navButton.onClick = logIt;
//
// function logIt() {
// 	console.log(navButton);
// }
//
// // var songs = require('./_songs');
// //
// // var track1 = new songs();
// //
// // track1.rand();

var $ = require('jquery');

$(document).ready(function(){
	$('#navbutton').click(function(){
		$('.info').toggleClass('d-n');
	});
});
