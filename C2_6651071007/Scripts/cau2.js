let form=document.getElementById("form1");
$(form).submit(function(event){
    event.preventDefault();
    let fname=document.getElementsByName("fname")[0].value;
    let lname=$("input[name='lname']").val();
    alert(fname + "  " + lname);
});