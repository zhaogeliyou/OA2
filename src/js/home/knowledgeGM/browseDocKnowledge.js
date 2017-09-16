define(['text!template/home/knowledgeGM/browseDocknowledgeTpl.html', '../../comment/getInfo', '../../comment/showInfo'], function(browseDocknowledgeTpl, getInfo, showInfo) {
    return function() {
        $('#browseInfo').remove();
        var $browseDocknowledgeTpl = $(browseDocknowledgeTpl);
        $('.main-content').append($browseDocknowledgeTpl);

        // 进入页面时的动画
        $browseDocknowledgeTpl.stop().animate({ 'left': '0' }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $browseDocknowledgeTpl.stop().animate({ 'left': '100%' }, 200, function() {
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