var mf=document.getElementById("myforms");
mf.addEventListener('submit',addl,false);
var mainl=document.getElementById("ulist");
mainl.addEventListener('click',removel,false);
function addl(e){
    e.preventDefault();

    var val=document.getElementById("ftext").value;
    var f=document.createElement("li");
    var e=document.createTextNode(val);
    f.appendChild(e);

    var but=document.createElement("button");
    var va=document.createTextNode("X");
    but.appendChild(va);
    f.appendChild(but);

    mainl.appendChild(f);

}
function removel(e){
    if(confirm("are you deleting?")){
        var li=e.target.parentElement;
        mainl.removeChild(li);
    }

}
console.log("add called")