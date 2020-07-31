// PLEASE BE AWARE!! I did this assignment with a group in my class.The comments found in this code are seperate from all other students. //S

// this is rendering the page to be ready. 
$(document).ready(function(){

    // this is the clickable event function that is letting the HTML know that when you click on this button it will run this funtion. --- F(x) = x ---
    $(".saveBtn").click(function () {

        // this is calling value a Var... and then using JQ to grab $(this) which means when this passes through it do this action === is doing action to sib child (description) and then getting the value of it (val)
        let value = $(this).siblings(".description").val()

        // test purposes to see if our code is working. 
        console.log(value)

        // this is another var TIME here and using JQ to grab $(this)**. however this time we are grabbing the Parent and using "attribute tag" and calling for "id" --> the parent tag. 
        let time = $(this).parents().attr("id")
        // We will use --> $(this )<-- again-- DONE  --

        // HELPHELPthis is the local storage and we are setting ??all items?? in this and finding the time & value of each...??  HELPHELP
        localStorage.setItem(time, value)
    })

    // this is the local storage info that it will know what to storage and how to store it appropriately based on its info listen within. 
    $("#hr9 .description").val(localStorage.getItem("hr9"))
    $("#hr10 .description").val(localStorage.getItem("hr10"))
    $("#hr11 .description").val(localStorage.getItem("hr11"))
    $("#hr12 .description").val(localStorage.getItem("hr12"))
    $("#hr1 .description").val(localStorage.getItem("hr1"))
    $("#hr2 .description").val(localStorage.getItem("hr2"))
    $("#hr3 .description").val(localStorage.getItem("hr3"))
    $("#hr4 .description").val(localStorage.getItem("hr4"))
    $("#hr5 .description").val(localStorage.getItem("hr5"))


    // then we need to set this let to a Var that we can define later for comparsent purposes? // the lower case h means that it will call time in regular time as H will do military time. This is based on the rules of which "moment" you use? 
    let currentHour = parseInt(moment().format("h"))

    // this is our time block arguments. This will let us know if we should use Present / Future / Past. 
    // ** F(x) = X ** //
    $(".time-block").each(function () {

        // we set this let var for timeBlock and we use $(this) again to call the attr of "id" and turn that into an Int by assignment it = parseInt.
        let timeBlock = parseInt($(this).attr("id"))

            // this is the start our agrument!//
            if(timeBlock == currentHour) {

                $(this).addClass("present")

            } else if (timeBlock > currentHour) {

                $(this).addClass("future")

            } else {
                
                $(this).addClass("past")
            }
            // this is the end of our argument \ the end of our function! //
    })

})