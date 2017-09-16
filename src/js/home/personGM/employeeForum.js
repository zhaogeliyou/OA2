define(['text!template/home/personGM/employeeForumTpl.html', './postContent', './publishPost'], function(employeeForumTpl, postContent, publishPost) {
    return function() {
        $('#employeeForum').remove();
        var $employeeForumTpl = $(employeeForumTpl);
        $('.main-content').append($employeeForumTpl)

        // 页面进入动画
        $employeeForumTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $employeeForumTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $employeeForumTpl.remove()
            })
        })

        // 注册主题点击事件
        .on('tap', '.theme', function() {
            var post = $(this).parent();
            postContent(post)
        })

        // 注册发布按钮事件
        .on('tap', '.publish', function() {
            publishPost()
        })

    }
})