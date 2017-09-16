define(['text!template/home/knowledgeGM/GMDocknowledgeTpl.html', '../../comment/getInfo', '../../comment/showInfo'], function(GMDocknowledgeTpl, getInfo, showInfo) {
    return function() {
        $('#browseInfo').remove();
        var $GMDocknowledgeTpl = $(GMDocknowledgeTpl);
        $('.main-content').append($GMDocknowledgeTpl);

        // 进入页面时的动画
        $GMDocknowledgeTpl.stop().animate({ 'left': '0' }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $GMDocknowledgeTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $('#browseInfo').remove();
                $('#showInfo').remove();
            })
        })

        // 注册信息刷新按钮
        .on('tap', '.getInfo', function() {
            var $this = $(this)
            getInfo($this);
        })

        // 注册信息列表点击事件
        .on('tap', '.info-list p', function() {
            showInfo();
        })
    }
})