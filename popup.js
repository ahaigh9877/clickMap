$(document).ready(function(){
    $('.clickable').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.popup',this).hide('fast');
        } else {
            hideOtherPopups();
            $(this).addClass('active');
            $('.popup',this).show('fast');
        }
    });

    $('.close').on('click',function(e){
        e.stopPropagation();
        $(this).closest('.popup').hide('fast');
        $('.clickable').removeClass('active');
    });

    $('.inner').on('click', e => e.stopPropagation());

    $('.map').on('click', () => hideOtherPopups());
});

function hideOtherPopups(){
    $('.popup').hide('fast');
    $('.clickable').removeClass('active');
}