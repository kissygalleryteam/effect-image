KISSY.add("kg/effect-image/1.0.0/lib/main",["node","base","event"],function(o,e,i,n){function t(e){this.init(o.merge(m,e))}var a=e("node").all,s=(e("base"),e("event")),m={hook:".J_KG_Pic_item",hookInfo:".J_KG_Pic_info",showTime:50,hideTime:50};o.augment(t,s.Target,{init:function(o){var e=this;o.animationTimer=null,a(o.hook).on("mouseenter",function(i){var n=a(i.currentTarget);e._show(o,e,n)}),a(o.hook).on("mouseleave",function(i){var n=a(i.currentTarget);e._hide(o,e,n)})},_show:function(e,i,n){i.fire("showStart"),o.Features.isTransitionSupported()?(n.one(e.hookInfo).removeClass("imgHide").addClass("imgShow"),setTimeout(function(){n.one(e.hookInfo).css("bottom","0"),i.fire("showEnd")},e.showTime)):(e.animationTimer&&e.animationTimer.stop(),n.one(e.hookInfo).animate({bottom:"0px"},{duration:e.showTime/1e3,easing:"easeNone"}),setTimeout(function(){i.fire("showEnd")},e.showTime))},_hide:function(e,i,n){i.fire("hideStart"),o.Features.isTransitionSupported()?(n.one(e.hookInfo).removeClass("imgShow").addClass("imgHide"),setTimeout(function(){n.one(e.hookInfo).css("bottom","-30px"),i.fire("showEnd")},e.showTime)):(e.animationTimer&&e.animationTimer.stop(),n.one(e.hookInfo).animate({bottom:"-30px"},{duration:e.hideTime/1e3,easing:"easeNone"}),setTimeout(function(){i.fire("hideEnd")},e.hideTime))}})});