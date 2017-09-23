define(['text!template/home/dayCoop/cahierTpl.html', './cahierContent', './addCahier'], function(cahierTpl, cahierContent, addCahier) {
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

        // 注册增加按钮事件
        .on('tap', '.add', function() {
            addCahier()
        })

        // 注册删除按钮事件
        .on('tap', '.delete', function() {
            var $this = $(this)
            var btnArray = ['是', '否'];
            mui.confirm('确定删除该计划吗？', '删除后不能恢复', btnArray, function(e) {
                if (e.index == 0) {
                    alert('确认删除操作')
                    $this.parent().remove()
                } else {
                    alert('放弃删除')
                }
            })
        })

    }
})