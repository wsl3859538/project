/**
 * Created by Wangsl on 2017/8/7 0007.
 */
$(function(){
    var data = {};

    data.img_Car = ['images/c_1.jpg','images/c_2.jpg','images/c_3.jpg'];
    data.img_xs = ['images/xs_1.jpg','images/xs_2.jpg','images/xs_3.jpg'];
    data.date = new Date(new Date().getTime() + 62 * 1000);  //当前时间的未来62秒

    var CarObj = new Carousel('#myCarousel',3000,data.img_Car);
    CarObj.cyc();
    var  tA =  new countDown(data.date,'.index_list_p');

})






