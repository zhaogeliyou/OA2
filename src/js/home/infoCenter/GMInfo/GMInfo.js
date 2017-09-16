define(['text!template/home/infoCenter/GMInfo/GMInfoTpl.html', '../../../comment/getInfo', './modifyInfo'], function(GMInfoTpl, getInfo, modifyInfo) {
    return function() {
        $('#GMInfo').remove();
        var $GMInfoTpl = $(GMInfoTpl);
        $('.main-content').append($GMInfoTpl);

        // 页面进入动画
        $GMInfoTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $GMInfoTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $GMInfoTpl.remove();
            })
        })

        // 注册信息刷新按钮
        .on('tap', '.getInfo', function() {
            var $this = $(this)
            getInfo($this);
        })

        // 注册信息列表点击事件
        .on('tap', '.info-list p', function() {
            var $this = $(this)
            modifyInfo($this);
        })
    }
})