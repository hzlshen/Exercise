/**
 * Created by Administrator on 2016/12/11.
 */
$(function () {
    var index=window.location.href.split("/").length-1
    var href=window.location.href.split("/")[index].substr(0.4);
    if(href>0){
    $(".list li a[href^='"+href+"']").addClass('on');
    }else{
        //服务器断如果不添加判断语句就不会给首页添加on属性
        $(".list li a[href^='index']").addClass('on');
    }
})