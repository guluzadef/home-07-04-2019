$(document).ready(function(e){
    $(".mens").click(function(e){
        // console.log("asdasdasd")
        $.ajax({
            url:"men.html",
            method:"GET",
            success:function(data){
                $(".new_data").html(data)
            }

            
        })
    })
    $(".homec").click(function(e){
        // console.log("asdasdasd")
        $.ajax({
            url:"new.html",
            method:"GET",
            success:function(data){
                $(".new_data").html(data)
            }

            
        })
    })
    $(".womens").click(function(e){
        // console.log("asdasdasd")
        $.ajax({
            url:"women.html",
            method:"GET",
            success:function(data){
                console.log(data);
                $(".new_data").html(data)
            }

            
        })
    })
    $(".babys").click(function(e){
        // console.log("asdasdasd")
        $.ajax({
            url:"baby.html",
            method:"GET",
            success:function(data){
                $(".new_data").html(data)
            }

            
        })
    })
    $(".sports").click(function(e){
        // console.log("asdasdasd")
        $.ajax({
            url:"sport.html",
            method:"GET",
            success:function(data){
                $(".new_data").html(data)
            }

            
        })
    })
    $(document).on("click",".sport_button_women",function(e){
        // console.log("asdasdasd")
        $.ajax({
            url:"sport_women.html",
            method:"GET",
            success:function(data){
                $(".new_data").html(data)
            }

            
        })
    })
    $(document).on("click",".sport_button_men",function(e){
        // console.log("asdasdasd")
        $.ajax({
            url:"sport_men.html",
            method:"GET",
            success:function(data){
                $(".new_data").html(data)
            }

            
        })
    })

    $(".contacts").click(function(e){
        // console.log("asdasdasd")
        $.ajax({
            url:"contactus.html",
            method:"GET",
            success:function(data){
                $(".new_data").html(data)
            }

            
        })
    })
})
