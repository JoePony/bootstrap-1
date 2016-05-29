define(['jquery'], function($) {
    function pageScrollTo(ele, optionsArg) { //滚动模块
        this.ele = ele;
        this.options = $.extend({}, this.OptionsDefault, optionsArg); //参数设置，如果没有实参，则用默认参数
        this.OptionsDefault = {    //默认参数
            dest: 0,
            speed: 300
        }
        this.root = $(window);
        this.eleScroll = $('html,body');
        this.ele.on('click', $.proxy(this._scroll, this)); //让this指向pageScrollTo
        this.root.on('scroll', $.proxy(this._fade, this));
        $($.proxy(this._fade, this));  //设置刷新时也执行
    }
    pageScrollTo.prototype._fade = function() { //图标隐藏与显示函数
        var _ele = this.ele;
        if (this.root.scrollTop() > 100) { //滚动超过100px就显示
            _ele.fadeIn(200);
        } else {
            _ele.fadeOut(200);
        }
    }
    pageScrollTo.prototype._scroll = function() { //滚动函数
        var _eleScroll = this.eleScroll,
            _options = this.options;
        // if (this.root.scrollTop() != this.options.dest) {  
            if (!_eleScroll.is(':animated')) {  //滚动过程中再重复执行
                _eleScroll.animate({ scrollTop: _options.dest }, _options.speed);
            }
        // }
    }
    return pageScrollTo; //返回模块
})
