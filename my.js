// my.js

console.log("my.js initiated");

console.log($);




$('#message-intent').change(function(){
	var intention = $("#message-intent option:selected").val();

	var codeInjection1 = '<textarea style="resize:none;"rows="4" cols="30" form="usrform" placeholder="leave your message here.">';
	var codeInjection2 = 'blah';
	var codeInjection3 = 'blah';

	if( intention === "#"){
		$('#injectcode').html("");
	}
	if( intention === "leave-a-message"){
		$('#injectcode').html(codeInjection1);
	}
	if( intention === "work-opportunity"){
		$('#injectcode').html(codeInjection2);
	}
	if( intention === "more-questions"){
		$('#injectcode').html(codeInjection3);
	}
});


