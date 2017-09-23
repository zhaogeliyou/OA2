define(['text!template/home/email/getMail/getMailTpl.html', '../../../comment/mailSearch/mailSerch', 'mui', 'picker', '../../../comment/emailContent/emailContent'], function(getMailTpl, mailSerch, mui, picker, emailContent) {
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

        // 注册主题点击事件
        .on('tap', '.show', function() {
            emailContent();
        })

        // 注册邮件搜索按钮事件
        .on('tap', '.mailSearch', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        })

        // 注册删除按钮事件
        .on('tap', '.delete', function() {
            var $this = $(this)
            var btnArray = ['是', '否'];
            mui.confirm('确定删除该计划吗？', '删除后不能恢复', btnArray, function(e) {
                if (e.index == 0) {
                    alert('确认删除操作')
                    $this.parent().parent().remove()
                } else {
                    alert('放弃删除')
                }
            })
        })
    }
})