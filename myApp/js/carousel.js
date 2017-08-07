/**
 * Created by Wangsl on 2017/8/7 0007.
 */

var Carousel = function(element,interval,data){
    this.$element = $(element);
    this.height = this.$element.data('height') || 150;
    this.interval = interval || 3000;
    this.$items = null;  //总图片数
    this.paused = null;  //暂停开关
    this.interval_index = null; //定时器标识
    this.clickR = true;

    this.$element.css('height',this.height);

    (function() {
        if(data){
            for(var i=0;i<data.length;i++){
                let html = '';
                i==0 ? html = '<img class="active" src='+data[i]+' alt=""/>':html = '<img src='+data[i]+' alt=""/>';
                $(element).append(html)
            }
        }

    })();
    var that = this;
    var touchStart,touchMove;  //触屏起始点和终点
    this.$element
        .on('touchstart', function(e){
            that.pause(e);
            touchStart = e.originalEvent.changedTouches[0].pageX;
        })
        .on('touchmove', function(e) {
            e.preventDefault();
            touchMove = e.originalEvent.touches[0].pageX;
            var res = parseInt(touchMove-touchStart);
            if(res>20){
                that.prev();
            }else if(res<-20){
                that.next();
            }
        })
        .on('touchend', $.proxy(this.cyc, this))
};

//获取当前图片下标
Carousel.prototype.getItemIndex = function(){
    this.$items = this.$element.find('img');
    return this.$items.index(this.$element.find('.active'));
};
//获取下一张图片下标
Carousel.prototype.getNextItem = function(direction){
    var activeIndex = this.getItemIndex();
    var x = direction == 'next' ? 1:-1;
    var nextIndex = (activeIndex+x)%this.$items.length;
    return this.$items.eq(nextIndex);
};
//移动相关操作
Carousel.prototype.sildeMove = function(type){
    this.clickR = false;
    var isCycling = this.interval;
    var $active = this.$element.find('.active');
    var $next = this.getNextItem(type);
    var direction = type == 'next'? 'left':'right';
    var that = this;
    //isCycling && this.pause();
    $next.addClass(type);
    $active.addClass(direction);
    $next[0].offsetWidth;
    $next.addClass(direction);
    $active.one('transitionend',function(){
        $active.removeClass([direction,'active'].join(' '));
        $next.removeClass([direction,type].join(' ')).addClass('active')
        that.clickR = true
    })

    //isCycling && this.cyc();

};
//下一张
Carousel.prototype.next = function(){
    if(!this.clickR)return;
    this.sildeMove('next');
};
//上一张
Carousel.prototype.prev = function(){
    if(!this.clickR)return;
    this.sildeMove('prev');
};
//循环
Carousel.prototype.cyc = function(e){
    e || (this.paused = false);
    this.interval &&
        !this.paused &&
    (this.interval_index = setInterval($.proxy(this.next,this),this.interval))
};
//暂停
Carousel.prototype.pause = function(e){
    e || (this.paused = true);
    this.interval_index = clearInterval(this.interval_index);
};



