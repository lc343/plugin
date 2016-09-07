/**
 * Created by lc on 2016/9/7.
 */
var n =0, count;
$(document).ready(function(){
     count=$("#list a").length;
    $("#list a:not(:first-child)").hide();
    $("#container li").click(function() {
        var i = $(this).text()-1;//获取Li元素内的值，即1，2，3，4
         n = i;
        if (i >= count) return;
        $("#info").html($("#list a").eq(i).find("img").attr('alt'));
        $("#info").unbind().click(function(){window.open($("#list a").eq(i).attr('href'), "_blank")});
        $("#list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(500);
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });

    t=setInterval("showAuto()", 1000);
    $("#container").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 1000);});
})

function showAuto()
{
    if(n>=count-1){
        return 0;
    }
    else{
        ++n;
    }
    $("#container li").eq(n).trigger('click');
}
