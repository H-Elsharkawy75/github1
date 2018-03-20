$(document).ready(function()
   { 
    // color option--tool box
    $(".gear-check").click(function()
     {
    
    $(".message-option").fadeToggle();
    
    });
// hidden
        $(".gear-check").click(function()
     {
    
    $(this).hide();
    
    });

// show and closse
        $(".message-option .close").click(function()
     {
    
    $(".message-option").fadeToggle();
    
    });
    // show
            $(".message-option .close").click(function()
     {
    
    $(".gear-check").fadeToggle();
    
    });

});