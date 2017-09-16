define(['text!template/home/transaction/finishedTransactionTpl.html', '../../comment/mailSearch/mailSerch', '../../comment/transactionBill/transactionBill'], function(finishedTransactionTpl, mailSerch, transactionBill) {
    return function() {
        $('#finishedTransaction').remove();
        var $finishedTransactionTpl = $(finishedTransactionTpl);
        $('.main-content').append($finishedTransactionTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.getMailMenu').stop().animate({ 'left': '100%' }, 200);
        })

        // 页面进入动画
        $finishedTransactionTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $finishedTransactionTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $finishedTransactionTpl.remove();
            })
        })

        // 注册搜索按钮事件
        .on('tap', '.finishedSearch', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        })

        // 注册表单列表点击事件
        .on('tap', '.list-item', function() {
            transactionBill();
        })
    }
})