/**
 * Created by Wangsl on 2017/8/7 0007.
 */
$(function(){
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
        $('.index_ul').append(html)
    }

})






