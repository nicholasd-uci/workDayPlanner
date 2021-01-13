// PLEASE BE AWARE!! I did this assignment with a group in my class.The comments found in this code are separate from all other students. //

// this is rendering the page to be ready. 
$(document).ready(function(){

    // this is the clickable event function that is letting the HTML know that when you click on this button it will run this function. --- F(x) = x ---
    $(".saveBtn").click(function () {

        // this is calling value a Var... and then using JQ to grab $(this) which means when this passes through it do this action === is doing action to sib child (description) and then getting the value of it (val)
        let value = $(this).siblings(".description").val()

        // test purposes to see if our code is working. 
        console.log(value)

        // this is another var TIME here and using JQ to grab $(this)**. however this time we are grabbing the Parent and using "attribute tag" and calling for "id" --> the parent tag. 
        let time = $(this).parents().attr("id")
        // We will use --> $(this )<-- again-- DONE  --

        // this is the local storage and we are setting ??all items?? in this and finding the time & value of each.  -- Local Storage works like "obj". the Key's are (Time & value = the actual HTML)
        localStorage.setItem(time, value)
    })

    // this is the local storage info that it will know what to storage and how to store it appropriately based on its info listen within. $() --> this is JQ  .val = set value of ID from the local storage

    // 
    $("#hr9 .description").val(localStorage.getItem("hr9"))
    $("#hr10 .description").val(localStorage.getItem("hr10"))
    $("#hr11 .description").val(localStorage.getItem("hr11"))
    $("#hr12 .description").val(localStorage.getItem("hr12"))
    $("#hr13 .description").val(localStorage.getItem("hr13"))
    $("#hr14 .description").val(localStorage.getItem("hr14"))
    $("#hr15 .description").val(localStorage.getItem("hr15"))
    $("#hr16 .description").val(localStorage.getItem("hr16"))
    $("#hr17 .description").val(localStorage.getItem("hr17"))


    // then we need to set this let to a Var that we can define later for compartment purposes? // the lower case h means that it will call time in regular time as H will do military time. This is based on the rules of which "moment" you use? 
    
    // this is our time block arguments. This will let us know if we should use Present / Future / Past. 
    // ** F(x) = X ** //
    function hourUpdater() {

        
        var currentHour = moment().hours();

        // we set this let var for timeBlock and we use $(this) again to call the attr of "id" and turn that into an Int by assignment it = parseInt.
        let timeBlock = parseInt($(this).attr("id"))

            // this is the start our agrument!//
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
            // this is the end of our argument \ the end of our function! //
    }
    hourUpdater();

})