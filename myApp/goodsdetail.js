/**
 * Created by Wangsl on 2017-06-27.
 */

/**
 * 后退
 */
var back = () =>{
    window.history.go(-1)
};

/**
 * 加入购物车
 */
var addShoppingCar = () => {
    alertWindow('A','提示','功能暂留')
    goShoppingCar()
    return
};

/**
 * 跳转购物车
 */
var goShoppingCar = () =>{
    window.location.href = '../shoppingcar/shoppingcar.html'
};

//监听input输入字数
var listenText = (dom,e) =>{
    e.stopPropagation();
    if($(dom).val()<1){
        alertWindow('A','提示','商品数需大于1')
        return;
    }
};

$(window).on('load',function(){

    var height = $('.bar_content').height()+44;  //44为margin zepto.js没outerheight方法
    var str = $('#detail-div').offset().top
    $('#detail-div').css('min-height',height-str);


    /**
     * 弹出框规格区域高度设置
     */
    var gg_height = $('.foot-specifications').height();
    console.log(gg_height)
    if(gg_height>250){
        $('.foot-specifications').css('height',250)
    }

    /**
     * 弹出框
     */
    var $iosActionsheet = $('#iosActionsheet');
    var $iosMask = $('#iosMask');
    function hideActionSheet() {
        $iosActionsheet.removeClass('weui-actionsheet_toggle');
        $iosMask.fadeOut(200);
    }
    $('#iosActionsheetCancel').on('click', hideActionSheet);

    $("#showIOSActionSheet").on("click", function(){
        $iosActionsheet.addClass('weui-actionsheet_toggle');
        $iosMask.fadeIn(200);
    });

    /**
     * 商品增加和减少
     */
    $('.reduce').click(function(){
        var $this = $(this);
        var toNum = $this.next().val();
        toNum --;
        if(toNum == 1){
            $this.css('background','#eee');
        }else if(toNum < 1){
            return
        }
        $this.next().val(toNum);
    })

    $('.add').click(function(){
        var $this = $(this);
        var toNum = $this.prev().val(); //当前数量
        toNum ++;
        if(toNum > 1){
            $this.prev().prev().css('background','#d9d9d9');
        }
        $this.prev().val(toNum);
    })

    /**
     * 规格选择
     */
    $('.foot-flexul li').click(function(){
        $(this).addClass('foot-choist-specification').siblings().removeClass('foot-choist-specification')
    })

});

