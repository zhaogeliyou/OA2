define(['text!template/home/personGM/postContentTpl.html'], function(postContentTpl) {
    return function(post) {
        $('#postContent').remove();
        var $postContentTpl = $(postContentTpl);
        $('.main-content').append($postContentTpl)
        $postContentTpl.find('input').attr('readonly', 'readonly')

        // 页面进入动画
        $postContentTpl.stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $postContentTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $postContentTpl.remove()
            })
        })

        // 注册回复按钮上事件
        .on('tap', '.answer', function() {
            var content = $('textarea').val();
            if (content.trim()) {
                $('.content-container').append('<div class="mui-card">' +
                    '<div class="mui-card-header">李萌 发表于 2017/09/09</div>' +
                    '<div class="mui-card-content">' + content + '</div>' +
                    '</div>')

                $('textarea').val('')
            }
        })

        // 注册删除按钮事件
        .on('tap', '.delete', function() {
            var $this = $(this)
            var btnArray = ['是', '否'];
            mui.confirm('确定删除该计划吗？', '删除后不能恢复', btnArray, function(e) {
                if (e.index == 0) {
                    alert('确认删除操作')
                    post.remove()
                    $('#postContent').remove();
                } else {
                    alert('放弃删除')
                }
            })
            $('.mui-popup-backdrop').css('z-index', 2000)
        })
    }
})