$(function() {

$('.background__item').on('click', function () {
    document.getElementById("content").style.backgroundColor =$(this).attr('value');

    if(!($(this).hasClass("checkmark"))){
        $('.background__item').removeClass("checkmark");
        $(this).addClass('checkmark');
    }
    else {
        $(this).removeClass('checkmark');
    }

});

$('.styling__item').on('click', function () {
    if ($(this).attr('value')!="bold"){
        document.getElementById("text").style.fontStyle =$(this).attr('value');
        document.getElementById("text").style.fontWeight ='normal'
        }
    else
        document.getElementById("text").style.fontWeight =$(this).attr('value');

    if(!($(this).hasClass("styling-active"))){
        $('.styling__item').removeClass("styling-active");
        $(this).addClass('styling-active');
    }
    else {
        $(this).removeClass('styling-active');
    }
    $(".font_styling").html($(this).attr('value'));

});
$('.typeface__item').on('click', function () {
    document.getElementById("text").style.fontFamily =$(this).attr('value');

    if(!($(this).hasClass("button-active"))){
        $('.typeface__item').removeClass("button-active");
        $(this).addClass('button-active');
    }
    else {
        $(this).removeClass('button-active');
    }
    $(".font_family").html($(this).attr('value'));
});
});
