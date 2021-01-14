
$(document).ready(function(){

    $(".saveBtn").click(function () {

        let value = $(this).siblings(".description").val()
        console.log(value)

        let time = $(this).parents().attr("id")

        localStorage.setItem(time, value)
    })

    $("#hr9 .description").val(localStorage.getItem("hr9"))
    $("#hr10 .description").val(localStorage.getItem("hr10"))
    $("#hr11 .description").val(localStorage.getItem("hr11"))
    $("#hr12 .description").val(localStorage.getItem("hr12"))
    $("#hr13 .description").val(localStorage.getItem("hr13"))
    $("#hr14 .description").val(localStorage.getItem("hr14"))
    $("#hr15 .description").val(localStorage.getItem("hr15"))
    $("#hr16 .description").val(localStorage.getItem("hr16"))
    $("#hr17 .description").val(localStorage.getItem("hr17"))

    function hourUpdater() {

        var currentHour = moment().hours();

        let timeBlock = parseInt($(this).attr("id"))

            if(timeBlock < currentHour) {
                $(this).addClass("past")
            } else if (timeBlock === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
    }
    
    hourUpdater();

})