var j=document.getElementById("fir");
var k=document.getElementById("sec");
var th=document.getElementById("third");
var fn=document.getElementById("fullname");
var e=document.getElementById("texts");
var p=document.getElementById("passW");
var pt=document.getElementById("passtext");
var bd=document.getElementById("bday");
var bv=document.getElementById("bview");
var av=document.getElementById("addr");
var lvaln=document.getElementById("namelogin").value;
var lvalp=document.getElementById("loginpassw").value;
var index=0;
var stuarr={};
var stulist=[];
function validation(){
    stuarr={};
    var regvv=/[a-z]+/i;
    if(!(regvv.test(j.value))){
        j.style.border="2px solid red"; 
    }
    if(j.value.length<3){
        j.style.border="2px solid red";
        e.style.visibility="visible";
    }
    if(k.value.length<3){
        k.style.border="2px solid red";
        document.getElementById("text2").style.visibility="visible";
    }
    else{
        stuarr["Name"]=j.value+" "+k.value+" "+th.value;
    }
    if(p.value.length<6){
        p.style.border="2px solid red";
        pt.style.visibility="visible";
    }
    else{
        stuarr["Password"]=p.value;
    }
    j.addEventListener("keyup",fullName());
    k.addEventListener("keyup",fullName());
    bd.addEventListener("keyup",updateAge());
    var v=av.value;
    v.replace(/[0-9]/,'');
    var newv="";
    for(let i of v){

       if(isNaN(i)){
            newv=newv+i;
        }
    }
    av.value=newv;
    /*var c=0;
    for(i=1;i<5;i++){
        
        if(document.getElementById("cb"+i).checked){
            c=c+1;
        }
    }
    if(c<2){
        document.getElementById("hobby").style.visibility="visible";
    }*/
    var phhv=document.getElementById("Phnum").value;
    var re=/[0-9]{10}/
    var ue=/[0-9]{3}-[0-9]{3}-[0-9]{4}/
    var phv=document.getElementById("ph").value;
    if(phv=="India(+91)"){
        if(!(re.test(phhv))){
            document.getElementById("Phnum").style.border="2px solid red";
            document.getElementById("phtext").style.visibility="visible";
        }
    }
    else{
        if(!(ue.test(phhv))){
            document.getElementById("Phnum").style.border="2px solid red";
            document.getElementById("phtext").style.visibility="visible";
        }
    }
    var mailobj=document.getElementById("mailin").value;
    var mailrex=/^[a-z,A-Z][a-z,A-Z,0-9]*@gmail.[a-z,A-Z]{2,3}/
    if(!(mailrex.test(mailobj))){
        document.getElementById("mailin").style.border="2px solid red";
        document.getElementById("mailtext").style.visibility="visible";
    }
    stulist[index]=stuarr;
    index=index+1;
    console.log(stuarr);
    console.log(stulist);
    alertfunc();
    setTimeout(errorMsgs,4000);
    
}

function errorMsgs(){
    j.style.border="2px solid grey";
    e.style.visibility="hidden";
    k.style.border="2px solid grey";
    document.getElementById("text2").style.visibility="hidden";
    p.style.border="2px solid grey";
    pt.style.visibility="hidden";
    document.getElementById("Phnum").style.border="2px solid grey";
    document.getElementById("phtext").style.visibility="hidden";
    document.getElementById("mailin").style.border="2px solid grey";
    document.getElementById("mailtext").style.visibility="hidden";
    //document.getElementById("hobby").style.visibility="hidden";
}
function alertfunc(){
    var e=confirm("Submit the form");
    if(e==true){
        return true;
    }
}
function agg(){
    var accep=document.getElementById("accept").checked;
    if(!accep){
        document.getElementById("accepttext").style.visibility="visible";
        document.getElementById("but").disabled=true
    }
    else{
        document.getElementById("but").disabled=false
    }
}
function fullName(){
    var name=j.value+" "+k.value+" "+th.value;
    fn.value=name;
}
function updateAge(){
    const dat=new Date();
    var v=bd.value;
    var reg=/[0-9]*/
    let arr=v.match(reg);
    let va=parseInt(arr[0]);
    var tod=dat.getFullYear();
    bv.value=(tod-va)+" years";

}
function option(){
    var r=confirm("Are u reset the form")
    if(r==true){
        return true;
    }
    else{
        return false;
    }
}
function rechange(){
    var ceye=document.getElementById("closedeye");
    ceye.src="openeye.png";
    p.type="text";
}
function change(){
    var ceye=document.getElementById("closedeye");
    ceye.setAttribute("src","closeeye.jpg");
    p.type="password";
    
}
function validDetails(){
    console.log("clicked");
    var coun=0;
    var i=0;
    for(i=0;i<index;i++){
        if(stulist[i].Name==lvaln & stulist[i].Password==lvalp){
            document.getElementById("success").style.visibility="visible";
            coun=coun+1;
        }
    }
    if(coun==0){
        document.getElementById("failed").style.visibility="visible";
    }
}