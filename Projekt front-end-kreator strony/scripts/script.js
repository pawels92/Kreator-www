$(document).ready(function(){
	$('#logo').keyup(function(){
		value = $('#logo').val();
		$("#content-logo").html("<img src='"+value+"'>");

	});
	$('#tekstPowitalny').keyup(function(){
		value = $('#tekstPowitalny').val();
		$("#content-tekstPowitalny").html(value);

	});
	
	$('#menu').keyup(function(){
		value = $('#menu').val();
		menuTab= value.split(';');
		ht="<ul>";
		for(i=0; i < menuTab.length; i++)
		{
			ht += "<li>"+menuTab[i]+"</li>";
		}
		ht+="</ul>";
		
		$("#content-menu").html(ht);

	});
	
	$('#zawartoscStrony').keyup(function(){
		value = $('#zawartoscStrony').val();
		$("#content-zawartoscStrony").html(value);

	});
	
	$('#stopka').keyup(function(){
		value = $('#stopka').val();
		$("#content-stopka").html(value);

	});
	
	
	
});