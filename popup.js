$(document).ready(function(){

    $('.marker').on('click',function(e){
        e.stopPropagation();
        $('.popup').hide('fast')
        $(e.target).siblings('.popup').toggle('fast')
    })

    $('.popup').on('click',function(e){
        e.stopPropagation();
    })
    $('.close').on('click',function(e){
        $(e.target).closest('.popup').hide('fast')
    })
    $('.map').on('click',function(){
        $('.popup').hide('fast')
    })
})