$(document).ready(function(){

    $('.marker').on('click',function(e){
        e.stopPropagation();
        $('.popup').hide('fast')
        $(e.target).siblings('.popup').toggle('fast')
        $('.clickable').removeClass('active')
        $(this).closest('.clickable').addClass('active')
    })

    $('.popup').on('click',function(e){
        e.stopPropagation();
    })
    $('.close').on('click',function(e){
        $(e.target).closest('.popup').hide('fast')
        $('.clickable').removeClass('active')
    })
    $('.map').on('click',function(){
        $('.popup').hide('fast')
        $('.clickable').removeClass('active')
    })
})