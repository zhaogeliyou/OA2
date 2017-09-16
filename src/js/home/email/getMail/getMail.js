define(['text!template/home/email/getMail/getMailTpl.html', '../../../comment/mailSearch/mailSerch', 'mui', 'picker'], function(getMailTpl, mailSerch, mui, picker) {
    return function() {
        $('#getMail').remove();
        var $getMailTpl = $(getMailTpl);
        $('.main-content').append($getMailTpl)

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.getMailMenu').stop().animate({ 'left': '100%' }, 200);
        })

        // 页面进入动画
        $('#getMail').stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $getMailTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $getMailTpl.remove();
            })
        })

        // 注册邮件搜索按钮事件
        .on('tap', '.mailSearch', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        });
    }
})