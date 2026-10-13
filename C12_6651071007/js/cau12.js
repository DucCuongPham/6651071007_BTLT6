$(document).ready(function(){
    $(".passport-box").hide();
    $(".checkme").change(function(){
        var checkbox=$(this);
        var card=checkbox.closest(".checkbox-card");
        if(checkbox.is(":checked")){
            card.find(".passport-box").show();
        }
        else{
            card.find(".passport-box").hide();
        }
    });

});