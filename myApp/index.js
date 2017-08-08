/**
 * Created by Wangsl on 2017/8/7 0007.
 */
$(function(){
    var client_height = document.documentElement.clientHeight;
    var $content = $('.app_content');
    $('.loading').css('height',client_height);
    $('.loading').find('img').css('top',client_height/2);
    var data = {};
    data.img_Car = ['images/c_1.jpg','images/c_2.jpg','images/c_3.jpg'];
    data.img_xs = ['images/xs_1.jpg','images/xs_2.jpg','images/xs_3.jpg'];
    data.date = new Date(new Date().getTime() + 62 * 1000);  //当前时间的未来62秒
    data.goods = [
        {
            id:'1',
            matname:'佐冷馋 | 冷吃兔（中辣、赠武装盒）200g 四川名吃',
            sales_volume:73,
            saleprice:39.00,
            img:'images/g_4.jpg'
        },
        {
            id:'2',
            matname:'食巧言味 | 秘制猪肉板筋肉扒潮汕特产（原味小辣125g）',
            sales_volume:149,
            saleprice:36.00,
            img:'images/g_3.jpg'
        },
        {
            id:'3',
            matname:'天益蜜源 | 长白山椴树森林原酿雪蜜500g',
            sales_volume:45,
            saleprice:48.00,
            img:'images/g_2.jpg'
        },
        {
            id:'4',
            matname:'点儿优品 | 秘制脆香萝卜干  480克（2瓶装） 四川特色',
            sales_volume:56,
            saleprice:38.00,
            img:'images/g_1.jpg'
        }
    ];
    var CarObj = new Carousel('#myCarousel',3000,data.img_Car);
    CarObj.cyc();
    var  tA =  new countDown(data.date,'.index_list_p');


    /**
     * 动态添加商品列表
     */
    for(var i=0;i<data.goods.length;i++){
        var html = ' <li>'+
            '<img  src='+data.goods[i].img+'>'+
            '<div class="fontdouble" >'+data.goods[i].matname+'</div>'+
            '<p>包邮</p>'+
            '<p>已售&nbsp;'+data.goods[i].sales_volume+'</p>'+
            '<p>¥'+data.goods[i].saleprice+'</p>'+
            '</li>'
        $('.index_ul').append(html);
    }

    /**
     * 导航控制
     */
    var $nav_aObj = $('.index_head a');
    var xstm = $('#xstm').offset().top - 44;
    var xltm = $('#xltm').offset().top - 44;
    var jsrm = $('#jsrm').offset().top - 44;

    $nav_aObj.click(function(){
        var text = $(this).text().replace(/\s/g,'');
        $(this).addClass('black_font').siblings().removeClass('black_font');
        $(this).siblings().find('p').removeClass('index_choise_p');
        $(this).find('p').addClass('index_choise_p');

        switch (text){
            case '限量特卖':
                $content.scrollTop(xltm);
                break;
            case '限时特卖':
                $content.scrollTop(xstm);
                break;
            case '集市热卖':
                $content.scrollTop(jsrm);
                break;
            default:
        }
    })

    /**
     * 监听滑动
     */
    $content.scroll(function(e){
        if($(this).scrollTop()<xltm){
            $nav_aObj.eq(0).addClass('black_font').siblings().removeClass('black_font');
            $nav_aObj.eq(0).siblings().find('p').removeClass('index_choise_p');
            $nav_aObj.eq(0).find('p').addClass('index_choise_p');
        }else if($(this).scrollTop()>xltm && $(this).scrollTop() <jsrm){
            $nav_aObj.eq(1).addClass('black_font').siblings().removeClass('black_font');
            $nav_aObj.eq(1).siblings().find('p').removeClass('index_choise_p');
            $nav_aObj.eq(1).find('p').addClass('index_choise_p');
        }
        else if($(this).scrollTop()>jsrm){
            $nav_aObj.eq(2).addClass('black_font').siblings().removeClass('black_font');
            $nav_aObj.eq(2).siblings().find('p').removeClass('index_choise_p');
            $nav_aObj.eq(2).find('p').addClass('index_choise_p');
        }
    })

    //获取地址
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == 0){
            $('.gps_div').text(r.address.city)
            $('.loading').hide();
        }else{
            $('.gps_div').text('请重试')
            $('.loading').hide();
            alert('定位失败！')
        }
    })
})






