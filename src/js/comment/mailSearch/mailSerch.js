define(['text!template/comment/mailSearch/mailSearchTpl.html', 'mui'], function(mailSearchTpl, mui) {
    return function() {
        $('.getMailMenu').remove();
        var $mailSearchTpl = $(mailSearchTpl);
        $('.main-content').append($mailSearchTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $mailSearchTpl.stop().animate({ 'left': '100%' }, 200);
        })

        //初始化主页时间组件
        var dtPicker = new mui.DtPicker({
            'type': 'date',
            beginDate: new Date(1917, 01, 01), //设置开始日期 
            endDate: new Date(2100, 01, 01), //设置结束日期 
            labels: ['Year', 'Mon', 'Day'], //设置默认标签区域提示语 
        });

        // 页面进入动画
        $mailSearchTpl.stop().animate({ 'left': '20%' }, 200)

        // 注册侧滑菜单关闭按钮
        $mailSearchTpl.on('tap', '.menuClose', function() {
            $mailSearchTpl.stop().animate({ 'left': '100%' }, 200)
            $('.mui-backdrop').remove()
            $('.mui-dtpicker').remove()
        })

        // 注册日期选择事件
        .on('tap', '.mui-input-row', function() {
            var _this = $(this)
            dtPicker.show(function(selectItems) {
                _this.find('input').val(selectItems.y.value + '-' + selectItems.m.value + '-' + selectItems.d.value)
            })
            $('.mui-backdrop:last').css('z-index', '999');
        })
    }
})