define(['text!template/home/workSheet/builtSheetTpl.html', './newPlan', '../../comment/deliveryNote/deliveryNote', 'mui'], function(builtSheetTpl, newPlan, deliveryNote, mui) {
    return function() {
        $('#builtSheet').remove();
        var $builtSheetTpl = $(builtSheetTpl);
        $('.main-content').append($builtSheetTpl)

        // 页面进入动画
        $builtSheetTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $builtSheetTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $builtSheetTpl.remove()
            })
        })

        // 注册点击计划名称查看计划详情事件
        .on('tap', '.sheet-title span', function() {
            deliveryNote()
        })

        // 注册添加按钮点击事件
        .on('tap', '.new-built', function() {
            newPlan()
        })

        // 注册删除按钮事件
        .on('tap', '.delete', function() {
            var $this = $(this)
            var btnArray = ['是', '否'];
            mui.confirm('确定删除该计划吗？', '删除后不能恢复', btnArray, function(e) {
                if (e.index == 0) {
                    alert('确认删除操作')
                    $this.parent().remove()
                } else {
                    alert('放弃删除')
                }
            })
        })
    }
})