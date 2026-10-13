$(document).ready(function(){
    $(".password-show").click(function(){
        var password=$(".input-control");
        if(password.attr("type")==="password"){
            password.attr("type","text");
        }
        else{
            password.attr("type","password");
        }
    });
});