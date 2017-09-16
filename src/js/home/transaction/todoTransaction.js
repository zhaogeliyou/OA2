define(['text!template/home/transaction/todoTransactionTpl.html', '../../comment/mailSearch/mailSerch'], function(todoTransactionTpl, mailSerch) {
    return function() {
        $('#todoTransactionTpl').remove()
        var $todoTransactionTpl = $(todoTransactionTpl);
        $('.main-content').append($todoTransactionTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.getMailMenu').stop().animate({ 'left': '100%' }, 200);
        })

        // 页面进入动画
        $todoTransactionTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $todoTransactionTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $todoTransactionTpl.remove()
            })
        })

        // 注册搜索按钮事件
        .on('tap', '.todoTransactionSearch', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        })
    }
})