define(['text!template/comment/showInfoTpl.html'], function(showInfoTpl) {
    return function() {
        $('#showInfo').remove();
        var $showInfoTpl = $(showInfoTpl)
        $('.main-content').append($showInfoTpl)

        // 页面进入动画
        $showInfoTpl.stop().animate({ 'top': '0%' }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $showInfoTpl.stop().animate({ 'top': '100%' }, 200)
        })
    }
})