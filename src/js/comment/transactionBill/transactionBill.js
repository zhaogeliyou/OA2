define(['text!template/comment/transactionBill/transactionBillTpl.html'], function(transactionBillTpl) {
    return function() {
        $('#transactionBill').remove();
        var $transactionBillTpl = $(transactionBillTpl);
        $('.main-content').append($transactionBillTpl)

        // 页面进入动画
        $transactionBillTpl.stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $transactionBillTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $transactionBillTpl.remove()
            })
        })
    }
})