// PLEASE BE AWARE!! I did this assignment with a group in my class.The comments found in this code are seperate from all other students. //

// this is rendering the page to be ready. 
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
    $("#hr1 .description").val(localStorage.getItem("hr1"))
    $("#hr2 .description").val(localStorage.getItem("hr2"))
    $("#hr3 .description").val(localStorage.getItem("hr3"))
    $("#hr4 .description").val(localStorage.getItem("hr4"))
    $("#hr5 .description").val(localStorage.getItem("hr5"))


    let currentHour = parseInt(moment().format("h"))

    $(".time-block").each(function () {

        let timeBlock = parseInt($(this).attr("id"))

            if(timeBlock === currentHour) {

                $(this).addClass("present")

            } else if (timeBlock > currentHour) {

                $(this).addClass("future")

            } else if (timeBlock < currentHour) {
                
                $(this).addClass("past")
            }

    })

})