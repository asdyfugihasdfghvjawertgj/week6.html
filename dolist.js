document.addEventListener("DOMContentLoaded",function(){
document.querySelector("#submit").onclick=()=>{
    var listitem=document.createElement("li");
        listitem.innerHTML=document.querySelector("#new_task").value;
        document.querySelector("#task").append(listitem);
        document.getElementById("submit").disabled=true;
        document.querySelector("#new_task").value="";
        return false;


    
}
//var btn=document.querySelector('button').value;
document.querySelector('#new_task').addEventListener('input',()=>{
    var input=document.querySelector('#new_task').value;
    //var input=document.querySelector('#new_task');
 if(input!=""){
 document.getElementById("submit").disabled=false;
 }
 else if(input==""){
 document.getElementById("submit").disabled=true;
 }
});

});
