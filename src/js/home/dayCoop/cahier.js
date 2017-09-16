define(['text!template/home/dayCoop/cahierTpl.html', './cahierContent'], function(cahierTpl, cahierContent) {
    return function() {
        $('#cahier').remove();
        var $cahierTpl = $(cahierTpl);
        $('.main-content').append($cahierTpl)

        // 页面进入动画
        $cahierTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $cahierTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $cahierTpl.remove()
            })
        })

        // 注册主题点击事件
        .on('tap', '.theme', function() {
            var post = $(this).parent();
            cahierContent(post)
        })

        // 注册发布按钮事件
        .on('tap', '.publish', function() {
            publishPost()
        })

    }
})