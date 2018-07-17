$(document).ready(function () {
    $(".btn-openModal").click(function () {

        $(".modal").css("display", "flex");
    });

    $(".close").click(function () {

        $(".modal").css("display", "none");
    });


    $(window).click(function (event) {

        var target = $(event.target);
        if ( target.is(".modal")  || target.is(".btnCloseBtn") ) {
            $(".modal").css("display", "none");
        }
    });    
  
});