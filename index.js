function addlist(){
    var d=document.createElement("div");
    var tits=document.getElementsById("heading").value;
    var dis=document.getElementsById("content").value;
    //d.innerHTML="<h1>"+tits+"</h1>"+"<br>"+dis;
    d.innerHTML="hello";
    document.getElementById("mylist").appendChild(d);
    
}