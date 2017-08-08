/**
 * Created by Wangsl on 2017/8/8 0008.
 */

/**
 * 倒计时
 */
var countDown = function(date,item){

    if(!date){
        alert('缺少目标时间！');
        return;
    }

    var msec = (new Date(date).getTime() - new Date().getTime())/1000,
        day,hour,minute,second;

    //用于初始化
    day = parseInt(msec / 24 / 3600);
    hour = parseInt((msec/3600)%24);
    minute = parseInt((msec/60)%60);
    second = parseInt(msec%60);

    var str = day ? day+'天' :
        (hour ? hour+'小时' :
            (minute ? minute +'分钟' : second + '秒'));
    $('#p_time').text(str);

    var set_Id = setInterval(function(){
        msec --;
        day = parseInt(msec / 24 / 3600);
        hour = parseInt((msec/3600)%24);
        minute = parseInt((msec/60)%60);
        second = parseInt(msec%60);

       var str = day ? day+'天' :
           (hour ? hour+'小时' :
               (minute ? minute +'分钟' : second + '秒'));
        $(item).text(str)

        if(msec<=0){
            clearInterval(set_Id)
            $(item).text('已结束')
            $('.index_img5').show();
        }
    },1000);
};

/**
 * 页面跳转
 */
var goUrl = function(index,url){
    if(!url){
        alert('路径有误，跳转失败！')
        return;
    }
    self.location = url;
}




