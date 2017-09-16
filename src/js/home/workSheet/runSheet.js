define(['text!template/home/workSheet/runSheetTpl.html', '../../comment/deliveryNote/deliveryNote', '../../comment/mailSearch/mailSerch'], function(runSheetTpl, deliveryNote, mailSerch) {
    return function() {
        $('#runSheet').remove();
        var $runSheetTpl = $(runSheetTpl);
        $('.main-content').append($runSheetTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.getMailMenu').stop().animate({ 'left': '100%' }, 200);
        })

        // 页面进入动画
        $runSheetTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $runSheetTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $runSheetTpl.remove();
            })
        })

        // 注册搜索按钮事件
        .on('tap', '.runSheetSearch', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        })

        // 注册表单列表点击事件
        .on('tap', '.list-item', function() {
            deliveryNote()
        })
    }
})