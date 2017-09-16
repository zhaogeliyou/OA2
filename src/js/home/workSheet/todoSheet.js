define(['text!template/home/workSheet/todoSheetTpl.html', '../../comment/mailSearch/mailSerch'], function(todoSheetTpl, mailSerch) {
    return function() {
        $('#todoSheet').remove();
        var $todoSheetTpl = $(todoSheetTpl);
        $('.main-content').append($todoSheetTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.getMailMenu').stop().animate({ 'left': '100%' }, 200);
        })

        // 页面进入动画
        $todoSheetTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $todoSheetTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $todoSheetTpl.remove();
            })
        })

        // 注册搜索按钮事件
        .on('tap', '.todoSheetSearch', function() {
            mask.show()
            $('.mui-dtpicker').remove()
            mailSerch();
        })
    }
})