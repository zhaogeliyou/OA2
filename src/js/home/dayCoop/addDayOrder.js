define(['text!template/home/dayCoop/addDayOrderTpl.html'], function(addDayOrderTpl) {
    return function() {
        $('#dayOrderContent').remove();
        var $addDayOrderTpl = $(addDayOrderTpl);
        $('.main-content').append($addDayOrderTpl);

        // 页面进入动画
        $addDayOrderTpl.stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $addDayOrderTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $addDayOrderTpl.remove();
            })
        })

        // 注册添加事项按钮事件
        .on('tap', 'button', function() {
            $('.day-order-detail').append('<div class="start-end">' +
                '<span>起止时间：</span>' +
                '<p>' +
                '<input type="time" value="00:00">' +
                '<span>~</span>' +
                '<input type="time" value="00:00">' +
                '</p>' +
                '</div>' +
                '<div class="day-theme">' +
                ' <span>活动主题：</span>' +
                '<input type="text" value="" placeholder="请输入活动主题">' +
                '</div>' +
                '<div class="details">' +
                '<span>详细内容：</span>' +
                '<textarea rows="1" cols="" placeholder="请输入活动详情"></textarea>' +
                '</div>')
        })

        // 注册保存按钮事件
        .on('tap', '.save', function() {
            var planName = $('.day-order-title input').val();
            $addDayOrderTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $('.sheet-content').append('<div class="list-row">' +
                    '<div class="plan-name sheet-title">' +
                    ' <span>' + planName + '</span>' +
                    '</div>' +
                    '<div class="create-person">' +
                    '<span>发给客户</span>' +
                    '</div>' +
                    '<div class="start-time">' +
                    ' <span>2017-09-09</span>' +
                    '</div>' +
                    '<div class="delete">' +
                    '<span>删除</span>' +
                    ' </div>' +
                    ' </div>')
            })
        })
    }
})