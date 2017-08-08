/**
 * Created by Wangsl on 2017/8/8 0008.
 */

$(function(){
    var data = {};
    data.img_Car = ['images/c_4.jpg','images/c_5.jpg','images/c_6.jpg'];
    data.img_Slide = [
        {
            name:'徘徊在北纬24°到26°的广西味。',
            img:'images/c_1.jpg'
        },
        {
            name:'令狐冲烤鱼，源自江湖的快意烧烤。',
            img:'images/c_2.jpg'
        },
        {
            name:'机场边的高端私房菜，让你飞起来',
            img:'images/c_3.jpg'
        },
        {
            name:'温润如玉的骨之味火锅',
            img:'images/c_4.jpg'
        },
        {
            name:'海鼎荟海鲜姿造，吃货们的天堂！',
            img:'images/c_5.jpg'
        },
        {
            name:'九宫格特色的成都火锅',
            img:'images/c_6.jpg'
        }
    ];
    data.img_Main = [
        {
            type:'A',
            name:'徘徊在北纬24°到26°的广西味。',
            img:'images/z_1.jpg',
            distance:'600m',
            businessname:'桂小厨'
        },
        {
            type:'A',
            name:'徒手料理，时尚好玩。',
            img:'images/z_2.jpg',
            distance:'950m',
            businessname:' 厦门动手吧'
        },
        {
            type:'A',
            name:'最原始最狂野的海鲜饕餮',
            img:'images/z_3.jpg',
            distance:'2km',
            businessname:'船奇蒸汽海鲜'
        },
        {
            type:'B',
            name:'厦门老牌港式茶楼',
            img:'images/z_4.jpg',
            distance:'2km',
            businessname:'潮福城'
        },
        {
            type:'B',
            name:'很香港的港式餐厅',
            img:'images/z_5.jpg',
            distance:'6km',
            businessname:'香港仔茶餐厅'
        },
        {
            type:'B',
            name:'高逼格的粤菜餐厅',
            img:'images/z_6.jpg',
            distance:'68m',
            businessname:'颂（粤菜）'
        }
    ];

    var CarObj = new Carousel('#myCarousel',3000,data.img_Car);
    CarObj.cyc();


    var client_height = document.documentElement.clientHeight;
    $('.market_slide').css('height',client_height*0.31);
    $('.market_ul').css('width',(data.img_Slide.length*60)+'%');

    /**
     * 动态添加品牌推荐
     */
    for(var i=0;i<data.img_Slide.length;i++){
        var html = '<li style="height: '+client_height*0.29+'">'+
            '<img   src='+data.img_Slide[i].img+'>'+
            '<p>'+data.img_Slide[i].name+'</p>'+
            '</li>'
        $('.market_ul').append(html);
    }

    /**
     * 动态添加品牌攻略
     */
    var type_A = '<div>'+
        '<img width="10%" class="index_img3" src="images/z_a2.PNG" />'+
        '<p>厦门吃喝玩乐热门排行榜</p>'

    var type_B = '<div>'+
        '<img width="10%" class="index_img3" src="images/z_a1.PNG" />'+
        '<p>厦门港式茶餐厅大盘点</p>'
    for(var j=0;j<data.img_Main.length;j++){

        if(data.img_Main[j].type=='A'){
            type_A += '<div class="market_list_conten" >'+
                '<img src="'+data.img_Main[j].img+'">'+
                '<img src="images/img-shadow.png" >'+
                '<p>'+data.img_Main[j].name+'</p>'+
                '<p class="index_p2" >约'+data.img_Main[j].distance+'&nbsp;<span style="font-size:1px!important;">·</span>&nbsp;'+data.img_Main[j].businessname+'</p>'+
                '</div>'
        }else{
            type_B += '<div class="market_list_conten" >'+
                '<img src="'+data.img_Main[j].img+'">'+
                '<img src="images/img-shadow.png" >'+
                '<p>'+data.img_Main[j].name+'</p>'+
                '<p class="index_p2" >约'+data.img_Main[j].distance+'&nbsp;<span style="font-size:1px!important;">·</span>&nbsp;'+data.img_Main[j].businessname+'</p>'+
                '</div>'
        }
    }
    type_A += '</div>';
    type_B += '</div>';
    var html = type_A+type_B;
    $('.market_list').append(html)
})
