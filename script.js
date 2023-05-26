$(document).ready(function () {
    $('.sideviddesc').hide();
    $('#sidesec').mouseenter(function(){
        $('#sidesec').css({"background-color": "rgb(0,0,0,0.7)", "width": "35%", "transition": "1.5s" });
        $('.sidevid').css({ "width": "350px", "height": "175px", "transition": "1.7s" });
        $('.sideviddesc').show("slow");
    });
    $('#sidesec').mouseleave(function(){
        $('#sidesec').css({"background-color": "transparent", "width": "25%" });
        $('.sidevid').css({ "width": "250px", "height": "125px"});
        $('.sideviddesc').hide("slow");
    });
    $(".showmore").click(function() {
        if($("#descbody").css("height") == "30px")
        {
            $("#descbody").css({"height": "90px", "width": " 95%"});
            $(".showmore").text("show less");
        } else {
            $("#descbody").css({"height": "30px", "width": "350"});  
            $(".showmore").text(" ... show more");
        }
    });
})
