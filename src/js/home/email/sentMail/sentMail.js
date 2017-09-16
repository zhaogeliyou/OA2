define(['text!template/home/email/sentMail/sentMailTpl.html', '../../../comment/mailSearch/mailSerch'], function(sentMailTpl, mailSerch) {
    return function() {
        $('#sentMailTpl').remove();
        var $sentMailTpl = $(sentMailTpl);
        $('.main-content').append($sentMailTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.getMailMenu').stop().animate({ 'left': '100%' }, 200);
        })

        // 页面进入动画
        $sentMailTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $sentMailTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $sentMailTpl.remove();
            })
        })

        // 注册搜索按钮事件
        .on('tap', '.sent-mail-search', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        })
    }
})