define(['text!template/comment/deliveryNote/deliveryNoteTpl.html'], function(deliveryNoteTpl) {
    return function() {
        $('#deliveryNote').remove();
        var $deliveryNoteTpl = $(deliveryNoteTpl);
        $('.main-content').append($deliveryNoteTpl)
        $deliveryNoteTpl.find('input').attr('readonly', 'readonly')

        // 页面进入动画
        $deliveryNoteTpl.stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $deliveryNoteTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $deliveryNoteTpl.remove()
            })
        })

        // 注册修改按钮上事件
        .on('tap', '.modify', function() {
            $deliveryNoteTpl.find('input').removeAttr('readonly');
            $(this).html('保存')
        })
    }
})