var numbers=document.getElementsByClassName("num");
var equa=document.getElementById("equal");
var clear=document.getElementById("remove");
var user=document.getElementById("in");
for(var i=0;i<numbers.length;i++){
    numbers[i].onclick=function(){
        user.value+=this.value;
    }}

    equa.onclick=function(){
        user.value=eval(user.value)
    }
clear.onclick=function(){
    user.value=""
}
