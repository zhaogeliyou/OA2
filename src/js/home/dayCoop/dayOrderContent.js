define(['text!template/home/dayCoop/dayOrderContentTpl.html'], function(dayOrderContentTpl) {
    return function() {
        $('#deliveryNote').remove();
        var $dayOrderContentTpl = $(dayOrderContentTpl);
        $('.main-content').append($dayOrderContentTpl)
        $dayOrderContentTpl.find('input').attr('readonly', 'readonly')

        // 页面进入动画
        $dayOrderContentTpl.stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $dayOrderContentTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $dayOrderContentTpl.remove()
            })
        })

        // 注册修改按钮上事件
        .on('tap', '.modify', function() {
            $dayOrderContentTpl.find('input').removeAttr('readonly');
            $(this).html('保存')
        })
    }
})