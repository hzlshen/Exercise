/**
 * Created by Administrator on 2016/12/11.
 */
$(function () {
    $('.nav .list li').hover(function () {
        // $(this).find('.down').stop().slideDown({duration:1000,easing:'easeOutBounce'});
        $(this).find('.down').stop().slideDown();
    }, function () {
        // $(this).find('.down').stop().slideUp({duration:1000,easing:'easeOutBounce'});
        $(this).find('.down').stop().slideUp();
    })

})