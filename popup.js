$(document).ready(function(){

    $('.lightning').on('click',function(e){
        e.stopPropagation();
        $(e.target).siblings('.popup').show()
    })

    $('.popup').on('click',function(e){
        e.stopPropagation();
    })
    $('.close').on('click',function(e){
        $(e.target).closest('.popup').hide()
    })
    $('.map').on('click',function(){
        $('.popup').hide()
    })
})