define(['text!template/home/shortcut/shortcutTpl.html'], function(shortcutTpl) {
    return function() {
        $('#shortcut').remove();
        var $shortcutTpl = $(shortcutTpl);
        $('.main-content').append($shortcutTpl);

        // 页面进入动画
        $shortcutTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮
        .on('tap', '.close', function() {
            $shortcutTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $shortcutTpl.remove();
            })
        })
    }
})