define(['text!template/home/dayCoop/dayOrderTpl.html', './dayOrderContent', './addDayOrder', 'mui'], function(dayOrderTpl, dayOrderContent, addDayOrder, mui) {
    return function() {
        $('#dayOrder').remove();
        var $dayOrderTpl = $(dayOrderTpl);
        $('.main-content').append($dayOrderTpl)

        // 页面进入动画
        $dayOrderTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $dayOrderTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $dayOrderTpl.remove()
            })
        })

        // 注册点击计划名称查看计划详情事件
        .on('tap', '.sheet-title span', function() {
            dayOrderContent()
        })

        // 注册添加按钮点击事件
        .on('tap', '.new-built', function() {
            addDayOrder()
        })

        // 注册删除按钮事件
        .on('tap', '.delete', function() {
            var $this = $(this)
            var btnArray = ['是', '否'];
            mui.confirm('确定删除该计划吗？', '删除后不能恢复', btnArray, function(e) {
                if (e.index == 0) {
                    alert('确认删除操作')
                    $this.parent().parent().remove()
                } else {
                    alert('放弃删除')
                }
            })
        })
    }
})