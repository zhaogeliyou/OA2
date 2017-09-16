define(['text!template/home/workSheet/newPlanTpl.html'], function(newPlanTpl) {
    return function() {
        $('#newPlan').remove();
        var $newPlanTpl = $(newPlanTpl);
        $('.main-content').append($newPlanTpl);
        var num = 1;

        // 页面进入动画
        $newPlanTpl.stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $newPlanTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $newPlanTpl.remove();
            })
        })

        // 注册添加事项按钮事件
        .on('tap', 'button', function() {
            // 没添加一项，序号加1
            num++;
            $('.table2').append('<tr><td>' + num + '</td><td><input type="text" value=""></td>' +
                '<td><input type="text" value=""></td>' +
                '<td><input type="text" value=""></td>' +
                '</tr>')
        })
    }
})