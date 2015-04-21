## 综述

EffectImage。

## 初始化组件

  S.use('kg/effect-image/1.0.0/index', function (S, EffectImage) {
    var effect-image = new EffectImage({
      hook: '.J_KG_Pic_item',
      hookInfo: '.J_KG_Pic_info',
      showTime: 50,
      hideTime: 50
    });

    effectPaginations.on('showStart',function(){
        console.log('showStart');
    });

    effectPaginations.on('showEnd',function(){
        console.log('showEnd');
    });

    effectPaginations.on('hideStart',function(){
        console.log('hideStart');
    });

    effectPaginations.on('hideEnd',function(){
        console.log('hideEnd');
    });
  })

## API说明

* hook 整体容器
* hookInfo 图片描述容器
* showTime 显示时间，以毫秒为单位
* hideTIme 隐藏时间，以毫秒为单位
