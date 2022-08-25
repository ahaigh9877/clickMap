$(document).ready(function(){

    $('.marker').on('click',function(e){
        // e.stopPropagation();
        const thisPopup = $(e.target).siblings('.popup')
        $('.popup').not(thisPopup).hide('fast')
        thisPopup.toggle('fast')
        $('.clickable').removeClass('active')
        $(this).closest('.clickable').addClass('active')
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