define(['text!template/home/infoCenter/browseInfo/browseInfoTpl.html', '../../../comment/getInfo', '../../../comment/showInfo'], function(browseInfoTpl, getInfo, showInfo) {
    return function() {
        $('#browseInfo').remove();
        var $browseInfoTpl = $(browseInfoTpl);
        $('.main-content').append($browseInfoTpl);

        // 进入页面时的动画
        $browseInfoTpl.stop().animate({ 'left': '0' }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $browseInfoTpl.stop().animate({ 'left': '100%' }, 200, function() {
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