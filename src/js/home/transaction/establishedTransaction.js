define(['text!template/home/transaction/establishedTransactionTpl.html', '../../comment/mailSearch/mailSerch'], function(establishedTransactionTpl, mailSerch) {
    return function() {
        $('#establishedTransactionTpl').remove()
        var $establishedTransactionTpl = $(establishedTransactionTpl);
        $('.main-content').append($establishedTransactionTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.getMailMenu').stop().animate({ 'left': '100%' }, 200);
        })

        // 页面进入动画
        $establishedTransactionTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $establishedTransactionTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $establishedTransactionTpl.remove()
            })
        })

        // 注册搜索按钮事件
        .on('tap', '.establishedTransactionSearch', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        })
    }
})