function getFormvalue(){
    let fname=document.getElementByName("fname")[0].value;
    let lname=document.getElementByName("lname")[0].value;
    document.getElementById("name").innerHTML="Hello "+fname+" "+lname;
}