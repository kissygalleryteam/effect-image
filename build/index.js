KISSY.add('kg/effect-image/1.0.2/index',["node","base","event","./index.css"],function(S ,require, exports, module) {
 
var EMPTY = '';
var $ = require('node').all;
var Base = require('base');

var Event = require('event');

require('./index.css');

var baseConf = {
    hook: '.J_KG_Pic_item',
    hookInfo: '.J_KG_Pic_info',
    showTime: 50,
    hideTime: 50
}

function EffectImage(conf){
    this.init(S.merge(baseConf,conf));
}

S.augment(EffectImage, Event.Target, {

    init: function(conf){
        var self = this;

        conf.animationTimer = null;

        $(conf.hook).on('mouseenter', function(e){
            var $e = $(e.currentTarget);
            self._show(conf, self, $e);
        });
        $(conf.hook).on('mouseleave', function(e){
            var $e = $(e.currentTarget);
            self._hide(conf, self, $e);
        });
    },
    _show: function(conf, self, $e){
        self.fire('showStart');
        if(S.Features.isTransitionSupported()){
            $e.one(conf.hookInfo).removeClass('imgHide').addClass('imgShow');
            setTimeout(function(){
                $e.one(conf.hookInfo).css('bottom','0');
                self.fire('showEnd');
            },conf.showTime);
        }else{
            conf.animationTimer && conf.animationTimer.stop();
            $e.one(conf.hookInfo).animate({
                bottom : '0px'
            },{
                duration : conf.showTime/1000,
                easing : 'easeNone'
            });
            setTimeout(function(){
                self.fire('showEnd');
            },conf.showTime);
        }
    },
    _hide: function(conf, self, $e){
        self.fire('hideStart');
        if(S.Features.isTransitionSupported()){
            $e.one(conf.hookInfo).removeClass('imgShow').addClass('imgHide');
            setTimeout(function(){
                $e.one(conf.hookInfo).css('bottom','-30px');
                self.fire('hideEnd');
            },conf.showTime);
        }else{
            conf.animationTimer && conf.animationTimer.stop();
            $e.one(conf.hookInfo).animate({
                bottom : '-30px'
            },{
                duration : conf.hideTime/1000,
                easing : 'easeNone'
            });
            setTimeout(function(){
                self.fire('hideEnd');
            },conf.hideTime);
        }
    }
});

module.exports = EffectImage;
});