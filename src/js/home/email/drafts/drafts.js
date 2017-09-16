define(['text!template/home/email/drafts/draftsTpl.html', '../../../comment/mailSearch/mailSerch', '../sendEmail'], function(draftsTpl, mailSerch, sendEmail) {
    return function() {
        $('#draftsTpl').remove();
        var $draftsTpl = $(draftsTpl);
        $('.main-content').append($draftsTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.getMailMenu').stop().animate({ 'left': '100%' }, 200);
        })

        // 页面进入动画
        $draftsTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮
        .on('tap', '.close', function() {
            $draftsTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $draftsTpl.remove();
            })
        })

        // 注册搜索按钮事件
        .on('tap', '.drafts-search', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        })

        // 注册邮件列表事件
        .on('tap', '.list', function() {
            sendEmail()
        })
    }
})