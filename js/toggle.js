document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("mydiv2").style.display = 'block';
document.getElementById("btn").onclick=()=>{
	document.getElementById("mydiv1").classList.toggle("mydiv");
	if(document.getElementById("mydiv2").style.display == 'block')
	{
		document.getElementById("mydiv2").style.display = 'none';
	}
	
	else{
		document.getElementById("mydiv2").style.display = 'block';
	}
}
});